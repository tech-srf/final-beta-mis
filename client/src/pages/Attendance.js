import React from 'react'
import Styles from './Styles'
import NavSideBar from '../components/NavSideBar'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Form, Field } from 'react-final-form'

import { format, isValid, toDate} from 'date-fns'

const RenderDatePicker = ({ name, input, input: { value, onChange } }) => {
    return (
        <DatePicker
            locale="en"
            placeholderText="Session Date"
            dateFormat="P"
            selected={value && isValid(value) ? toDate(value) : null} // needs to be checked if it is valid date
            disabledKeyboardNavigation
            name={name}
            onChange={(date) => {
            // On Change, you should use final-form Field Input prop to change the value
            if (isValid(date)) {
                input.onChange(format(new Date(date), "dd-MM-yyyy"));
            } else {
                input.onChange(null);
            }
            }}
        />
    );
};

const Error = ({ name }) => (
    <Field
        name={name}
        subscribe={{ touched: true, error: true }}
        render={({ meta: { touched, error } }) =>
            touched && error ? <span>{error}</span> : null
        }
    />
);

const required = (value) => (value ? undefined : "Required");

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const onSubmit = async values => {
    await sleep(300)
    window.alert(JSON.stringify(values, 0, 2))
}

function Attendance() {
    return (
        <div>
        <NavSideBar />
        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h3 className="h3">Attendance</h3>
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
            <div>
                <ul class="nav nav-tabs" id="myTab" role="tablist">
                    <li class="nav-item" role="presentation">
                        <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Clinic Session</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">School Session</button>
                    </li>
                </ul>

                <div class="tab-content" id="myTabContent">
                    <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                    <div>
                        <div className="container">
                        <Styles>
                        <Form
                            onSubmit={onSubmit}
                            render={({ handleSubmit, form, submitting, pristine, values }) => (
                                <form onSubmit={handleSubmit}>
                                <div>
                                    <Field
                                        name="sessionDate"
                                        component={RenderDatePicker}
                                        validate={required}
                                    />
                                    <Error name="sessionDate" />
                                </div>
                                <hr />
                                    <label>Clinic</label>
                                    <div>
                                    <Field name="clinic" component="select">
                                        <option value="eastlands">Eastlands</option>
                                        <option value="kangemi">Kangemi</option>
                                        <option value="kibera">Kibera</option>
                                        <option value="korogocho">Korogocho</option>
                                        <option value="mathare">Mathare</option>
                                        <option value="ngewe">Ngewe</option>
                                        <option value="tatucity">Tatu City</option>
                                    </Field>
                                    <Error name="clinic" />
                                    </div>
                                    <label>Team</label>
                                    <div>
                                    <Field name="team" component="select">
                                        <option value="Under10s">Under 10s</option>
                                        <option value="Under12s">Under 12s</option>
                                        <option value="under16s">Under 16s</option>
                                        <option value="junior">Junior</option>
                                        <option value="senior">Senior</option>
                                    </Field>
                                    <Error name="team" />
                                    </div>
                                <div className="buttons">
                                    <button type="submit" disabled={submitting || pristine}>
                                    Submit
                                    </button>
                                </div>
                                {/* <pre>{JSON.stringify(values, 0, 2)}</pre> */}
                                </form>
                            )}
                            />
                        </Styles>
                </div>    
                    </div>
                    </div>
                    <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                    <div>
                    <div className="container">
                    <Styles>
                        <Form
                            onSubmit={onSubmit}
                            render={({ handleSubmit, form, submitting, pristine, values }) => (
                                <form onSubmit={handleSubmit}>
                                <div>
                                    <Field
                                        name="sessionDate"
                                        component={RenderDatePicker}
                                        validate={required}
                                    />
                                    <Error name="sessionDate" />
                                </div>
                                <hr />
                                    <label>Clinic</label>
                                    <div>
                                    <Field name="clinic" component="select">
                                        <option value="eastlands">Eastlands</option>
                                        <option value="kangemi">Kangemi</option>
                                        <option value="kibera">Kibera</option>
                                        <option value="korogocho">Korogocho</option>
                                        <option value="mathare">Mathare</option>
                                        <option value="ngewe">Ngewe</option>
                                        <option value="tatucity">Tatu City</option>
                                    </Field>
                                    <Error name="clinic" />
                                    </div>
                                    <label>School</label>
                                    <div>
                                    <Field name="school" component="select">
                                        <option value="ayany">Ayany Primary</option>
                                        <option value="kraph">Dr Kraph Primary</option>
                                        <option value="harambee">Harambee Primary</option>
                                        <option value="heidemarie">Heidemarie Primary</option>
                                        <option value="ngewe">Ngewe Primary</option>
                                        <option value="kongo">Kongo Primary</option>
                                        <option value="mathare">Mathare North Primary</option>
                                        <option value="ofafa">Ofafa Primary</option>
                                        <option value="oakland">Oakland Primary</option>
                                        <option value="raila">Raila Primary</option>
                                        <option value="stmichaels"> St Michaels Primary</option>
                                        <option value="tatu">Tatu Primary</option>
                                        <option value="toi">Toi Primary</option>
                                        <option value="uthiru">Uthiru Primary</option>
                                        
                                    </Field>
                                    <Error name="school" />
                                    </div>
                                <div className="buttons">
                                    <button type="submit" disabled={submitting || pristine}>
                                    Submit
                                    </button>
                                </div>
                                {/* <pre>{JSON.stringify(values, 0, 2)}</pre> */}
                                </form>
                            )}
                            />
                    </Styles>
                </div>
                    </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
    )
}

export default Attendance