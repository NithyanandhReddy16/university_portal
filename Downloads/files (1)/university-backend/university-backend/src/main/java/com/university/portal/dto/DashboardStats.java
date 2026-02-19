package com.university.portal.dto;

import lombok.Data;
import java.util.List;

@Data
public class DashboardStats {
    private long totalStudents;
    private long assignmentsSubmitted;
    private long pendingSubmissions;
    private long presentToday;
    private long absentToday;
    private List<DayAttendance> dayWiseAttendance;

    @Data
    public static class DayAttendance {
        private String day;
        private long present;
        private long absent;
    }
}
