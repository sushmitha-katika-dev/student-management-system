package com.example.sms.service.impl;

import java.util.List;
import org.springframework.stereotype.Service;

import com.example.sms.exception.ResourceNotFoundException;
import com.example.sms.model.Student;
import com.example.sms.repository.StudentRepository;
import com.example.sms.service.StudentService;

@Service
public class StudentServiceImpl implements StudentService {

    private StudentRepository studentRepository;

    public StudentServiceImpl(StudentRepository studentRepository) {
        super();
        this.studentRepository = studentRepository;
    }

    @Override
    public Student saveStudent(Student student) {
        return studentRepository.save(student);
    }

    @Override
    public List<Student> getAllStudents() {
        return studentRepository.findAll();
    }

    @Override
    public Student getStudentById(long id) {
        return studentRepository.findById(id).orElseThrow(() -> 
            new ResourceNotFoundException("Student not found with id : " + id));
    }

    @Override
    public Student updateStudent(Student student, long id) {
        Student existingStudent = studentRepository.findById(id).orElseThrow(
            () -> new ResourceNotFoundException("Student not found with id : " + id));
        
        existingStudent.setFirstName(student.getFirstName());
        existingStudent.setLastName(student.getLastName());
        existingStudent.setEmail(student.getEmail());
        
        studentRepository.save(existingStudent);
        return existingStudent;
    }

    @Override
    public void deleteStudent(long id) {
        studentRepository.findById(id).orElseThrow(() -> 
            new ResourceNotFoundException("Student not found with id : " + id));
        studentRepository.deleteById(id);
    }
}
