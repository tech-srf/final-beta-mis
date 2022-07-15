import React, { useState, Fragment } from 'react'
import NavSideBar from '../components/NavSideBar'
import FormContainer  from '../components/FormContainer'
import { Form, Col  } from 'react-bootstrap'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
// import { Typeahead } from 'react-bootstrap-typeahead'


const Lifeskills = () => {

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
                    <h2 className="h2 text-success">Lifeskills</h2>
                </div>
                <Form.Group as={Row} className="control-group mb-4" controlId='visit-date'>
                    <Col sm="2">
                        <Form.Label>Date</Form.Label>
                    </Col>
                    <Col sm="10">
                        <Form.Control
                            type='date'
                            placeholder='Date'
                            onChange={e=>console.log(e.target.value)}
                        >
                        </Form.Control>
                    </Col>        
                </Form.Group>
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
                    <Form.Group className="control-group mb-4" controlId='sessionLeader'>
                        <Form.Control 
                        placeholder="Session Leader" 
                        onChange={e=>console.log(e.target.value)}/>
                    </Form.Group>
                    <Form.Group className="control-group mb-4" controlId='topicsDiscussed'>
                    <Form.Label>Topic Discussed</Form.Label>
                        <Form.Control 
                        as="textarea" rows={3} 
                        onChange={e=>console.log(e.target.value)}/>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3">
                        <Col sm="4">
                            <Form.Control
                                className="mb-3"
                                type="text" 
                                placeholder="First Name" 
                                onChange={e=>console.log(e.target.value)}/>
                        </Col>
                        <Col sm="4">
                            <Form.Control 
                                className="mb-3"
                                type="text" 
                                placeholder="Middle Name" 
                                onChange={e=>console.log(e.target.value)}/>
                        </Col>
                        <Col sm="4">
                            <Form.Control 
                                className="mb-3"
                                type="text" 
                                placeholder="Last Name" 
                                onChange={e=>console.log(e.target.value)}/>
                        </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Col>
                            <Button className="btn btn-success" sm="6">Add Player</Button>
                            </Col>
                            <Col>
                            <Button className="btn btn-success" sm="6">Remove Player</Button>
                            </Col>
                        </Form.Group>
                        <div className="form-group row pt-2" controlId='submitButton'>
                            <div className="col-sm-4">
                                <button type="submit" className="btn btn-success mb-4">Submit</button>
                            </div>
                        </div>
            </FormContainer>
        </Fragment>
    )
}
export default Lifeskills