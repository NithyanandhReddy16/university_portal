package com.university.portal.dto;

import lombok.Data;
import java.util.List;

@Data
public class AttendanceRequest {
    private String date;
    private List<AttendanceRecord> records;
}
