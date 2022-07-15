import React, { useState, Fragment } from 'react'
import NavSideBar from '../components/NavSideBar'
import FormContainer  from '../components/FormContainer'
import { Form, Col  } from 'react-bootstrap'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
// import { Typeahead } from 'react-bootstrap-typeahead'
// import schools from '../data/schools'

const Register = () => {
    const [schools, setSchools] = useState([]);
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
                        <h2 className="h2 text-success">Register</h2>
                    </div>
                    <div class="card shadow-sm mb-4">
                        <div class="g-0">
                            <div class="md-8">
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
                    <Form.Group as={Row} className="mb-4">
                            <Col>
                            <Button className="btn btn-success" sm="6">Submit</Button>
                            </Col>
                            <Col>
                            <Button className="btn btn-success" sm="6">View Record</Button>
                            </Col>
                    </Form.Group>
                </FormContainer>
            <FormContainer>

    {/* SCHOOL DETAILS */}
            <div className="flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h4 className="section-header text-success">School Details</h4>
            </div>
                <Form.Group className="control-group mb-4" controlId='schools'>
                    <Form.Label>Select School</Form.Label>
                        <Form.Select 
                            onChange={e=>console.log(e.target.value)}
                        >
                            <option></option>
                            <option>Ayany Primary</option>
                            <option>Dr Kraph Primary</option>
                            <option>Harambee Primary</option>
                            <option>Heidemarie Primary</option>
                            <option>Ngewe Primary</option>
                            <option>Kongo Primary</option>
                            <option>Mathare North Primary</option>
                            <option>Ofafa Primary</option>
                            <option>Oakland Primary</option>
                            <option>Raila Primary</option>
                            <option>St Michaels Primary</option>
                            <option>Tatu Primary</option>
                            <option>Toi Primary</option>
                            <option>Uthiru Primary</option>
                        </Form.Select>
                </Form.Group>
                <Form.Group className="control-group mb-4" controlId='academicLevel'>
                    <Form.Label>Select Academic level</Form.Label>
                        <Form className="mb-3">
                            <Form.Check
                                inline
                                label="Class"
                                value="class"
                                onChange={e=>console.log(e.target.value)}
                            />
                            <br />
                            <Form.Check
                                inline
                                label="Grade"
                                value="grade"
                                onChange={e=>console.log(e.target.value)}
                            />
                            <br />
                            <Form.Check
                                inline
                                label="Form"
                                value="form"
                                onChange={e=>console.log(e.target.value)}
                            />
                        </Form>
                </Form.Group>
                <Form.Group className="control-group mb-4" controlId='classSelection'>
                    <Form.Label>Indicate Class/Form</Form.Label>
                        <Form className="mb-3">
                            <Form.Control 
                            className="mb-3"
                            type="number" 
                            placeholder="Select Number" 
                            onChange={e=>console.log(e.target.value)}
                            />
                        </Form>
                </Form.Group>
                <hr />

    {/* HOUSEHOLD DEMOGRAPHICS */}
            <div className="flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h4 className="section-header text-success">Household Demography</h4>
            </div>
                <Form.Group className="control-group mb-4" controlId='role'>
                    <Form.Label>Relationship of the care giver to the beneficiary</Form.Label>
                            <Form.Select 
                            onChange={e=>console.log(e.target.value)}
                            >   <option></option>
                                <option value="father">Father</option>
                                <option value="mother">Mother</option>
                                <option value="guardian">Guardian</option>
                            </Form.Select>
                </Form.Group>
                <Form.Group className="control-group mb-4" controlId='maritalStatus'>
                    <Form.Label>Marital status of the caregiver</Form.Label>
                        <Form.Select
                            onChange={e=>console.log(e.target.value)}
                        >
                            <option></option>
                            <option value="single">Single</option>
                            <option value="married">Married</option>
                            <option value="divorced">Divorced</option>
                            <option value="separated">Separated</option>
                            <option value="widowed">Widowed</option>
                        </Form.Select>
                </Form.Group>
                {/* <Form.Group className="control-group mb-4" controlId='otherMaritalStatus'>
                        <Form.Select
                            onChange={e=>console.log(e.target.value)}
                        >
                            <option value="separation">Separation</option>
                            <option value="divorce">Divorce</option>
                        </Form.Select>
                        <br />
                        <Form.Control 
                        type="year" 
                        placeholder="Years of Separation" 
                        onChange={e=>console.log(e.target.value)}/>
                        <br />
                        <Form.Control 
                        placeholder="Cause of separation"
                        as="textarea" rows={3} 
                        onChange={e=>console.log(e.target.value)}/>
                </Form.Group> */}
                <Form.Group className="control-group mb-4" controlId='deceasedRelationship'>
                    <Form.Label>Deceased relationship to the family</Form.Label>
                        <Form.Select
                            onChange={e=>console.log(e.target.value)}
                        >
                            <option></option>
                            <option value="father">Father</option>
                            <option value="mother">Mother</option>
                            <option value="guardian">Guardian</option>
                        </Form.Select>
                </Form.Group>
                <Form.Group className="control-group mb-4" controlId='yearOfDeath'>
                    <Form.Control 
                    placeholder="Insert Year of Death" 
                    onChange={e=>console.log(e.target.value)}/>
                </Form.Group>
                <Form.Group className="control-group mb-4" controlId='causeOfDeath'>
                    <Form.Label>Cause Of Death</Form.Label>
                    <Form.Control 
                    as="textarea" rows={3} 
                    onChange={e=>console.log(e.target.value)}/>
                </Form.Group>
                <Form.Group className="control-group mb-4" controlId='documentationOfDeath'>
                    <Form.Label>Documentation of Death</Form.Label>
                        <Form.Select
                            onChange={e=>console.log(e.target.value)}
                        >
                            <option></option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </Form.Select>
                        <br />
                        <Form.Control 
                        placeholder="If NO death documentation - Explain why"
                        as="textarea" rows={3} 
                        onChange={e=>console.log(e.target.value)}/>
                </Form.Group>
                <Form.Group className="control-group mb-4" controlId='householdDescription'>
                    <Form.Label>Decribe the household and total number of members residing in the household.</Form.Label>
                    <Form.Control 
                    as="textarea" rows={3} 
                    onChange={e=>console.log(e.target.value)}/>
                </Form.Group>
                <hr />

    {/* HOUSEHOLD AND COMMUNITY */}
            <div className="flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <h4 className="section-header text-success">Household and Community Relations</h4>
            </div>
                <Form.Group  as={Row} className="control-group" controlId='countyOfResidence'>
                <Form.Label>Family Residence</Form.Label>
                    <Col sm="4">
                        <Form.Control 
                            type="text" 
                            placeholder="Residence" 
                            onChange={e=>console.log(e.target.value)}/>
                            <br />
                    </Col>
                    <Col sm="4">
                        <Form.Control 
                            type="text" 
                            placeholder="Area" 
                            onChange={e=>console.log(e.target.value)}/>
                            <br />
                    </Col>
                    <Col sm="4">
                        <Form.Control 
                            className="mb-3"
                            type="text" 
                            placeholder="Years at residence" 
                            onChange={e=>console.log(e.target.value)}/>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="control-group mb-4" controlId='typeOfHome'>
                    <Form.Label>Condition of home</Form.Label>
                    <Col sm="6">
                        <Form.Select
                            onChange={e=>console.log(e.target.value)}
                        >
                            <option></option>
                            <option value="temporary">Temporary</option>
                            <option value="semi-permanent">Semi-Permanent</option>
                            <option value="permanent">Permanent</option>
                        </Form.Select>
                    </Col>
                    <Col sm="6">
                        <Form.Select
                            onChange={e=>console.log(e.target.value)}
                        >
                            <option></option>
                            <option value="single-room">Single Room</option>
                            <option value="double-room">Double Room</option>
                            <option value="one-bedroom">One Bedroom and above</option>
                        </Form.Select>
                    </Col>
                </Form.Group>
                <Form.Group className="control-group mb-4" controlId='pocessions'>
                    <Form.Label>Does this family posses the following services or assets? (Check all that apply)</Form.Label>
                        <Form className="mb-3">
                            <Form.Check
                                inline
                                label="Bed"
                                value="bed"
                                onChange={e=>console.log(e.target.value)}
                            />
                            <br />
                            <Form.Check
                                inline
                                label="Mattress"
                                value="mattress"
                                onChange={e=>console.log(e.target.value)}
                            />
                            <br />
                            <Form.Check
                                inline
                                label="Beddings"
                                value="beddings"
                                onChange={e=>console.log(e.target.value)}
                            />
                            <br />
                            <Form.Check
                                inline
                                label="Furniture"
                                value="furniture"
                                onChange={e=>console.log(e.target.value)}
                            />
                            <br />
                            <Form.Check
                                inline
                                label="Stove"
                                value="stove"
                                onChange={e=>console.log(e.target.value)}
                            />
                            <br />
                            <Form.Check
                                inline
                                label="Gas Cooker"
                                value="gasCooker"
                                onChange={e=>console.log(e.target.value)}
                            />
                            <br />
                            <Form.Check
                                inline
                                label="Electricity"
                                value="electricity"
                                onChange={e=>console.log(e.target.value)}
                            />
                            <br />
                            <Form.Check
                                inline
                                label="Solar Lamp"
                                value="solarLamp"
                                onChange={e=>console.log(e.target.value)}
                            />
                            <br />
                            <Form.Check
                                inline
                                label="Television"
                                value="television"
                                onChange={e=>console.log(e.target.value)}
                            />
                            <br />
                            <Form.Check
                                inline
                                label="Radio"
                                value="radio"
                                onChange={e=>console.log(e.target.value)}
                            />
                            <br />
                            <Form.Check
                                inline
                                label="Fridge"
                                value="fridge"
                                onChange={e=>console.log(e.target.value)}
                            />
                        </Form>
                </Form.Group>
                <Form.Group className="control-group mb-4" controlId='householdNotes'>
                    <Form.Label>Where do the children sleep?</Form.Label>
                        <Form.Control
                            placeholder="Please explain in detail"
                            as="textarea" 
                            rows={3} 
                            onChange={e=>console.log(e.target.value)}/>
                </Form.Group>
                <Form.Group className="control-group mb-4" controlId='waterAndSanitation'>
                    <Form.Label>How does the family access water?</Form.Label>
                        <Form.Select
                            onChange={e=>console.log(e.target.value)}
                        >
                            <option></option>
                            <option value="tapped">Tapped</option>
                            <option value="well-dam-borehole">Well/Dam/Borehole</option>
                            <option value="rain-water">Rain Water</option>
                            <option value="river">River</option>
                        </Form.Select>
                        <br />
                    <Form.Label>Does the family have access to any of the following?s</Form.Label>
                        <Form.Select
                            onChange={e=>console.log(e.target.value)}
                        >
                            <option></option>
                            <option value="daily">In house toilet</option>
                            <option value="weekly">Communal Toilet</option>
                            <option value="monthly">External Paid Toilet</option>
                        </Form.Select>
                        <br />
                    <Form.Label>What is the condition of the environment around the house?</Form.Label>
                        <Form.Select
                            onChange={e=>console.log(e.target.value)}
                        >
                            <option></option>
                            <option value="maintained">Well maintained</option>
                            <option value="garbage">Garbage</option>
                            <option value="open-sewage">Open sewage & drains present</option>
                        </Form.Select>
                </Form.Group>
            <hr />

    {/* FAMILY EARNERS & FINANCIAL EXPENDITURE */}
        <div className="flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h4 className="section-header text-success">Family Earners & Financial Expenditure</h4>
        </div>
        <Form className="mt-3">
            <Form.Label>How much does the family spend on the following needs?</Form.Label>
            <Form className="control-group mb-4" controlId='expenditure'>
                <Form.Label column sm="2">Food</Form.Label>
                <Form.Group as={Row} className="mb-3">
                    <Col sm="4">
                    <Form.Control 
                            className="mb-3"
                            type="text" 
                            placeholder="Ksh" 
                            onChange={e=>console.log(e.target.value)}/>
                    </Col>
                    <Col sm="4"> 
                    <Form.Select
                            onChange={e=>console.log(e.target.value)}
                        >
                            <option></option>
                            <option value="daily">Daily</option>
                            <option value="weekly">Weekly</option>
                            <option value="monthly">Monthly</option>
                        </Form.Select>
                    </Col>
                </Form.Group>
                <Form.Label column sm="2">Rent</Form.Label>
                <Form.Group as={Row} className="mb-3">
                    <Col sm="4">
                    <Form.Control
                            className="mb-3"
                            type="text" 
                            placeholder="Ksh" 
                            onChange={e=>console.log(e.target.value)}/>
                    </Col>
                    <Col sm="4"> 
                    <Form.Select
                            onChange={e=>console.log(e.target.value)}
                        >
                            <option></option>
                            <option value="daily">Daily</option>
                            <option value="weekly">Weekly</option>
                            <option value="monthly">Monthly</option>
                        </Form.Select>
                    </Col>
                </Form.Group>
                <Form.Label column sm="2">Electricity</Form.Label>
                <Form.Group as={Row} className="mb-3">
                    <Col sm="4">
                    <Form.Control
                            className="mb-3" 
                            type="text" 
                            placeholder="Ksh" 
                            onChange={e=>console.log(e.target.value)}/>
                    </Col>
                    <Col sm="4"> 
                    <Form.Select
                            onChange={e=>console.log(e.target.value)}
                        >
                            <option></option>
                            <option value="daily">Daily</option>
                            <option value="weekly">Weekly</option>
                            <option value="monthly">Monthly</option>
                    </Form.Select>
                    </Col>
                </Form.Group>
                <Form.Label column sm="2">Water</Form.Label>
                <Form.Group as={Row} className="mb-3">
                    <Col sm="4">
                    <Form.Control
                            className="mb-3"
                            type="text" 
                            placeholder="Ksh" 
                            onChange={e=>console.log(e.target.value)}/>
                    </Col>
                    <Col sm="4"> 
                    <Form.Select
                            onChange={e=>console.log(e.target.value)}
                        >
                            <option></option>
                            <option value="daily">Daily</option>
                            <option value="weekly">Weekly</option>
                            <option value="monthly">Monthly</option>
                        </Form.Select>
                    </Col>
                </Form.Group>
                <Form.Label column sm="2">Toilet</Form.Label>
                <Form.Group as={Row} className="mb-3">
                    <Col sm="4">
                    <Form.Control
                            className="mb-3" 
                            type="text" 
                            placeholder="Ksh" 
                            onChange={e=>console.log(e.target.value)}/>
                    </Col>
                    <Col sm="4"> 
                    <Form.Select
                            onChange={e=>console.log(e.target.value)}
                        >
                            <option></option>
                            <option value="daily">Daily</option>
                            <option value="weekly">Weekly</option>
                            <option value="monthly">Monthly</option>
                        </Form.Select>
                    </Col>
                </Form.Group>
                <Form.Label column sm="2">Medical</Form.Label>
                <Form.Group as={Row} className="mb-3">
                    <Col sm="4">
                        <Form.Control
                                className="mb-3"
                                type="text" 
                                placeholder="Ksh" 
                                onChange={e=>console.log(e.target.value)}/>
                    </Col>
                    <Col sm="4"> 
                        <Form.Select
                            onChange={e=>console.log(e.target.value)}
                        >
                            <option></option>
                            <option value="daily">Daily</option>
                            <option value="weekly">Weekly</option>
                            <option value="monthly">Monthly</option>
                        </Form.Select>
                    </Col>
                </Form.Group>
            </Form>
            <Form.Label>List of contributors responsible of providing for the family needs.</Form.Label>       
                <Form.Group as={Row} className="mb-3">
                    <Col sm="6">
                        <Form.Control 
                            className="mb-3"
                            type="text" 
                            placeholder="Role" 
                            onChange={e=>console.log(e.target.value)}/>
                    </Col>
                    <Col sm="6">
                        <Form.Control 
                            type="text" 
                            placeholder="Type of Work" 
                            onChange={e=>console.log(e.target.value)}/>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3">
                    <Col sm="6">
                        <Form.Control
                            className="mb-3"
                            type="text" 
                            placeholder="Nature of Employment" 
                            onChange={e=>console.log(e.target.value)}/>
                    </Col>
                    <Col sm="6">
                        <Form.Control 
                            type="text" 
                            placeholder="Income" 
                            onChange={e=>console.log(e.target.value)}/>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-4">
                    <Col>
                        <Button className="btn btn-success" sm="6">Add Contributor</Button>
                    </Col>
                    <Col>
                        <Button className="btn btn-success" sm="6">Remove Contributor</Button>
                    </Col>
                </Form.Group>
                <Form.Group className="control-group mb-4" controlId='additonalSkills'>
                        <Form.Control
                            placeholder="Note any additional skills of family earners."
                            as="textarea" 
                            rows={3} 
                            onChange={e=>console.log(e.target.value)}/>
                </Form.Group>
                <Form.Group controlId='familyNeeds'>
                            <Form.Label>When the family is in need, where do they go for help (Check all that apply)</Form.Label>
                                <Form className="mb-3">
                                    <Form.Check
                                        inline
                                        label="Family"
                                        value="family"
                                        onChange={e=>console.log(e.target.value)}
                                    />
                                    <br />
                                    <Form.Check
                                        inline
                                        label="Mosque"
                                        value="mosque"
                                        onChange={e=>console.log(e.target.value)}
                                    />
                                    <br />
                                    <Form.Check
                                        inline
                                        label="Church"
                                        value="church"
                                        onChange={e=>console.log(e.target.value)}
                                    />
                                    <br />
                                    <Form.Check
                                        inline
                                        label="Sacco"
                                        value="sacco"
                                        onChange={e=>console.log(e.target.value)}
                                    />
                                    <br />
                                    <Form.Check
                                        inline
                                        label="Chama"
                                        value="chama"
                                        onChange={e=>console.log(e.target.value)}
                                    />
                                    <br />
                                    <Form.Check
                                        inline
                                        label="Bank"
                                        value="bank"
                                        onChange={e=>console.log(e.target.value)}
                                    />
                                    <br />
                                    <Form.Check
                                        inline
                                        label="Chief"
                                        value="chief"
                                        onChange={e=>console.log(e.target.value)}
                                    />
                                    <br />
                                    <Form.Check
                                        inline
                                        label="Grade"
                                        value="grade"
                                        onChange={e=>console.log(e.target.value)}
                                    />
                                    <br />
                                    <Form.Check
                                        inline
                                        label="None"
                                        value="none"
                                        onChange={e=>console.log(e.target.value)}
                                    />
                                </Form>
                </Form.Group>
            </Form>
        <br/>
    {/* PHYSICAL HEALTH */}
        <div className="flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h4 className="section-header text-success">Physical Health</h4>
        </div>
        <Form className="mt-3">
            <Form.Label>List the family members with medical conditions including allergies and disabilities.</Form.Label>
            <Form.Group as={Row} className="mb-3">
                <Col sm="6">
                    <Form.Control 
                        className="mb-3"
                        type="text" 
                        placeholder="Name" 
                        onChange={e=>console.log(e.target.value)}/>
                </Col>
                <Col sm="6">
                    <Form.Control 
                        type="text" 
                        placeholder="Relationship" 
                        onChange={e=>console.log(e.target.value)}/>
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
                <Col sm="6">
                    <Form.Control
                        className="mb-3" 
                        type="text" 
                        placeholder="Medical Concern" 
                        onChange={e=>console.log(e.target.value)}/>
                </Col>
                <Col sm="6">
                    <Form.Control 
                        type="text" 
                        placeholder="Treatment Status" 
                        onChange={e=>console.log(e.target.value)}/>
                </Col>
            </Form.Group>
                <Form.Group as={Row} className="mb-4">
                    <Col>
                        <Button className="btn btn-success" sm="6">Add Family member</Button>
                    </Col>
                    <Col>
                        <Button className="btn btn-success" sm="6">Remove Family member</Button>
                    </Col>
                </Form.Group>
        </Form>
        <Form.Group className="control-group mb-4" controlId='medicalCover'>
        <Form.Label>Does the family have a medical cover? (NHIF) If no kindly advice on the importance of it?</Form.Label>
            <Form.Select
                className="mb-3"
                onChange={e=>console.log(e.target.value)}
            >
                <option></option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
            </Form.Select>
            <Form.Control 
                type="text" 
                placeholder="NHIF No." 
                onChange={e=>console.log(e.target.value)}/>
        </Form.Group>
        <hr />
    {/* CHILD SAFETY WITHIN THE FAMILY SETUP */}
        <div className="flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h4 className="section-header text-success">Child Safety within the Family Setup</h4>
        </div>
        <Form.Group className="control-group mb-4" controlId='medicalCover'>
        <Form.Label>Do you or anyone in your household use alcohol or abuse any drug substance?(CONDITIONAL)</Form.Label>
            <Form.Select
                className="mb-3"
                onChange={e=>console.log(e.target.value)}
            >
                <option></option>
                <option value="no">No</option>
                <option value="yes">Yes</option>
            </Form.Select>
            <Form.Control 
                placeholder="If Yes, which member of the family abuses these substances?" 
                as="textarea" rows={3} 
                onChange={e=>console.log(e.target.value)}/>
            <br />
            <Form.Control 
                placeholder="Which substance/s do they commonly use?" 
                as="textarea" rows={3} 
                onChange={e=>console.log(e.target.value)}/>
            <br />
            <Form.Control 
                placeholder="For how long have they been using the substance/s?" 
                as="textarea" rows={3} 
                onChange={e=>console.log(e.target.value)}/>
            <br />
        <Form.Label>As a concerned parent which actions do you take concerning the above behavior/reactions/traits?</Form.Label>
            <Form>
                <Form.Check
                        inline
                        label="I keep silent and assume nothing happens"
                        value="silent"
                        onChange={e=>console.log(e.target.value)}
                />
                    <Form.Check
                        inline
                        label="I react and fight back most of the time (quarrel)"
                        value="fight-back"
                        onChange={e=>console.log(e.target.value)}
                    />
                    <Form.Check
                        inline
                        label="I report him/her to the police"
                        value="police"
                        onChange={e=>console.log(e.target.value)}
                    />
                    <Form.Check
                        inline
                        label="I report him/her to the church/ village leaders"
                        value="chief"
                        onChange={e=>console.log(e.target.value)}
                    />
            </Form>
            <br />
            <Form.Control 
                placeholder="Brief summary on the family including any other additional observations." 
                as="textarea" rows={3} 
                onChange={e=>console.log(e.target.value)}/>
        </Form.Group>
        <hr />

    {/* CHILD SAFETY WITHIN THE COMMUNITY */}
        <div className="flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h4 className="section-header text-success">Child Safety within the Community</h4>
        </div>
        <Form.Control 
            className="mb-3"
                    placeholder="List some of the behaviors/concerns that you have observed in your 
                    community that would affect the well-being /welfare of your child/children?" 
                    as="textarea" 
                    rows={3} 
            onChange={e=>console.log(e.target.value)}/>
        <Form className="mb-3">
            <Form.Label>What type/form of child abuse is most common within your community?(Check all that apply)</Form.Label>
                <Form.Check
                    inline
                    label="Physical"
                    value="physical"
                    onChange={e=>console.log(e.target.value)}
                />
                <br />
                <Form.Check
                    inline
                    label="Sexual"
                    value="sexual"
                    onChange={e=>console.log(e.target.value)}
                />
                <br />
                <Form.Check
                    inline
                    label="Negligence"
                    value="negligence"
                    onChange={e=>console.log(e.target.value)}
                />
                <br />
                <Form.Check
                    inline
                    label="Emotional"
                    value="emotional"
                    onChange={e=>console.log(e.target.value)}
                />
                <br />
                <Form.Check
                    inline
                    label="Other"
                    value="other"
                    onChange={e=>console.log(e.target.value)}
                />
                <br />
                <Form.Check
                    inline
                    label="None"
                    value="none"
                    onChange={e=>console.log(e.target.value)}
                />
        </Form>
            <Form.Control 
                className="mb-3"
                placeholder="If the response to the question is other - Please add an explanation" 
                as="textarea" rows={3} 
                onChange={e=>console.log(e.target.value)}/>
        <Form.Label>Do you or anyone in your household use alcohol or abuse any drug substance?(CONDITIONAL)</Form.Label>
            <Form.Select
                className="mb-3"
                onChange={e=>console.log(e.target.value)}
            >
                <option></option>
                <option value="no">No</option>
                <option value="yes">Yes</option>
            </Form.Select>
            <Form.Control 
                placeholder="Who in your family is affected" 
                as="textarea" rows={3} 
                onChange={e=>console.log(e.target.value)}/>
            <br />
            <Form.Control 
                placeholder="Relationship to the household" 
                as="textarea" rows={3} 
                onChange={e=>console.log(e.target.value)}/>
            <br />
            <Form.Control 
                placeholder="Give a history on the case. Type of abuse/ What happened / Who was involved / Was the concerned person assisted?" 
                as="textarea" rows={3} 
                onChange={e=>console.log(e.target.value)}/>
            <br />
            <Form.Control 
                placeholder="How can SRF assist in this matter?" 
                as="textarea" rows={3} 
                onChange={e=>console.log(e.target.value)}/>
            <br />
        <hr />
    {/* BENEFICIARIES WHO ARE SRF MEMBERS */}
        <div className="flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h4 className="section-header text-success">Beneficiaries who are SRF members</h4>
        </div>
        <Form className="mt-3">
            <Form.Label>List  any other SRF Beneficiaries</Form.Label>
            <Form.Group as={Row} className="mb-3">
                <Col sm="6">
                    <Form.Control 
                        className="mb-3"
                        type="text" 
                        placeholder="Name" 
                        onChange={e=>console.log(e.target.value)}/>
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
                <Col sm="6">
                    <Form.Control
                        className="mb-3" 
                        type="text" 
                        placeholder="Year of Entry" 
                        onChange={e=>console.log(e.target.value)}/>
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
                <Col sm="6">
                    <Form.Control
                        className="mb-3" 
                        type="text" 
                        placeholder="Membership Status" 
                        onChange={e=>console.log(e.target.value)}/>
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-4" controlId='addBeneficiary'>
                    <Col>
                        <Button className="btn btn-success" sm="6">Add Beneficary</Button>
                    </Col>
                    <Col>
                        <Button className="btn btn-success" sm="6">Remove Beneficary</Button>
                    </Col>
                </Form.Group>
        </Form>
        <hr />
    {/* CAREGIVER CONSENT */}
        <div className="flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h4 className="section-header text-success">Caregiver Consent</h4>
        </div>
        <Form.Label className="mb-3"> As the concerned caregiver, do you prefer your child/children being involved in SRF programs? *(CONDITIONAL)</Form.Label>
        <Form.Group className="control-group mb-4" controlId='additionalObservations'>
            <Form.Select
                className="mb-3"
                onChange={e=>console.log(e.target.value)}
            >
                <option></option>
                <option value="no">No</option>
                <option value="yes">Yes</option>
            </Form.Select>
                <Form.Control
                    placeholder="If Yes, kindly give us your soncent by signing to allow us to continue working with your child/children." 
                    as="textarea" rows={3} 
                    onChange={e=>console.log(e.target.value)}/>
        </Form.Group>
        <Form.Group className="control-group mb-4" controlId='familyBurden'>
                <Form.Control 
                    placeholder="If No, kindly give a reason why."
                    as="textarea" rows={3} 
                    onChange={e=>console.log(e.target.value)}/>
        </Form.Group>
        <Form.Group className="control-group mb-4" controlId='caregiversName'>
            <Form.Control 
                placeholder="Caregiver's Name" 
                onChange={e=>console.log(e.target.value)}/>
        </Form.Group>
        <Form.Group as={Row} className="control-group mb-4" controlId='date'>
            <Col sm="2">
                <Form.Label>Date</Form.Label>
            </Col>
            <Col sm="10">
                <Form.Control
                    type='date'
                    placeholder='Enter date'
                    onChange={e=>console.log(e.target.value)}
                >
            </Form.Control>
            </Col>        
        </Form.Group>
        <div className="button mt-4">
            <button className="btn btn-success mb-4 mx-4" type="submit">
                Signature
            </button>
            <button className="btn btn-success mb-4  mx-4" type="submit">
                Archive
            </button>
        </div>
        <Form.Group className="control-group mb-4" controlId='additonalSkills'>
                <Form.Control
                    placeholder="Which other organisation are you children involved with or supported by?"
                    as="textarea" rows={3} 
                    onChange={e=>console.log(e.target.value)}/>
        </Form.Group>
        <Form.Group className="control-group mb-4" controlId='additonalSkills'>
                <Form.Control
                    placeholder="Any other additional comment on SRF program/s"
                    as="textarea" rows={3} 
                    onChange={e=>console.log(e.target.value)}/>
        </Form.Group>
        <hr />
    {/* SOCIAL WORKER SUMMARY */}
        <div className="flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h4 className="section-header text-success">Social Worker Summary</h4>
        </div>
        <Form.Group className="control-group mb-4" controlId='additionalObservations'>
                <Form.Control
                    placeholder="Brief summary on the family including any other additional observations." 
                    as="textarea" rows={3} 
                    onChange={e=>console.log(e.target.value)}/>
        </Form.Group>
        <Form.Group className="control-group mb-4" controlId='familyBurden'>
                <Form.Control 
                    placeholder="Observations on the family burden of care including various needs/conditions."
                    as="textarea" rows={3} 
                    onChange={e=>console.log(e.target.value)}/>
        </Form.Group>
        <Form.Group className="control-group mb-4" controlId='additonalSkills'>
                <Form.Control
                    placeholder="Note any other additional skills of the family earners"
                    as="textarea" rows={3} 
                    onChange={e=>console.log(e.target.value)}/>
        </Form.Group>
        <Form.Group className="control-group mb-4" controlId='vulnerabilityScale'>
        <Form.Label>Scale the family and to give the necessary recommendations</Form.Label>
            <Form className="mb-3">
                <Form.Check
                    inline
                    label="Least Vulnerable"
                    value="l-vulnerable"
                    onChange={e=>console.log(e.target.value)}
                />
                <Form.Check
                    inline
                    label="Vulnerable"
                    value="vulnerable"
                    onChange={e=>console.log(e.target.value)}
                />
                <Form.Check
                    inline
                    label="Highly Vulnerable"
                    value="h-vulnerable"
                    onChange={e=>console.log(e.target.value)}
                />
            </Form>
        </Form.Group>
        <Form.Group className="control-group mb-4" controlId='recommendations'>
                <Form.Control 
                    placeholder="Give necessary recommendations<"
                    as="textarea" rows={3} 
                    onChange={e=>console.log(e.target.value)}/>
        </Form.Group>

        <hr />
    {/* DOCUMENT UPLOADS */}
        <div className="flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h4 className="section-header text-success">Document uploads</h4>
        </div>
        <div className='card-body'>
            <p className="card-text mt-4">
                SRF has a duty of care for the children and will be responsible to ensure child safety
                and cover medical cost related to rugby injuries.
            </p>
            <strong>
            Required documents for registration. Take a picture of the following items
            </strong>
                <ul>
                    <li>Copy of child birth certificate.</li>
                    <li>Copy of parents/guardian id.</li>
                    <li>Passport size photo.</li>
                    <li>Exam results copy.</li>
                </ul>
            <Form.Group className="mb-3" controlId='fileUpload'>
                <Form.Label>Upload Multiple Files</Form.Label>
                <Form.Control type="file" multiple />
            </Form.Group>
            <div className="form-group row pt-2">
                <div className="col-sm-4">
                    <button type="submit" className="btn btn-success mb-4">Upload</button>
                </div>
            </div>
        </div>
        <hr />
    {/* FORM SUBMIT */}
        <div className="form-group row pt-2" controlId='submitButton'>
                <div className="col-sm-4">
                    <button type="submit" className="btn btn-success mb-4">Submit</button>
                </div>
        </div>
        <br />
            </FormContainer>
        </Fragment>
    )
}

export default Register