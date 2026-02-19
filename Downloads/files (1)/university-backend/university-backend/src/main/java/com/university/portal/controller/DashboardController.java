package com.university.portal.controller;

import com.university.portal.dto.DashboardStats;
import com.university.portal.entity.User;
import com.university.portal.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.time.format.TextStyle;
import java.util.ArrayList;
import java.util.List;
import java.util.Locale;

@RestController
@RequestMapping("/api/dashboard")
public class DashboardController {

    @Autowired private UserRepository userRepository;
    @Autowired private SubmissionRepository submissionRepository;
    @Autowired private AttendanceRepository attendanceRepository;

    @GetMapping("/stats")
    public ResponseEntity<DashboardStats> getStats() {
        DashboardStats stats = new DashboardStats();
        stats.setTotalStudents(userRepository.countByRole(User.Role.STUDENT));
        stats.setAssignmentsSubmitted(submissionRepository.countByStatus("Completed"));
        stats.setPendingSubmissions(submissionRepository.countByStatus("Pending"));

        LocalDate today = LocalDate.now();
        stats.setPresentToday(attendanceRepository.countByDateAndStatus(today, "Present"));
        stats.setAbsentToday(attendanceRepository.countByDateAndStatus(today, "Absent"));

        // Last 5 weekdays attendance
        List<DashboardStats.DayAttendance> dayWise = new ArrayList<>();
        LocalDate date = today;
        int count = 0;
        while (count < 5) {
            if (date.getDayOfWeek().getValue() <= 5) { // Mon-Fri
                DashboardStats.DayAttendance day = new DashboardStats.DayAttendance();
                day.setDay(date.getDayOfWeek().getDisplayName(TextStyle.SHORT, Locale.ENGLISH));
                day.setPresent(attendanceRepository.countByDateAndStatus(date, "Present"));
                day.setAbsent(attendanceRepository.countByDateAndStatus(date, "Absent"));
                dayWise.add(0, day); // prepend so order is Mon→Fri
                count++;
            }
            date = date.minusDays(1);
        }
        stats.setDayWiseAttendance(dayWise);

        return ResponseEntity.ok(stats);
    }
}
