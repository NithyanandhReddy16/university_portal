package com.university.portal.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class AttendanceResponse {
    private Long id;
    private String studentName;
    private String status;
    private String date;
}
