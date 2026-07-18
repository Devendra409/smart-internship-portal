package com.smartinternship.backend.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "internships")
@Data
public class Internship {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String companyName;

    @Column(nullable = false)
    private String internshipTitle;

    @Column(nullable = false)
    private String location;

    @Column(nullable = false)
    private String duration;

    @Column(nullable = false)
    private String stipend;

    @Column(nullable = false, length = 2000)
    private String description;

    @Column(nullable = false)
    private String skillsRequired;

    @Column(nullable = false)
    private String lastDate;

}