import React, { useState, Fragment } from 'react'
import Image from '../assets/img/man.png'
import NavSideBar from '../components/NavSideBar'
import FormContainer  from '../components/FormContainer'
import { Form, Col  } from 'react-bootstrap'
import Row from 'react-bootstrap/Row'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

const Visits = () => {
    const [key, setKey] = useState('home');
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
                <h2 className="h2 text-success">Visits</h2>
            </div>

{/* Class 8 */}
            <Tabs
                id="controlled-tab-example"
                activeKey={key}
                onSelect={(k) => setKey(k)}
                className="mb-3"
            >
                <Tab eventKey="class8" title="Class 8">
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
                        <Col><Form.Label>Respondent</Form.Label></Col>
                        <Col>
                            <Form.Select
                                className="mb-3"
                                value=""
                                onChange={e=>console.log(e.target.value)}
                                >
                                <option></option>
                                <option value="father">Father</option>
                                <option value="mother">Mother</option>
                                <option value="guardian">Guardian</option>
                            </Form.Select>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row}>
                        <Col><Form.Label>Dependants in Class 8</Form.Label></Col>
                        <Col>
                            <Form.Select
                                className="mb-3"
                                onChange={e=>console.log(e.target.value)}
                                >
                                <option></option>
                                <option value="0">0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                            </Form.Select>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row}>
                        <Col><Form.Label>What is the current academic performance of the class 8 dependents?</Form.Label></Col>
                        <Col>
                            <Form.Select
                                className="mb-3"
                                onChange={e=>console.log(e.target.value)}
                                >
                                <option></option>
                                <option value="high">High (above 350)</option>
                                <option value="average">Average (250 - 300)</option>
                                <option value="b-average">Below Average (250 & below) </option>
                            </Form.Select>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row}>
                        <Col><Form.Label>Do you expect your chid/children to join High School</Form.Label></Col>
                        <Col>
                            <Form.Select
                                className="mb-3"
                                onChange={e=>console.log(e.target.value)}
                                >
                                <option></option>
                                <option value="no">No</option>
                                <option value="yes">Yes</option>
                            </Form.Select>
                        </Col>
                    </Form.Group>
                    <Form.Group className="control-group mb-4" controlId='scoreExpectation'>
                        <Form.Control 
                            placeholder="If No, why? If YES, how well have you prepared for your child/children for secondary school"
                            as="textarea" rows={3} 
                            onChange={e=>console.log(e.target.value)}/>
                    </Form.Group>
                    <Form.Group className="control-group mb-4" controlId='srfBeneficiaries'>
                        <Form.Control 
                            placeholder="How many of your children are SFR beneficaries?"
                            as="textarea" rows={3} 
                            onChange={e=>console.log(e.target.value)}/>
                    </Form.Group>
                    <Form.Group as={Row}>
                        <Col><Form.Label>Are all of them still active members?(CONDITIONAL)</Form.Label></Col>
                        <Col>
                            <Form.Select
                                className="mb-3"
                                onChange={e=>console.log(e.target.value)}
                                >
                                <option></option>
                                <option value="no">No</option>
                                <option value="yes">Yes</option>
                            </Form.Select>
                        </Col>
                    </Form.Group>
                    <Form.Group className="control-group mb-4" controlId='srfInactive'>
                        <Form.Control 
                            placeholder="If No, do you know the reason that has made them inactive?"
                            as="textarea" rows={3} 
                            onChange={e=>console.log(e.target.value)}/>
                    </Form.Group>
                    <Form.Group as={Row}>
                        <Col><Form.Label>Has SRF made an impact on your child/children since thet joined the program (CONDITIONAL)</Form.Label></Col>
                        <Col>
                            <Form.Select
                                className="mb-3"
                                onChange={e=>console.log(e.target.value)}
                                >
                                <option></option>
                                <option value="no">No</option>
                                <option value="yes">Yes</option>
                            </Form.Select>
                        </Col>
                    </Form.Group>
                    <Form.Group className="control-group mb-4" controlId='srfImpact'>
                        <Form.Control 
                            placeholder="If Yes, what has the impact been?"
                            as="textarea" rows={3} 
                            onChange={e=>console.log(e.target.value)}/>
                    </Form.Group>
                    <Form.Group className="control-group mb-4" controlId='recommendations'>
                        <Form.Control 
                            placeholder="What recommendation can you give SRF for thier programs"
                            as="textarea" rows={3} 
                            onChange={e=>console.log(e.target.value)}/>
                    </Form.Group>
{/* FORM SUBMIT */}
                    <div className="form-group row pt-2 mb-4" controlId='submitButton'>
                        <div className="col-sm-4">
                            <button type="submit" className="btn btn-success mb-4">Submit</button>
                        </div>
                    </div>
                </Tab>

{/* Case Management */}
                <Tab eventKey="caseManagement" title="Case Management">
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
                        <Col><Form.Label>Client Type</Form.Label></Col>
                        <Col>
                            <Form.Select
                                className="mb-3"
                                onChange={e=>console.log(e.target.value)}
                                >
                                <option></option>
                                <option value="community-champion">Community Champion</option>
                                <option value="coach">Refered by Coach</option>
                                <option value="counselor">Couselor Initiated</option>
                                <option value="peer">Peer Initiated</option>
                                <option value="home-visit">Referred after Home Visit</option>
                            </Form.Select>
                        </Col>
                    </Form.Group>
                    <Form.Group className="control-group mb-4" controlId='issues-addressed'>
                        <Form.Control 
                            placeholder="Case Management Issues Addressed"
                            as="textarea" rows={3} 
                            onChange={e=>console.log(e.target.value)}/>
                    </Form.Group>
                    <Form.Group className="control-group mb-4" controlId='challenges'>
                        <Form.Control 
                            placeholder="Challenges"
                            as="textarea" rows={3} 
                            onChange={e=>console.log(e.target.value)}/>
                    </Form.Group>
                    <Form.Group className="control-group mb-4" controlId='nextSteps'>
                        <Form.Control 
                            placeholder="Next Steps"
                            as="textarea" rows={3} 
                            onChange={e=>console.log(e.target.value)}/>
                    </Form.Group>
                    <Form.Group className="control-group mb-4" controlId='additionalComments'>
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
                </Tab>

            </Tabs>
            <br />
            </FormContainer>
        </Fragment>
    )
}

export default Visits