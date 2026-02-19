package com.university.portal.repository;

import com.university.portal.entity.Attendance;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import java.time.LocalDate;
import java.util.List;

public interface AttendanceRepository extends JpaRepository<Attendance, Long> {
    List<Attendance> findByDate(LocalDate date);
    List<Attendance> findByStudentName(String studentName);
    @Query("SELECT DISTINCT a.date FROM Attendance a ORDER BY a.date DESC")
    List<LocalDate> findAllDistinctDates();
    long countByDateAndStatus(LocalDate date, String status);
}
