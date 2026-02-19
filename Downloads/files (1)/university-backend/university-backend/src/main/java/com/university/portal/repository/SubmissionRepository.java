package com.university.portal.repository;

import com.university.portal.entity.Submission;
import com.university.portal.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;
import java.util.Optional;

public interface SubmissionRepository extends JpaRepository<Submission, Long> {
    List<Submission> findByStudent(User student);
    Optional<Submission> findByAssignmentIdAndStudentId(Long assignmentId, Long studentId);
    long countByStatus(String status);
}
