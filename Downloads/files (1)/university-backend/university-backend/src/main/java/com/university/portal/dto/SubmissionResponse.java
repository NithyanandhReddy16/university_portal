package com.university.portal.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class SubmissionResponse {
    private Long id;
    private String title;
    private String course;
    private String submittedOn;
    private String status;
    private String fileName;
    private String fileUrl;
    private String grade;
}
