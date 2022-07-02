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
            placeholderText="Visit Date"
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

function Visits() {
    return (
        <div>
            <NavSideBar />
            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <h3 className="h3">Visits</h3>
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
                        <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Class 8 Visit</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Case Management</button>
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
                                    <label>Respondent</label>
                                    <div>
                                    <Field name="respondent" component="select">
                                        <option value="father">Father</option>
                                        <option value="mother">Mother</option>
                                        <option value="guardian">Guardian</option>
                                    </Field>
                                    <Error name="respondent" />
                                    </div>
                                    <label>Dependants in Class 8</label>
                                    <div>
                                    <Field name="dependants" component="select">
                                        <option value="0">0</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                    </Field>
                                    <Error name="dependants" />
                                    </div>
                                    <label>What is the current academic performance of the class 8 dependents? *</label>
                                    <div>
                                    <Field name="dependants" component="select">
                                        <option value="high">High (above 350)</option>
                                        <option value="average">Average (250 - 300)</option>
                                        <option value="b-average">Below Average (250 & below) </option>
                                    </Field>
                                    <Error name="dependants" />
                                    </div>
                                    <div>
                                        <Field name="score-expectation" component="textarea" 
                                        placeholder="What do you expect your child/children to score in thier final exam and why?" 
                                        />
                                    </div>
                                    <label>Do you expect your chid/children to join High School</label>
                                    <div>
                                    <Field name="high-school" component="select">
                                        <option value="no">No</option>
                                        <option value="yes">Yes</option>
                                    </Field>
                                    <Error name="high-school" />
                                    </div>
                                    <div>
                                        <Field name="high-school-no" component="textarea" 
                                        placeholder="If No, why?" 
                                        />
                                    </div>
                                    <div>
                                        <Field name="high-school-yes" component="textarea" 
                                        placeholder="If YES, how well have you prepared for your child/children for secondary school " 
                                        />
                                    </div>
                                    <div>
                                        <Field name="srf-beneficaries" component="textarea" 
                                        placeholder="How many of your children are SFR beneficaries?" 
                                        />
                                    </div>
                                    <label>Are all of them still active members?(CONDITIONAL)</label>
                                    <div>
                                    <Field name="active-members" component="select">
                                        <option value="no">No</option>
                                        <option value="yes">Yes</option>
                                    </Field>
                                    <Error name="active-members" />
                                    </div>
                                    <div>
                                        <Field name="active-no" component="textarea" 
                                        placeholder="If No, do you know the reason that has made them inactive." 
                                        />
                                    </div>
                                    <label>Has SRF made an impact on your child/children since thet joined the program (CONDITIONAL)</label>
                                    <div>
                                    <Field name="srf-impact" component="select">
                                        <option value="no">No</option>
                                        <option value="yes">Yes</option>
                                    </Field>
                                    <Error name="srf-impact" />
                                    </div>
                                    <div>
                                        <Field name="impact-yes" component="textarea" 
                                        placeholder="If Yes, what has the impact been?" 
                                        />
                                    </div>
                                    <div>
                                        <Field name="recommendations" component="textarea" 
                                        placeholder="What recommendation can you give SRF for thier programs" 
                                        />
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
                                        <option value="community-champion">Community Champion</option>
                                        <option value="coach">Refered by Coach</option>
                                        <option value="counselor">Couselor Initiated</option>
                                        <option value="peer">Peer Initiated</option>
                                        <option value="home-visit">Referred after Home Visit</option>
                                    </Field>
                                    <Error name="client-type" />
                                    </div>
                                    <div>
                                        <Field name="issues-addressed" component="textarea" 
                                        placeholder="Case Management Issues Addressed" 
                                        />
                                    </div>
                                    <div>
                                        <Field name="challenges" component="textarea" 
                                        placeholder="Challenges" 
                                        />
                                    </div>
                                    <div>
                                        <Field name="next-steps" component="textarea" 
                                        placeholder="Next Steps" 
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

export default Visits