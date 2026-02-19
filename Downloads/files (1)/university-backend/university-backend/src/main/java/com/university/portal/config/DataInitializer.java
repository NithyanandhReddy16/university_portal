package com.university.portal.config;

import com.university.portal.entity.Assignment;
import com.university.portal.repository.AssignmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DataInitializer implements CommandLineRunner {

    @Autowired
    private AssignmentRepository assignmentRepository;

    @Override
    public void run(String... args) {
        if (assignmentRepository.count() == 0) {
            assignmentRepository.save(new Assignment(null, "Programming using C", "Programming using C", "2026-02-28", "Complete exercises from chapter 5"));
            assignmentRepository.save(new Assignment(null, "Oops using Java", "Oops using Java", "2026-03-05", "Implement inheritance and polymorphism examples"));
            assignmentRepository.save(new Assignment(null, "Python Programming", "Python Programming", "2026-03-10", "Build a simple calculator using Python"));
        }
    }
}
