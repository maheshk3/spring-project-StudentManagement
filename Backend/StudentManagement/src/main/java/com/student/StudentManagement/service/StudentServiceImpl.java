package com.student.StudentManagement.service;
import com.student.StudentManagement.entity.Student;
import com.student.StudentManagement.repostiary.StudentRepository;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class StudentServiceImpl
        implements StudentService {

    private final StudentRepository repository;

    public StudentServiceImpl(
            StudentRepository repository) {

        this.repository = repository;
    }

    @Override
    public Student saveStudent(Student student) {

        return repository.save(student);
    }

    @Override
    public List<Student> getAllStudents() {

        return repository.findAll();
    }

    @Override
    public Student getStudentById(Long id) {

        return repository.findById(id)
                .orElseThrow(() ->
                        new RuntimeException(
                                "Student Not Found"));
    }

    @Override
    public Student updateStudent(
            Long id,
            Student student) {

        Student existing =
                repository.findById(id)
                        .orElseThrow(() ->
                                new RuntimeException(
                                        "Student Not Found"));

        existing.setName(student.getName());
        existing.setEmail(student.getEmail());
        existing.setPhone(student.getPhone());
        existing.setCourse(student.getCourse());
        existing.setDob(student.getDob());
        existing.setAddress(student.getAddress());

        return repository.save(existing);
    }

    @Override
    public void deleteStudent(Long id) {

        repository.deleteById(id);
    }


    @Override
    public List<Student> saveAll(
            List<Student> students) {

        return repository.saveAll(students);
    }

}