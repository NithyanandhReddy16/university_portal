package com.university.portal.controller;

import com.university.portal.dto.AttendanceRecord;
import com.university.portal.dto.AttendanceRequest;
import com.university.portal.dto.AttendanceResponse;
import com.university.portal.entity.Attendance;
import com.university.portal.entity.User;
import com.university.portal.repository.AttendanceRepository;
import com.university.portal.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/attendance")
public class AttendanceController {

    @Autowired private AttendanceRepository attendanceRepository;
    @Autowired private UserRepository userRepository;

    @PostMapping("/mark")
    public ResponseEntity<?> markAttendance(@RequestBody AttendanceRequest req, Authentication auth) {
        User faculty = userRepository.findByEmail(auth.getName()).orElseThrow();
        LocalDate date = LocalDate.parse(req.getDate());

        for (AttendanceRecord rec : req.getRecords()) {
            Optional<Attendance> existing = attendanceRepository.findByDate(date).stream()
                    .filter(a -> a.getStudentName().equals(rec.getStudentName()))
                    .findFirst();

            Attendance attendance = existing.orElse(new Attendance());
            attendance.setStudentName(rec.getStudentName());
            attendance.setDate(date);
            attendance.setStatus(rec.getStatus());
            attendance.setMarkedBy(faculty);
            attendanceRepository.save(attendance);
        }

        return ResponseEntity.ok(Map.of("message", "Attendance saved successfully"));
    }

    @GetMapping("/date/{date}")
    public ResponseEntity<List<AttendanceResponse>> getByDate(@PathVariable String date) {
        LocalDate localDate = LocalDate.parse(date);
        List<AttendanceResponse> result = attendanceRepository.findByDate(localDate).stream()
                .map(a -> new AttendanceResponse(a.getId(), a.getStudentName(), a.getStatus(), a.getDate().toString()))
                .collect(Collectors.toList());
        return ResponseEntity.ok(result);
    }

    @GetMapping("/dates")
    public ResponseEntity<List<String>> getAllDates() {
        List<String> dates = attendanceRepository.findAllDistinctDates().stream()
                .map(LocalDate::toString)
                .collect(Collectors.toList());
        return ResponseEntity.ok(dates);
    }

    @GetMapping("/student/{name}")
    public ResponseEntity<List<AttendanceResponse>> getByStudent(@PathVariable String name) {
        List<AttendanceResponse> result = attendanceRepository.findByStudentName(name).stream()
                .map(a -> new AttendanceResponse(a.getId(), a.getStudentName(), a.getStatus(), a.getDate().toString()))
                .collect(Collectors.toList());
        return ResponseEntity.ok(result);
    }
}
