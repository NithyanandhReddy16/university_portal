package com.university.portal.controller;

import com.university.portal.dto.AssignmentResponse;
import com.university.portal.dto.SubmissionResponse;
import com.university.portal.entity.Assignment;
import com.university.portal.entity.Submission;
import com.university.portal.entity.User;
import com.university.portal.repository.AssignmentRepository;
import com.university.portal.repository.SubmissionRepository;
import com.university.portal.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.nio.file.*;
import java.time.LocalDate;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/assignments")
public class AssignmentController {

    @Autowired private AssignmentRepository assignmentRepository;
    @Autowired private SubmissionRepository submissionRepository;
    @Autowired private UserRepository userRepository;

    @Value("${app.upload.dir}")
    private String uploadDir;

    @GetMapping
    public ResponseEntity<List<AssignmentResponse>> getAll() {
        List<AssignmentResponse> list = assignmentRepository.findAll().stream()
                .map(a -> new AssignmentResponse(a.getId(), a.getTitle(), a.getCourse(), a.getDueDate(), a.getDescription()))
                .collect(Collectors.toList());
        return ResponseEntity.ok(list);
    }

    @PostMapping("/{id}/submit")
    public ResponseEntity<?> submit(@PathVariable Long id,
                                     @RequestParam("file") MultipartFile file,
                                     Authentication auth) throws IOException {
        User student = userRepository.findByEmail(auth.getName()).orElseThrow();
        Assignment assignment = assignmentRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Assignment not found"));

        // Save file
        String uploadPath = System.getProperty("user.dir") + File.separator + uploadDir;
        Files.createDirectories(Paths.get(uploadPath));
        String filename = System.currentTimeMillis() + "_" + file.getOriginalFilename();
        Path filePath = Paths.get(uploadPath, filename);
        Files.copy(file.getInputStream(), filePath, StandardCopyOption.REPLACE_EXISTING);

        // Save or update submission
        Optional<Submission> existing = submissionRepository.findByAssignmentIdAndStudentId(id, student.getId());
        Submission submission = existing.orElse(new Submission());
        submission.setAssignment(assignment);
        submission.setStudent(student);
        submission.setFileName(file.getOriginalFilename());
        submission.setFileUrl("/uploads/" + filename);
        submission.setSubmittedOn(LocalDate.now());
        submission.setStatus("Completed");
        submissionRepository.save(submission);

        return ResponseEntity.ok(Map.of("message", "Assignment submitted successfully"));
    }

    @GetMapping("/submissions/mine")
    public ResponseEntity<List<SubmissionResponse>> mySubmissions(Authentication auth) {
        User student = userRepository.findByEmail(auth.getName()).orElseThrow();
        List<SubmissionResponse> list = submissionRepository.findByStudent(student).stream()
                .map(s -> new SubmissionResponse(
                        s.getId(),
                        s.getAssignment().getTitle(),
                        s.getAssignment().getCourse(),
                        s.getSubmittedOn().toString(),
                        s.getStatus(),
                        s.getFileName(),
                        s.getFileUrl(),
                        s.getGrade()))
                .collect(Collectors.toList());
        return ResponseEntity.ok(list);
    }
}
