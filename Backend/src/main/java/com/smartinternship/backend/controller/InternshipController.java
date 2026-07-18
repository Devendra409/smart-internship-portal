package com.smartinternship.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.smartinternship.backend.entity.Internship;
import com.smartinternship.backend.service.InternshipService;

@RestController
@RequestMapping("/api/internships")
@CrossOrigin(origins = "http://localhost:5173")
public class InternshipController {

    @Autowired
    private InternshipService internshipService;

    // Add Internship
    @PostMapping
    public Internship addInternship(@RequestBody Internship internship) {
        return internshipService.addInternship(internship);
    }

    // Get All Internships
    @GetMapping
    public List<Internship> getAllInternships() {
        return internshipService.getAllInternships();
    }

    // Get Internship By Id
    @GetMapping("/{id}")
    public Internship getInternshipById(@PathVariable Long id) {
        return internshipService.getInternshipById(id);
    }

    // Update Internship
    @PutMapping("/{id}")
    public Internship updateInternship(@PathVariable Long id,
                                       @RequestBody Internship internship) {
        return internshipService.updateInternship(id, internship);
    }

    // Delete Internship
    @DeleteMapping("/{id}")
    public String deleteInternship(@PathVariable Long id) {
        return internshipService.deleteInternship(id);
    }
}