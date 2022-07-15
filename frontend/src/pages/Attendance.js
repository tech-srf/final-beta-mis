import React, { useState, Fragment } from 'react'
import NavSideBar from '../components/NavSideBar'
import FormContainer  from '../components/FormContainer'
import { Form, Col  } from 'react-bootstrap'
import Row from 'react-bootstrap/Row'
// import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
// import { Typeahead } from 'react-bootstrap-typeahead'
// import schools from '../data/schools'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

const Attendance = () => {
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
                <Form>
            <div className="flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h2 className="h2 text-success">Attendance</h2>
            </div>
{/* CLINIC TAB */}
            <Tabs
                id="controlled-tab-example"
                activeKey={key}
                onSelect={(k) => setKey(k)}
                className="mb-3"
            >
                <Tab eventKey="clinic" title="Clinic">
                    <Form.Group as={Row} className="control-group mb-4" controlId='clinic'>
                    <Col sm="4"><Form.Label>Clinic</Form.Label></Col>
                    <Col sm="8">
                        <Form.Select
                            className="mb-3"
                            value = {form.clinic}
                            onChange={(e)=> setField('clinic', e.target.value)}
                            isInvalid={!!errors.clinic}
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
                                    onChange={e=> setField(e.target.value)}
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
                    <Form.Label>Add player</Form.Label>
                        <Form.Group as={Row} className="mb-3">
                        <Col sm="4">
                            <Form.Control
                                className="mb-3"
                                type="text" 
                                placeholder="First Name" 
                                onChange={e=> setField(e.target.value)}/>
                        </Col>
                        <Col sm="4">
                            <Form.Control 
                                className="mb-3"
                                type="text" 
                                placeholder="Middle Name" 
                                onChange={e=> setField(e.target.value)}/>
                        </Col>
                        <Col sm="4">
                            <Form.Control 
                                className="mb-3"
                                type="text" 
                                placeholder="Last Name" 
                                onChange={e=> setField(e.target.value)}/>
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
                </Tab>
{/* SCHOOL TAB */}
                <Tab eventKey="school" title="School">
                    <Form.Group as={Row} className="control-group mb-4" controlId='clinic'>
                    <Col sm="4"><Form.Label>Clinic</Form.Label></Col>
                    <Col sm="8">
                        <Form.Select
                            className="mb-3"
                            onChange={e=> setField(e.target.value)}
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
                    <Form.Group as={Row} className="control-group mb-4" controlId='school'>
                            <Col sm="4"><Form.Label>School</Form.Label></Col>
                            <Col sm="8">
                                <Form.Select
                                    className="mb-3"
                                    onChange={e=> setField(e.target.value)}
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
                            </Col>
                    </Form.Group>
                    <Form.Label>Add player</Form.Label>
                        <Form.Group as={Row} className="mb-3">
                        <Col sm="4">
                            <Form.Control
                                className="mb-3"
                                type="text" 
                                placeholder="First Name" 
                                onChange={e=> setField(e.target.value)}/>
                        </Col>
                        <Col sm="4">
                            <Form.Control 
                                className="mb-3"
                                type="text" 
                                placeholder="Middle Name" 
                                onChange={e=> setField(e.target.value)}/>
                        </Col>
                        <Col sm="4">
                            <Form.Control 
                                className="mb-3"
                                type="text" 
                                placeholder="Last Name" 
                                onChange={e=> setField(e.target.value)}/>
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
                </Tab>
            </Tabs>
                </Form>
            </FormContainer>
        </Fragment>

    )
}

export default Attendance