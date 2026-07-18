package com.smartinternship.backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.smartinternship.backend.entity.Student;
import com.smartinternship.backend.repository.StudentRepository;

@Service
public class StudentService {

    @Autowired
    private StudentRepository studentRepository;

    // Register Student
    public Student registerStudent(Student student) {
        return studentRepository.save(student);
    }

    // Login Student
    public Student loginStudent(String email, String password) {

        Student student = studentRepository.findByEmail(email).orElse(null);

        if (student != null && student.getPassword().equals(password)) {
            return student;
        }

        return null;
    }

    // Get All Students
    public List<Student> getAllStudents() {
        return studentRepository.findAll();
    }

    // Get Student By Id
    public Student getStudentById(Long id) {
        return studentRepository.findById(id).orElse(null);
    }

    // Update Student
    public Student updateStudent(Long id, Student student) {

        Student existingStudent = studentRepository.findById(id).orElse(null);

        if (existingStudent != null) {

            existingStudent.setFullName(student.getFullName());
            existingStudent.setEmail(student.getEmail());
            existingStudent.setPassword(student.getPassword());
            existingStudent.setPhone(student.getPhone());
            existingStudent.setCollege(student.getCollege());
            existingStudent.setCourse(student.getCourse());
            existingStudent.setBranch(student.getBranch());
            existingStudent.setYear(student.getYear());

            return studentRepository.save(existingStudent);
        }

        return null;
    }

    // Delete Student
    public String deleteStudent(Long id) {

        studentRepository.deleteById(id);

        return "Student Deleted Successfully";
    }
}