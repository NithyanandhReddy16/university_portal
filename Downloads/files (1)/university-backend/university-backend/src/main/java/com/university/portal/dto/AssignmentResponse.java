package com.university.portal.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class AssignmentResponse {
    private Long id;
    private String title;
    private String course;
    private String dueDate;
    private String description;
}
