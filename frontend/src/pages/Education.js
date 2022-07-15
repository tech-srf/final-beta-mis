import React, { useState } from 'react'
import Image from '../assets/img/man.png'
import FormContainer from '../components/FormContainer'
import { Form } from 'react-bootstrap'
import Table from 'react-bootstrap/Table'
import NavSideBar from '../components/NavSideBar'


const Education = () => {
    const [form, setForm] = useState({});
    const [errors, setErrors] = useState({})
    const setField = (field, value) => {
        setForm({
            ...form,
            [field]:value
        })
        
        if(!!errors[field])
        setErrors({
            ...errors,
            [field]:null
        })
    }

    return (
        <div>
            <NavSideBar />
            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <h3 className="h3">Education</h3>
                    <div className="btn-toolbar mb-2 mb-md-0">
                    <div className="btn-group me-2">
                        <button type="button" className="btn btn-sm btn-outline-success px-4">Edit</button>
                    </div>
                        <button type="button" className="btn btn-sm btn-outline-success px-4">
                                <span data-feather="calendar"></span>
                                Save
                        </button>
                    </div>
                </div>
                <div className="input-group w-10 px-1">
                        
                    </div>
                    <FormContainer>
                        <div>
                            <input className="form-control-search w-50" type="text" placeholder="Search for..." aria-label="Search for..."
                                    aria-describedby="btnNavbarSearch"
                            />
                            <button className="btn btn-success" id="btnNavbarSearch" type="button">
                                    <i className="bi bi-search"></i>
                            </button>
                        </div>
                        <div class="card shadow-sm mb-4">
                            <div class="row g-0">
                                <div class="col-md-4">
                                    <img className="img pt-5 mb-3" width="75%" src={Image} alt="" />
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="card-title">Players Name</h5>
                                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                    </div>
                                </div>
                            </div>
                        </div> 
                        
                        <Table striped bordered hover>
                        <thead>
                            <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Attendance</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>
                                <Form.Check
                                    inline
                                    value="present"
                                    onChange={e=>console.log(e.target.value)}
                                />
                            </td>
                            </tr>
                            <tr>
                            <td>2</td>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>
                                <Form.Check
                                    inline
                                    value="present"
                                    onChange={e=>console.log(e.target.value)}
                                />
                            </td>
                            </tr>
                            <tr>
                            <td>3</td>
                            <td>Larry</td>
                            <td>Bird</td>
                            <td>
                                <Form.Check
                                    inline
                                    value="present"
                                    onChange={e=>console.log(e.target.value)}
                                />
                            </td>
                            </tr>
                        </tbody>
                </Table>


                    </FormContainer>

            </main>
        </div>
    )
}

export default Education