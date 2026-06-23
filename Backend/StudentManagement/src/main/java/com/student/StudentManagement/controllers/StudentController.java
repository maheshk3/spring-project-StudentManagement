package com.student.StudentManagement.controllers;

import com.student.StudentManagement.entity.Student;
import com.student.StudentManagement.service.StudentService;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/students")
@CrossOrigin("*")
public class StudentController {

    private final StudentService service;

    public StudentController(
            StudentService service) {

        this.service = service;
    }

    @PostMapping
    public Student addStudent(
            @RequestBody Student student) {

        return service.saveStudent(student);
    }
    @PostMapping("/all")
    public List<Student> addAllStudents(
            @RequestBody List<Student> students){

        return service.saveAll(students);
    }

    @GetMapping
    public List<Student> getAllStudents() {

        return service.getAllStudents();
    }

    @GetMapping("/{id}")
    public Student getStudentById(
            @PathVariable Long id) {

        return service.getStudentById(id);
    }

    @PutMapping("/{id}")
    public Student updateStudent(
            @PathVariable Long id,
            @RequestBody Student student) {

        return service.updateStudent(
                id,
                student);
    }

    @DeleteMapping("/{id}")
    public String deleteStudent(
            @PathVariable Long id) {

        service.deleteStudent(id);

        return "Student Deleted Successfully";
    }
}