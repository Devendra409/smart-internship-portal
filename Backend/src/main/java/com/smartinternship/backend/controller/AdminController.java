package com.smartinternship.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.smartinternship.backend.entity.Admin;
import com.smartinternship.backend.service.AdminService;

@RestController
@RequestMapping("/api/admins")
@CrossOrigin(origins = "http://localhost:5173")
public class AdminController {

    @Autowired
    private AdminService adminService;

    // Add Admin
    @PostMapping
    public Admin addAdmin(@RequestBody Admin admin) {
        return adminService.saveAdmin(admin);
    }

    // View All Admins
    @GetMapping
    public List<Admin> getAllAdmins() {
        return adminService.getAllAdmins();
    }

    // View Admin By Id
    @GetMapping("/{id}")
    public Admin getAdminById(@PathVariable Long id) {
        return adminService.getAdminById(id);
    }

    // Admin Login
    @PostMapping("/login")
    public Admin login(@RequestBody Admin admin) {
        return adminService.login(admin.getEmail(), admin.getPassword());
    }

    // Delete Admin
    @DeleteMapping("/{id}")
    public void deleteAdmin(@PathVariable Long id) {
        adminService.deleteAdmin(id);
    }
}