import React from 'react'
// import { render } from 'react-dom'
import Styles from './Styles'
import { Form, Field } from 'react-final-form'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import NavSideBar from '../components/NavSideBar'

import { format, isValid, toDate} from 'date-fns'

// const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// const onSubmit = async (values) => {
//     await sleep(300);
//     window.alert(JSON.stringify(values, 0, 2));
// };

const Error = ({ name }) => (
    <Field
        name={name}
        subscribe={{ touched: true, error: true }}
        render={({ meta: { touched, error } }) =>
            touched && error ? <span>{error}</span> : null
        }
    />
);

const RenderDatePicker = ({ name, input, input: { value, onChange } }) => {
    return (
        <DatePicker
            locale="en"
            placeholderText="Date of Birth"
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

const required = (value) => (value ? undefined : "Required");

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const onSubmit = async values => {
    await sleep(300)
    window.alert(JSON.stringify(values, 0, 2))
}

function Signup() {
    return (
        <div>
            <NavSideBar />
            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <h3 className="h3 text-success">Sign Up</h3>
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
                                <h4 className="section-header text-success">Player Bio</h4>
                                    <div>
                                    <Field
                                        name="firstName"
                                        component="input"
                                        type="text"
                                        placeholder="First Name"
                                        validate={required}
                                    />
                                    <Error name="firstName" />
                                    </div>
                                    <div>
                                    <Field
                                        name="middleName"
                                        component="input"
                                        type="text"
                                        placeholder="Middle Name"
                                        validate={required}
                                    />
                                    <Error name="lastName" />
                                    </div>
                                    <div>
                                    <Field
                                        name="lastName"
                                        component="input"
                                        type="text"
                                        placeholder="Last Name"
                                        validate={required}
                                    />
                                    <Error name="lastName" />
                                    </div>
                                    <div>
                                    <Field
                                        name="dateOfBirth"
                                        component={RenderDatePicker}
                                        validate={required}
                                    />
                                    <Error name="dateOfBirth" />
                                    </div>
                                    <label>Gender</label>
                                    <div>
                                    <Field name="gender" component="select">
                                        <option />
                                        <option value="female">Female</option>
                                        <option value="male">Male</option>
                                    </Field>
                                    <Error name="gender" />
                                    </div>
                                    <hr />
                                    <h4 className="section-header text-success">Caregiver Details</h4>
                                    <div>
                                    <Field
                                        name="caregiverNames"
                                        component="input"
                                        type="text"
                                        placeholder="Caregiver Names"
                                        validate={required}
                                    />
                                    <Error name="caregiverNames" />
                                    </div>
                                    <div>
                                    <Field
                                        name="phoneNumber"
                                        component="input"
                                        type="int"
                                        placeholder="Phone Number"
                                        validate={required}
                                    />
                                    <Error name="lastName" />
                                    </div>
                                    <label>Relationship</label>
                                    <div>
                                    <Field name="relationship" component="select">
                                        <option />
                                        <option value="father">Father</option>
                                        <option value="mother">Mother</option>
                                        <option value="guardian">Guardian</option>
                                    </Field>
                                    <Error name="relationship" />
                                    </div>
                                    <hr />
                                    <h4 className="section-header text-success">SRF Details</h4>
                                    <label>Clinic</label>
                                    <div>
                                    <Field name="clinic" component="select">
                                        <option />
                                        <option value="father">Father</option>
                                        <option value="mother">Mother</option>
                                        <option value="guardian">Guardian</option>
                                        <option value="guardian">Guardian</option>
                                        <option value="father">Father</option>
                                        <option value="mother">Mother</option>
                                        <option value="guardian">Guardian</option>
                                    </Field>
                                    <Error name="clinic" />
                                    </div>
                                    <label>Team</label>
                                    <div>
                                    <Field name="team" component="select">
                                        <option />
                                        <option value="father">Father</option>
                                        <option value="mother">Mother</option>
                                        <option value="guardian">Guardian</option>
                                        <option value="mother">Mother</option>
                                        <option value="guardian">Guardian</option>
                                    </Field>
                                    <Error name="team" />
                                    </div>
                                    <div className="buttons">
                                        <button type="submit" disabled={submitting || pristine}>
                                        Submit
                                        </button>
                                    </div>
                                    <pre>{JSON.stringify(values, 0, 2)}</pre>
                                </form>
                            )}
                            />
                    </Styles>
                </div>    
            </main>
        </div>
    )
}

export default Signup