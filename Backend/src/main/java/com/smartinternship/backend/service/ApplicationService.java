package com.smartinternship.backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.smartinternship.backend.entity.Application;
import com.smartinternship.backend.repository.ApplicationRepository;

@Service
public class ApplicationService {

    @Autowired
    private ApplicationRepository applicationRepository;

    // Apply Internship
    public Application apply(Application application) {
        application.setApplicationStatus("Pending");
        return applicationRepository.save(application);
    }

    // View All Applications
    public List<Application> getAllApplications() {
        return applicationRepository.findAll();
    }

    // View One Application
    public Application getApplicationById(Long id) {
        return applicationRepository.findById(id).orElse(null);
    }

    // Delete Application
    public void deleteApplication(Long id) {
        applicationRepository.deleteById(id);
    }
}