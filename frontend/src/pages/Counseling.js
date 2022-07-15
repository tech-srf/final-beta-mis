import React, { useState, Fragment } from 'react'
import Image from '../assets/img/man.png'
import NavSideBar from '../components/NavSideBar'
import FormContainer  from '../components/FormContainer'
import { Form, Col  } from 'react-bootstrap'
import Row from 'react-bootstrap/Row'
// import Container from 'react-bootstrap/Container'
import { PropTypes } from 'prop-types';


const Counseling = () => {

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
                        <h2 className="h2 text-success">Counseling</h2>
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
                        <Form.Group as={Row} className="control-group mb-4" controlId='visit-date'>
                            <Col sm="2">
                                <Form.Label>Date</Form.Label>
                            </Col>
                            <Col sm="10">
                                <Form.Control
                                    type='date'
                                    placeholder='Visit date'
                                    onChange={e=>console.log(e.target.value)}
                                >
                            </Form.Control>
                            </Col>        
                        </Form.Group>
                        <Form.Group as={Row}>
                            <Col><Form.Label>Client type</Form.Label></Col>
                            <Col>
                                <Form.Select
                                    className="mb-3"
                                    onChange={e=>console.log(e.target.value)}
                                >
                                    <option></option>
                                    <option value="walk-in">Walk In</option>
                                    <option value="coach">Refered by Coach</option>
                                    <option value="counselor">Couselor Initiated</option>
                                    <option value="peer">Peer Initiated</option>
                                    <option value="home-visit">Referred after Home Visit</option>
                                </Form.Select>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row}>
                            <Col><Form.Label>Session Category</Form.Label></Col>
                            <Col>
                                <Form.Select
                                    className="mb-3"
                                    onChange={e=>console.log(e.target.value)}
                                >
                                    <option></option>
                                    <option value="individual">Individual</option>
                                    <option value="group">Group</option>
                                    <option value="family">Family</option>
                                </Form.Select>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row}>
                            <Col><Form.Label>Session Type</Form.Label></Col>
                            <Col>
                                <Form.Select
                                    className="mb-3"
                                    onChange={e=>console.log(e.target.value)}
                                >
                                    <option></option>
                                    <option value="new-issue">New Issue</option>
                                    <option value="followup-issue">Follow Up Issue</option>
                                </Form.Select>
                            </Col>
                        </Form.Group>
                        <Form.Group className="control-group mb-4" controlId='counseling-issues'>
                            <Form.Control 
                                placeholder="Counselling Issues addressed"
                                as="textarea" rows={3} 
                                onChange={e=>console.log(e.target.value)}/>
                        </Form.Group>
                    <Form.Group className="control-group mb-4" controlId='observations'>
                        <Form.Control 
                            placeholder="Observe general appearance of Client, dressing, emotions being projected, e.t.c"
                            as="textarea" rows={3} 
                            onChange={e=>console.log(e.target.value)}/>
                    </Form.Group>
                    <Form.Group className="control-group mb-4" controlId='challenges'>
                        <Form.Control 
                            placeholder="Challenges"
                            as="textarea" rows={3} 
                            onChange={e=>console.log(e.target.value)}/>
                    </Form.Group>
                    <Form.Group className="control-group mb-4" controlId='next-steps'>
                        <Form.Control 
                            placeholder="Next Steps and Treatment plan"
                            as="textarea" rows={3} 
                            onChange={e=>console.log(e.target.value)}/>
                    </Form.Group>
                    <Form.Group className="control-group mb-4" controlId='additional-comments'>
                        <Form.Control 
                            placeholder="Additional comments"
                            as="textarea" rows={3} 
                            onChange={e=>console.log(e.target.value)}/>
                    </Form.Group>
{/* FORM SUBMIT */}
                    <div className="form-group row pt-2 mb-4" controlId='submitButton'>
                        <div className="col-sm-4">
                            <button type="submit" className="btn btn-success mb-4">Submit</button>
                        </div>
                    </div>
                </FormContainer>
        </Fragment>
    )}
export default Counseling