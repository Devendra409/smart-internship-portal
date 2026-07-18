package com.smartinternship.backend.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "applications")
@Data
public class Application {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String studentName;

    private String studentEmail;

    private String studentPhone;

    @ManyToOne
    @JoinColumn(name = "internship_id")
    private Internship internship;

    private String applicationStatus;
}