package com.smartinternship.backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.smartinternship.backend.entity.Admin;
import com.smartinternship.backend.repository.AdminRepository;

@Service
public class AdminService {

    @Autowired
    private AdminRepository adminRepository;

    // Add Admin
    public Admin saveAdmin(Admin admin) {
        return adminRepository.save(admin);
    }

    // Get All Admins
    public List<Admin> getAllAdmins() {
        return adminRepository.findAll();
    }

    // Get Admin By Id
    public Admin getAdminById(Long id) {
        return adminRepository.findById(id).orElse(null);
    }

    // Admin Login
    public Admin login(String email, String password) {
        return adminRepository.findByEmail(email)
                .filter(admin -> admin.getPassword().equals(password))
                .orElse(null);
    }

    // Delete Admin
    public void deleteAdmin(Long id) {
        adminRepository.deleteById(id);
    }
}