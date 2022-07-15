import React, { useState } from 'react'
import NavSideBar from '../components/NavSideBar'
import FormContainer  from '../components/FormContainer'
import { Form, Col  } from 'react-bootstrap'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import { Typeahead } from 'react-bootstrap-typeahead'
import { Fragment } from 'react'


const Signup = () => {

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
        <Fragment>
            <NavSideBar />
            <FormContainer>
            <div className="flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h2 className="h2 text-success">Sign Up Player</h2>
            </div>

            <div className="flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h4 className="section-header text-success">Player Bio</h4>
            </div>
            <Form.Group as={Row} className="control-group mb-4" controlId='playerBio'>
                <Col sm="4">
                    <Form.Control 
                        className="mb-3"
                        type="text" 
                        placeholder="First Name" 
                        onChange={e=>console.log(e.target.value)}
                    />
                </Col>
                <Col sm="4">
                    <Form.Control 
                        className="mb-3"
                        type="text" 
                        placeholder="Middle Name" 
                        onChange={e=>console.log(e.target.value)}
                    />
                </Col>
                <Col sm="4">
                    <Form.Control 
                        className="mb-3"
                        type="text" 
                        placeholder="Last Name" 
                        onChange={e=>console.log(e.target.value)}
                    />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="control-group mb-4" controlId='dateOfBirth'>
                <Col sm="4">
                    <Form.Label>Date of Birth</Form.Label>
                </Col>
                <Col sm="8">
                    <Form.Control
                        type='date'
                        placeholder='Date of Birth'
                        onChange={e=>console.log(e.target.value)}
                    >
                    </Form.Control>
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="control-group mb-4" controlId='gender'>
                <Col sm="4"><Form.Label>Gender</Form.Label></Col>
                <Col sm="8">
                    <Form.Select
                        className="mb-3"
                        onChange={e=>console.log(e.target.value)}
                    >
                        <option></option>
                        <option value="female">Female</option>
                        <option value="male">Male</option>
                    </Form.Select>  
                </Col>
            </Form.Group>
            <hr />
        <div className="flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h4 className="section-header text-success">Caregiver Details</h4>
        </div>
            <Form.Group as={Row} className="control-group mb-4" controlId='caregiverDetails'>
                <Col sm="4">
                    <Form.Control 
                        className="mb-3"
                        type="text" 
                        placeholder="Caregiver's Name" 
                        onChange={e=>console.log(e.target.value)}
                    />
                </Col>
                <Col sm="4">
                    <Form.Control 
                        className="mb-3"
                        type="text" 
                        placeholder="Phone Number" 
                        onChange={e=>console.log(e.target.value)}
                    />
                </Col>
                <Col sm="4">
                    <Form.Select
                        className="mb-3"
                        onChange={e=>console.log(e.target.value)}
                    >
                        <option />
                        <option value="father">Father</option>
                        <option value="mother">Mother</option>
                        <option value="guardian">Guardian</option>
                    </Form.Select>
                </Col>
            </Form.Group>
            <hr />
        <div className="flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h4 className="section-header text-success">SRF Details</h4>
        </div>
            <Form.Group as={Row} className="control-group mb-4" controlId='clinic'>
                <Col sm="4"><Form.Label>Clinic</Form.Label></Col>
                <Col sm="8">
                    <Form.Select
                        className="mb-3"
                        onChange={e=>console.log(e.target.value)}
                    >
                        <option></option>
                        <option value="eastlands">Eastlands</option>
                        <option value="kangemi">Kangemi</option>
                        <option value="kibera">Kibera</option>
                        <option value="korogocho">Korogocho</option>
                        <option value="mathare">Mathare</option>
                        <option value="ngewe">Ngewe</option>
                        <option value="tatucity">Tatu City</option>
                    </Form.Select>  
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="control-group mb-4" controlId='team'>
                <Col sm="4"><Form.Label>Teams</Form.Label></Col>
                <Col sm="8">
                    <Form.Select
                        className="mb-3"
                        onChange={e=>console.log(e.target.value)}
                    >
                        <option></option>
                        <option value="Under10s">Under 10s</option>
                        <option value="Under12s">Under 12s</option>
                        <option value="under16s">Under 16s</option>
                        <option value="junior">Junior</option>
                        <option value="senior">Senior</option>
                    </Form.Select>  
                </Col>
            </Form.Group>
            <div className="form-group row pt-2" controlId='submitButton'>
                <div className="col-sm-4">
                    <button type="submit" className="btn btn-success mb-4">Submit</button>
                </div>
            </div>
            </FormContainer>
            <br />
        </Fragment>
    )
}

export default Signup