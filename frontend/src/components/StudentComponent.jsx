import React, { useState, useEffect } from 'react'
import { createStudent, getStudent, updateStudent } from '../services/StudentService'
import { useNavigate, useParams, Link } from 'react-router-dom'

const StudentComponent = () => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')

    const { id } = useParams();
    const [errors, setErrors] = useState({
        firstName: '',
        lastName: '',
        email: ''
    })

    const navigator = useNavigate();

    useEffect(() => {
        if (id) {
            getStudent(id).then((response) => {
                setFirstName(response.data.firstName);
                setLastName(response.data.lastName);
                setEmail(response.data.email);
            }).catch(error => {
                console.error(error);
            })
        }
    }, [id])

    const saveOrUpdateStudent = (e) => {
        e.preventDefault();

        if (validateForm()) {
            const student = { firstName, lastName, email }

            if (id) {
                updateStudent(id, student).then((response) => {
                    navigator('/students');
                }).catch(error => {
                    console.error(error);
                })
            } else {
                createStudent(student).then((response) => {
                    navigator('/students')
                }).catch(error => {
                    console.error(error);
                })
            }
        }
    }

    const validateForm = () => {
        let valid = true;
        const errorsCopy = { ...errors }

        if (firstName.trim()) {
            errorsCopy.firstName = '';
        } else {
            errorsCopy.firstName = 'First name is required';
            valid = false;
        }

        if (lastName.trim()) {
            errorsCopy.lastName = '';
        } else {
            errorsCopy.lastName = 'Last name is required';
            valid = false;
        }

        if (email.trim()) {
            errorsCopy.email = '';
        } else {
            errorsCopy.email = 'Email is required';
            valid = false;
        }

        setErrors(errorsCopy);
        return valid;
    }

    const pageTitle = () => {
        if (id) {
            return <h2 className='text-center mt-3 mb-4 text-primary fw-bold'>Update Student</h2>
        } else {
            return <h2 className='text-center mt-3 mb-4 text-primary fw-bold'>Add Student</h2>
        }
    }

    return (
        <div className='container-fluid mt-5 mb-5 px-3 px-md-5' style={{ minHeight: '80vh' }}>
            <div className='row justify-content-center h-100 align-items-center'>
                <div className='col-12 col-md-11 col-lg-10'>
                    <div className='card shadow-lg border-0 rounded-4 p-3 p-md-4'>
                        <div className="card-body p-4 p-md-5">
                            {pageTitle()}
                            <form onSubmit={saveOrUpdateStudent}>
                                <div className='form-group mb-4'>
                                    <label className='form-label fw-bold'>First Name</label>
                                    <input
                                        type='text'
                                        placeholder='Enter Student First Name'
                                        name='firstName'
                                        value={firstName}
                                        className={`form-control form-control-lg ${errors.firstName ? 'is-invalid' : ''}`}
                                        onChange={(e) => setFirstName(e.target.value)}
                                    >
                                    </input>
                                    {errors.firstName && <div className='invalid-feedback'>{errors.firstName}</div>}
                                </div>

                                <div className='form-group mb-4'>
                                    <label className='form-label fw-bold'>Last Name</label>
                                    <input
                                        type='text'
                                        placeholder='Enter Student Last Name'
                                        name='lastName'
                                        value={lastName}
                                        className={`form-control form-control-lg ${errors.lastName ? 'is-invalid' : ''}`}
                                        onChange={(e) => setLastName(e.target.value)}
                                    >
                                    </input>
                                    {errors.lastName && <div className='invalid-feedback'>{errors.lastName}</div>}
                                </div>

                                <div className='form-group mb-4'>
                                    <label className='form-label fw-bold'>Email</label>
                                    <input
                                        type='email'
                                        placeholder='Enter Student Email'
                                        name='email'
                                        value={email}
                                        className={`form-control form-control-lg ${errors.email ? 'is-invalid' : ''}`}
                                        onChange={(e) => setEmail(e.target.value)}
                                    >
                                    </input>
                                    {errors.email && <div className='invalid-feedback'>{errors.email}</div>}
                                </div>

                                <div className="d-grid gap-2 mt-4 text-center">
                                    <button type="submit" className='btn btn-primary btn-lg rounded-pill shadow-sm mb-2'>
                                        Submit
                                    </button>
                                    <Link to="/students" className="text-secondary text-decoration-none hover-secondary">
                                        Cancel & Go Back
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StudentComponent
