package com.smartinternship.backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.smartinternship.backend.entity.Internship;
import com.smartinternship.backend.repository.InternshipRepository;

@Service
public class InternshipService {

    @Autowired
    private InternshipRepository internshipRepository;

    // Add Internship
    public Internship addInternship(Internship internship) {
        return internshipRepository.save(internship);
    }

    // Get All Internships
    public List<Internship> getAllInternships() {
        return internshipRepository.findAll();
    }

    // Get Internship By Id
    public Internship getInternshipById(Long id) {
        return internshipRepository.findById(id).orElse(null);
    }

    // Update Internship
    public Internship updateInternship(Long id, Internship internship) {

        Internship existing = internshipRepository.findById(id).orElse(null);

        if (existing != null) {
            existing.setCompanyName(internship.getCompanyName());
            existing.setInternshipTitle(internship.getInternshipTitle());
            existing.setLocation(internship.getLocation());
            existing.setDuration(internship.getDuration());
            existing.setStipend(internship.getStipend());
            existing.setDescription(internship.getDescription());
            existing.setSkillsRequired(internship.getSkillsRequired());
            existing.setLastDate(internship.getLastDate());

            return internshipRepository.save(existing);
        }

        return null;
    }

    // Delete Internship
    public String deleteInternship(Long id) {
        internshipRepository.deleteById(id);
        return "Internship Deleted Successfully";
    }
}