package com.student.StudentManagement.service;

import com.student.StudentManagement.entity.Student;

import java.util.List;

public interface StudentService {

    Student saveStudent(Student student);

    List<Student> getAllStudents();

    Student getStudentById(Long id);

    Student updateStudent(Long id,
                          Student student);

    void deleteStudent(Long id);

    List<Student> saveAll(List<Student> students);


}