package com.university.portal.entity;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;
import java.time.LocalDate;

@Entity
@Table(name = "attendance", uniqueConstraints = @UniqueConstraint(columnNames = {"student_name", "date"}))
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Attendance {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "student_name", nullable = false)
    private String studentName;

    @Column(nullable = false)
    private LocalDate date;

    @Column(nullable = false)
    private String status; // "Present" or "Absent"

    @ManyToOne
    @JoinColumn(name = "marked_by_faculty_id")
    private User markedBy;
}
