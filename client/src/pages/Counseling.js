import React from 'react'
import Styles from './Styles'
import Image from '../assets/img/man.png'
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

function Counseling() {
    return (
        <div>
            <NavSideBar />
            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <h3 className="h3">Counseling</h3>
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
                <div className="container">
                    <Styles>
                        <Form
                            onSubmit={onSubmit}
                            render={({ handleSubmit, form, submitting, pristine, values }) => (
                                <form onSubmit={handleSubmit}>
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
                                <div>
                                    <Field
                                        name="visitDate"
                                        component={RenderDatePicker}
                                        validate={required}
                                    />
                                    <Error name="visitDate" />
                                </div>
                                <hr />
                                    <label>Client type</label>
                                    <div>
                                    <Field name="client-type" component="select">
                                        <option value="walk-in">Walk In</option>
                                        <option value="coach">Refered by Coach</option>
                                        <option value="counselor">Couselor Initiated</option>
                                        <option value="peer">Peer Initiated</option>
                                        <option value="home-visit">Referred after Home Visit</option>
                                    </Field>
                                    <Error name="client-type" />
                                    </div>
                                    <label>Client type</label>
                                    <div>
                                    <Field name="session-category" component="select">
                                        <option value="individual">Individual</option>
                                        <option value="group">Group</option>
                                        <option value="family">Family</option>
                                    </Field>
                                    <Error name="session-category" />
                                    </div>
                                    <label>Session</label>
                                    <div>
                                    <Field name="session-type" component="select">
                                        <option value="new-issue">New Issue</option>
                                        <option value="followup-issue">Follow Up Issue</option>
                                    </Field>
                                    <Error name="session-type" />
                                    </div>
                                    <div>
                                        <Field name="counselling-issues" component="textarea" 
                                        placeholder="Counselling Issues addressed" 
                                        />
                                    </div>
                                    <div>
                                        <Field name="observations" component="textarea" 
                                        placeholder="Observe general appearance of Client, dressing, emotions being projected, e.t.c" 
                                        />
                                    </div>
                                    <div>
                                        <Field name="challenges" component="textarea" 
                                        placeholder="Challenges" 
                                        />
                                    </div>
                                    <div>
                                        <Field name="next-steps" component="textarea" 
                                        placeholder="Next Steps and Treatment plan" 
                                        />
                                    </div>
                                    <div>
                                        <Field name="additional-comments" component="textarea" 
                                        placeholder="Additional comments" 
                                        />
                                    </div>
                                <div className="buttons">
                                    <button type="submit" disabled={submitting || pristine}>
                                    Submit
                                    </button>
                                    <button type="submit" disabled={submitting || pristine}>
                                    View Record
                                    </button>
                                </div>
                                {/* <pre>{JSON.stringify(values, 0, 2)}</pre> */}
                                </form>
                            )}
                            />
                    </Styles>
                    </div>
            </main>
        </div>
    )
}

export default Counseling