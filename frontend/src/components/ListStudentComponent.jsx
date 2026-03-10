import React, { useEffect, useState } from 'react'
import { deleteStudent, listStudents } from '../services/StudentService'
import { useNavigate } from 'react-router-dom'

const ListStudentComponent = () => {

    const [students, setStudents] = useState([])
    const navigator = useNavigate();

    useEffect(() => {
        getAllStudents();
    }, [])

    const getAllStudents = () => {
        listStudents().then((response) => {
            setStudents(response.data);
        }).catch(error => {
            console.error(error);
        })
    }

    const addNewStudent = () => {
        navigator('/add-student')
    }

    const updateStudent = (id) => {
        navigator(`/edit-student/${id}`)
    }

    const removeStudent = (id) => {
        deleteStudent(id).then((response) => {
            getAllStudents();
        }).catch(error => {
            console.error(error);
        })
    }

    return (
        <div className='container-fluid mt-5 px-3 px-md-5' style={{ minHeight: '80vh' }}>
            <h2 className='text-center mt-4 mb-4 text-primary fw-bold'>Student Management System</h2>
            <div className='d-flex justify-content-between mb-3 align-items-center'>
                <h4 className='text-secondary mb-0'>List of Students</h4>
                <button className='btn btn-primary shadow-sm rounded-pill px-4' onClick={addNewStudent}>
                   Add Student
                </button>
            </div>
            <div className="card shadow-lg border-0 rounded-4">
                <div className="card-body p-0">
                    <table className='table table-hover table-striped mb-0'>
                        <thead className='table-dark text-center'>
                            <tr>
                                <th>Id</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                students.map(student =>
                                    <tr key={student.id} className='text-center align-middle'>
                                        <td className='fw-bold text-muted'>{student.id}</td>
                                        <td>{student.firstName}</td>
                                        <td>{student.lastName}</td>
                                        <td>{student.email}</td>
                                        <td>
                                            <button className='btn btn-sm btn-outline-info me-2 rounded-pill px-3' onClick={() => updateStudent(student.id)}>
                                                Update
                                            </button>
                                            <button className='btn btn-sm btn-outline-danger rounded-pill px-3' onClick={() => removeStudent(student.id)}>
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                    {students.length === 0 && (
                        <div className="text-center p-5 text-muted">
                            <h5>No students found.</h5>
                            <p>Click "Add Student" to create a new record.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default ListStudentComponent
