import React from 'react'
import Styles from './Styles'
import { Form, Field } from 'react-final-form'
import NavSideBar from '../components/NavSideBar'
import YearPicker from "react-year-picker"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"
import Image from '../assets/img/man.png'
import arrayMutators from 'final-form-arrays'
import { FieldArray } from 'react-final-form-arrays'
import numeral from 'numeral'

import { format, isValid, toDate} from 'date-fns'

const RenderDatePicker = ({ name, input, input: { value, onChange } }) => {
    return (
        <DatePicker
            locale="en"
            placeholderText="Date"
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
// const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// const onSubmit = async (values) => {
//     await sleep(300);
//     window.alert(JSON.stringify(values, 0, 2));
// };

const mustBeNumber = value => (isNaN(value) ? 'Must be a number' : undefined)
const minValue = min => value =>
    isNaN(value) || value >= min ? undefined : `Should be greater than ${min}`
const composeValidators = (...validators) => value =>
    validators.reduce((error, validator) => error || validator(value), undefined)

const formatPrice = value =>
    value === undefined
    ? '' // make controlled
    : numeral(value).format('0,0')

const Error = ({ name }) => (
    <Field
        name={name}
        subscribe={{ touched: true, error: true }}
        render={({ meta: { touched, error } }) =>
            touched && error ? <span>{error}</span> : null
        }
    />
);

const onSubmit = async values => {
    await sleep(300)
    window.alert(JSON.stringify(values, 0, 2))
}

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const required = (value) => (value ? undefined : "Required");

function Register() {
    return (
        <div>
            <NavSideBar />
            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <h3 className="h3 text-success">Register</h3>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="container">
                        <Styles>
                        <Form
                            onSubmit={onSubmit}
                            mutators={{
                                ...arrayMutators
                            }}
                            render={({ handleSubmit, 
                                form: {
                                mutators: { push, pop }
                            }, 
                            submitting, pristine, values }) => (
                                <form onSubmit={handleSubmit}>
                                <div className="card shadow-sm mb-4">
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
                                <hr/>
                                <h4 className="section-header text-success">School Details</h4>
                                    <div>
                                        <Field
                                            name="schoolName"
                                            component="input"
                                            type="text"
                                            placeholder="School Name"
                                            validate={required}
                                        />{' '}
                                        <Error name="schoolName" />
                                    </div>
                                    <label>Select one</label>
                                    <div className="control-group mb-3">
                                        <div className="controls span 2">
                                            <div custom-control custom-checkbox custom-control-inline>
                                                <Field
                                                    name="academicLevel"
                                                    component="input"
                                                    type="checkbox"
                                                    value="class"
                                                    className="custom-control-input"
                                                    id="class"
                                                />{' '}
                                                <label className="custom-control-label" htmlFor="class">
                                                    Class
                                                </label>
                                                    <Error name="class" />
                                            </div>
                                            <div custom-control custom-checkbox custom-control-inline>
                                                <Field
                                                    name="academicLevel"
                                                    component="input"
                                                    type="checkbox"
                                                    value="grade"
                                                    className="custom-control-input"
                                                    id="grade"
                                                />{' '}
                                                <label className="custom-control-label" htmlFor="grade">
                                                    Grade
                                                </label>
                                                    <Error name="grade" />
                                            </div>
                                            <div custom-control custom-checkbox custom-control-inline>
                                                <Field
                                                    name="academicLevel"
                                                    component="input"
                                                    type="checkbox"
                                                    value="form"
                                                    className="custom-control-input"
                                                    id="form"
                                                />
                                                <label className="custom-control-label" htmlFor="form">
                                                    Form
                                                </label>
                                                    <Error name="form" />
                                            </div>
                                            <div>
                                                <Field name="class-level" validate={composeValidators(required, mustBeNumber, minValue(1))}>
                                                    {({ input, meta }) => (
                                                    <div>
                                                        <input {...input} type="text" placeholder="Level" />
                                                        {meta.error && meta.touched && <span>{meta.error}</span>}
                                                    </div>
                                                    )}
                                                </Field>
                                                <Error name="class-level" />
                                            </div>
                                        </div>
                                    </div>
                                <hr />
                                    <h4 className="section-header text-success">Household Demography</h4>
                                    <label>Relationship of the care giver to the beneficiary</label>
                                    <div>
                                        
                                        <Field name="relationship" component="select">
                                            <option />
                                            <option value="father">Father</option>
                                            <option value="mother">Mother</option>
                                            <option value="guardian">Guardian</option>
                                        </Field>
                                        <Error name="relationship" />
                                    </div>
                                    <label>Marital status of the caregiver</label>
                                    <div>
                                        <Field name="marital-status" component="select">
                                            <option />
                                            <option value="single">Single</option>
                                            <option value="married">Married</option>
                                            <option value="divorced">Divorced</option>
                                            <option value="separated">Separated</option>
                                            <option value="widowed">Widowed</option>
                                        </Field>
                                        <Error name="marital-status" />
                                    </div>
                                    <label>Deceased relationship to the family</label>
                                    <div>
                                        <Field name="deceased-relationship" component="select">
                                            <option />
                                            <option value="father">Father</option>
                                            <option value="mother">Mother</option>
                                            <option value="guardian">Guardian</option>
                                        </Field>
                                        <Error name="deceased-relationship" />
                                    </div>
                                    <label>Year of Death</label>
                                    <div>
                                        <Field
                                            name="yearOfDeath"
                                            component={YearPicker}
                                            validate={required}
                                        />
                                        <Error name="yearOfDeath" />
                                    </div>
                                    <div>
                                        <Field name="cuase-of-death" component="textarea" placeholder="Main cause of Death" />
                                    </div>
                                    <label>Documentation of Death</label>
                                    <div>
                                        <Field name="marital-status" component="select">
                                            <option />
                                            <option value="yes">Yes</option>
                                            <option value="no">No</option>
                                        </Field>
                                        <Error name="marital-status" />
                                    </div>
                                    <div>
                                        <Field name="explain-no-docs" component="textarea" placeholder="If NO, explain why..." />
                                    </div>
                                    <label>Other Marital Status</label>
                                    <div>
                                    <Field name="other-marital-status" component="select">
                                        <option />
                                        <option value="separation">Separation</option>
                                        <option value="divorce">Divorce</option>
                                    </Field>
                                    <Error name="other-marital-status" />
                                    </div>
                                    <div>
                                        <Field name="other-marital-status-year" component="textarea" placeholder="Years of separation" />
                                    </div>
                                    <div>
                                        <Field name="other-marital-status-cause" component="textarea" placeholder="Cause of separation" />
                                    </div>
                                    <div>
                                        <Field name="household-description" component="textarea" placeholder="Decribe the household and total number of members residing in the household." />
                                    </div>
                                    <hr />
                                    <h4 className="section-header text-success">Household and Commmunity Relations</h4>
                                    <div>
                                        <Field
                                            name="countyOfResidence"
                                            component="input"
                                            type="text"
                                            placeholder="County of Residence"
                                            validate={required}
                                        />
                                        <Error name="countyOfResidence" />
                                    </div>
                                    <div>
                                    <Field
                                        name="areaOfResidence"
                                        component="input"
                                        type="text"
                                        placeholder="Area of Residence"
                                        validate={required}
                                    />
                                    <Error name="areaOfResidence" />
                                    </div>
                                    <div>
                                    <Field
                                        name="numberOfYears"
                                        component="input"
                                        type="int"
                                        placeholder="Number of years living at current residence"
                                        validate={required}
                                    />
                                    <Error name="numberOfYears" />
                                    </div>
                                    <label>Condition</label>
                                    <div>
                                        <Field name="type-of-home" component="select">
                                            <option value="temporary">Temporary</option>
                                            <option value="semi-permanent">Semi-Permanent</option>
                                            <option value="permanent">Permanent</option>
                                        </Field>
                                        <Error name="type-of-home" />
                                    </div>
                                    <label>No. of rooms</label>
                                    <div>
                                        
                                        <Field name="number-of-rooms" component="select">
                                            <option value="single">Single Room</option>
                                            <option value="double">Double</option>
                                            <option value="one-bedroom-plus">One Bedroom and above</option>
                                        </Field>
                                        <Error name="number-of-rooms" />
                                    </div>
                                        <label>Does this family posses the following services or assets? (Check all that apply)</label>
                                        <div className="control-group">
                                            <div className="control span2">
                                            <label>
                                                <Field
                                                name="possessions"
                                                component="input"
                                                type="checkbox"
                                                value="bed"
                                                />{' '}
                                                Bed
                                            </label>
                                            <label>
                                                <Field
                                                name="possessions"
                                                component="input"
                                                type="checkbox"
                                                value="matteress"
                                                />{' '}
                                                Matteress
                                            </label>
                                            <label>
                                                <Field
                                                name="possessions"
                                                component="input"
                                                type="checkbox"
                                                value="beddings"
                                                />{' '}
                                                Beddings
                                            </label>
                                            <label>
                                                <Field
                                                name="possessions"
                                                component="input"
                                                type="checkbox"
                                                value="furniture"
                                                />{' '}
                                                Furniture
                                            </label>
                                            <label>
                                                <Field
                                                name="possessions"
                                                component="input"
                                                type="checkbox"
                                                value="stove"
                                                />{' '}
                                                Stove
                                            </label>
                                            <label>
                                                <Field
                                                name="possessions"
                                                component="input"
                                                type="checkbox"
                                                value="gasCooker"
                                                />{' '}
                                                Gas Cooker
                                            </label>
                                            <label>
                                                <Field
                                                name="possessions"
                                                component="input"
                                                type="checkbox"
                                                value="electricity"
                                                />{' '}
                                                Electricity
                                            </label>
                                            <label>
                                                <Field
                                                name="possessions"
                                                component="input"
                                                type="checkbox"
                                                value="solarlamp"
                                                />{' '}
                                                Solar Lamp
                                            </label>
                                            <label>
                                                <Field
                                                name="possessions"
                                                component="input"
                                                type="checkbox"
                                                value="television"
                                                />{' '}
                                                Television
                                            </label>
                                            <label>
                                                <Field
                                                name="possessions"
                                                component="input"
                                                type="checkbox"
                                                value="radio"
                                                />{' '}
                                                Radio
                                            </label>
                                            <label>
                                                <Field
                                                name="possessions"
                                                component="input"
                                                type="checkbox"
                                                value="fridge"
                                                />{' '}
                                                Fridge
                                            </label>
                                            </div>
                                        </div>
                                        <div>
                                            <Field name="notes" component="textarea" placeholder="Where do the children sleep? Please explain in detail." />
                                        </div>
                                        <label>How do you access water?</label>
                                            <div>
                                                <Field name="water-access" component="select">
                                                    <option value="tapped">Tapped</option>
                                                    <option value="well-dam-borehole">Well/Dam/Borehole</option>
                                                    <option value="rain-water">Rain Water</option>
                                                    <option value="river">River</option>
                                                </Field>
                                                <Error name="water-access" />
                                            </div>
                                        <label>Does the family have access to any of the following?</label>
                                            <div>
                                                <Field name="toilet-access" component="select">
                                                    <option value="daily">In house toilet</option>
                                                    <option value="weekly">Communal Toilet</option>
                                                    <option value="monthly">External Paid Toilet</option>
                                                </Field>
                                                <Error name="toilet-access" />
                                            </div>
                                        <label>What is the condition of the environment around the house?</label>
                                            <div>
                                                <Field name="enviroment" component="select">
                                                    <option value="maintained">Well maintained</option>
                                                    <option value="garbage">Garbage</option>
                                                    <option value="open-sewage">Open sewage & drains present</option>
                                                </Field>
                                                <Error name="enviroment" />
                                            </div>
                                    <hr />
                                    <h4 className="section-header text-success">Family Earners & Financial Expenditure</h4>
                                        <label>How much does the family spend on the following needs?</label>
                                        <div control-group>
                                            <div>                                            
                                                <label>Daily Food</label>
                                                    <div>
                                                        <Field
                                                            name="food-cost"
                                                            component="input"
                                                            type="text"
                                                            format={formatPrice}
                                                            formatOnBlur
                                                            placeholder="Ksh 000"
                                                        />
                                                        <div>
                                                            <Field name="food-frequency" component="select">
                                                                <option value="daily">Daily</option>
                                                                <option value="weekly">Weekly</option>
                                                                <option value="monthly">Monthly</option>
                                                            </Field>
                                                            <Error name="frequency" />
                                                        </div>
                                                    </div>
                                                
                                                <div>
                                                <label>Rent</label>
                                                    <div>
                                                        <Field
                                                            name="rent-cost"
                                                            component="input"
                                                            type="text"
                                                            format={formatPrice}
                                                            formatOnBlur
                                                            placeholder="Ksh 000"
                                                        />
                                                        <div>
                                                            <Field name="rent-frequency" component="select">
                                                                <option value="daily">Daily</option>
                                                                <option value="weekly">Weekly</option>
                                                                <option value="monthly">Monthly</option>
                                                            </Field>
                                                            <Error name="frequency" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                <label>Electricity</label>
                                                    <div>
                                                        <Field
                                                            name="electricity-cost"
                                                            component="input"
                                                            type="text"
                                                            format={formatPrice}
                                                            formatOnBlur
                                                            placeholder="Ksh 000"
                                                        />
                                                        <div>
                                                            <Field name="electricity-frequency" component="select">
                                                                <option value="daily">Daily</option>
                                                                <option value="weekly">Weekly</option>
                                                                <option value="monthly">Monthly</option>
                                                            </Field>
                                                            <Error name="frequency" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                <label>Water</label>
                                                    <div>
                                                        <Field
                                                            name="water-cost"
                                                            component="input"
                                                            type="text"
                                                            format={formatPrice}
                                                            formatOnBlur
                                                            placeholder="Ksh 000"
                                                        />
                                                        <div>
                                                            <Field name="water-frequency" component="select">
                                                                <option value="daily">Daily</option>
                                                                <option value="weekly">Weekly</option>
                                                                <option value="monthly">Monthly</option>
                                                            </Field>
                                                            <Error name="frequency" />
                                                        </div>
                                                    </div>
                                            </div>
                                            <div>
                                                <label>Toilet</label>
                                                    <div>
                                                        <Field
                                                            name="toilet-cost"
                                                            component="input"
                                                            type="text"
                                                            format={formatPrice}
                                                            formatOnBlur
                                                            placeholder="Ksh 000"
                                                        />
                                                        <div>
                                                            <Field name="toilet-frequency" component="select">
                                                                <option value="daily">Daily</option>
                                                                <option value="weekly">Weekly</option>
                                                                <option value="monthly">Monthly</option>
                                                            </Field>
                                                            <Error name="frequency" />
                                                        </div>
                                                    </div>
                                            </div>
                                            <div>
                                                <label>Medical</label>
                                                    <div>
                                                        <Field
                                                            name="medical-cost"
                                                            component="input"
                                                            type="text"
                                                            format={formatPrice}
                                                            formatOnBlur
                                                            placeholder="Ksh 000"
                                                        />
                                                        <div>
                                                            <Field name="medical-frequency" component="select">
                                                                <option value="daily">Daily</option>
                                                                <option value="weekly">Weekly</option>
                                                                <option value="monthly">Monthly</option>
                                                            </Field>
                                                            <Error name="frequency" />
                                                        </div>
                                                    </div>
                                            </div>
                                            </div>
                                        </div>

                                        <br/>
                                        <label>List of contributors responsible of providing for the family needs.</label>
                                        <div className="control-group">
                                            <div className="controls span2">
                                                <FieldArray name="contributor">
                                                {({ fields }) =>
                                                fields.map((name, index) => (
                                                <div key={name}>
                                                    <label>Cont. #{index + 1}</label>
                                                    <br/>
                                                    <Field
                                                    name={`${name}.role`}
                                                    component="input"
                                                    placeholder="Role in Family"
                                                    />
                                                    <br/>
                                                    <Field
                                                    name={`${name}.work`}
                                                    component="input"
                                                    placeholder="Type of Work"
                                                    />
                                                    <br/>
                                                    <Field
                                                    name={`${name}.employment`}
                                                    component="input"
                                                    placeholder="Nature of Employment"
                                                    />
                                                    <br/>
                                                    <Field
                                                    name={`${name}.income`}
                                                    component="input"
                                                    placeholder="Income"
                                                    />
                                                    <span
                                                    onClick={() => fields.remove(index)}
                                                    style={{ cursor: 'pointer' }}
                                                    >
                                                    ❌
                                                    </span>
                                                </div>
                                                ))
                                                }
                                                </FieldArray> 
                                            <div className="buttons">
                                            <button className="buttons mt-3"
                                                type="button"
                                                onClick={() => push('contributor', undefined)}
                                            >
                                                Add Contributor
                                            </button>
                                            <br/>
                                            <button className="buttons mt-3" 
                                                type="button" 
                                                onClick={() => pop('contributor')}>
                                                Remove Contributor
                                            </button>
                                            </div>
                                        <br/>
                                            </div>
                                        </div>
                                    <div>
                                        <Field name="addtional-skills" component="textarea" placeholder="Note any additional skills of the family earners" />
                                    </div>
                                        <br/>
                                        <label>When the family is in need, where do they go for help (Check all that apply)</label>
                                        <div className="control-group">
                                            <div className="controls span2">
                                                <label>
                                                    <Field
                                                    name="possessions"
                                                    component="input"
                                                    type="checkbox"
                                                    value="bed"
                                                    />{' '}
                                                    Family
                                                </label>
                                                <label>
                                                    <Field
                                                    name="possessions"
                                                    component="input"
                                                    type="checkbox"
                                                    value="matteress"
                                                    />{' '}
                                                    Mosque
                                                </label>
                                                <label>
                                                    <Field
                                                    name="possessions"
                                                    component="input"
                                                    type="checkbox"
                                                    value="matteress"
                                                    />{' '}
                                                    Church
                                                </label>
                                                <label>
                                                    <Field
                                                    name="possessions"
                                                    component="input"
                                                    type="checkbox"
                                                    value="beddings"
                                                    />{' '}
                                                    Sacco
                                                </label>
                                                <label>
                                                    <Field
                                                    name="possessions"
                                                    component="input"
                                                    type="checkbox"
                                                    value="furniture"
                                                    />{' '}
                                                    Chama
                                                </label>
                                                <label>
                                                    <Field
                                                    name="possessions"
                                                    component="input"
                                                    type="checkbox"
                                                    value="electricity"
                                                    />{' '}
                                                    Bank
                                                </label>
                                                <label>
                                                    <Field
                                                    name="possessions"
                                                    component="input"
                                                    type="checkbox"
                                                    value="solarlamp"
                                                    />{' '}
                                                    Chief
                                                </label>
                                                <label>
                                                    <Field
                                                    name="possessions"
                                                    component="input"
                                                    type="checkbox"
                                                    value="solarlamp"
                                                    />{' '}
                                                    None
                                                </label>
                                            </div>
                                        </div>
                                    <hr />
                                    <h4 className="section-header text-success">Physical Health</h4>
                                    <label>List the family members with medical conditions including allergies and disabilities</label>
                                    <div className="control-group">
                                        <div className="controls span2">
                                            <FieldArray name="family">
                                            {({ fields }) =>
                                                fields.map((family, index) => (
                                                <div key={family}>
                                                    <label>Fam. #{index + 1}</label>
                                                    <br/>
                                                    <Field
                                                    name={`${family}.name`}
                                                    component="input"
                                                    placeholder="Name"
                                                    />
                                                    <br/>
                                                    <Field
                                                    name={`${family}.relationship`}
                                                    component="input"
                                                    placeholder="Relationship"
                                                    />
                                                    <br/>
                                                    <Field
                                                    name={`${family}.medical`}
                                                    component="input"
                                                    placeholder="Medical Concern"
                                                    />
                                                    <br/>
                                                    <Field
                                                    name={`${family}.treatment`}
                                                    component="input"
                                                    placeholder="Treatment Status"
                                                    />
                                                    <span
                                                    onClick={() => fields.remove(index)}
                                                    style={{ cursor: 'pointer' }}
                                                    >
                                                    ❌
                                                    </span>
                                                </div>
                                                ))
                                            }
                                            </FieldArray>
                                            <div>
                                            <button className="buttons mt-3"
                                                type="button"
                                                onClick={() => push('family', undefined)}
                                            >
                                                Add Family Member
                                            </button>
                                            <br/>
                                            <button className="buttons mt-3"
                                                type="button" onClick={() => pop('family')}>
                                                Remove Family Member
                                            </button>
                                            </div>
                                        </div>
                                    </div>
                                        <br/>
                                            <label>Does the family have a medical cover? (NHIF) If no kindly advice on the importance of it (CONDITIONAL)</label>
                                            <div>
                                            <Field name="medical-cover" component="select">
                                                <option value="no">No</option>
                                                <option value="yes">Yes</option>
                                            </Field>
                                            <Error name="medical-cover" />
                                            </div>
                                            <div>
                                            <Field name="nhif" component="textarea" 
                                            placeholder="NHIF No." 
                                            />
                                            </div>
                                    <hr />
                                    <h4 className="section-header text-success">Child Safety within the Family Setup</h4>
                                        <label>Do you or anyone in your household use alcohol or abuse any drug substance?(CONDITIONAL)</label>
                                        <div>
                                            <Field name="substance-abuse" component="select">
                                                <option value="no">No</option>
                                                <option value="yes">Yes</option>
                                            </Field>
                                            <Error name="substance-abuse" />
                                        </div>
                                        <div>
                                            <Field name="family-member" component="textarea" 
                                            placeholder="If Yes, which member of the family abuses these substances?" 
                                            />
                                        </div>
                                        <div>
                                            <Field name="substance" component="textarea" 
                                            placeholder="Which substance/s do they commonly use?" 
                                            />
                                        </div>
                                        <div>
                                            <Field name="lenght-of-abuse" component="textarea" 
                                            placeholder="For how long they been using the substance/s?" 
                                            />
                                        </div>
                                        <label>As a concerned parent which actions do you take concerning the above behavior/reactions/traits?</label>
                                        <br/>
                                        <br/>
                                        <div className="control-group">
                                            <div className="controls span2">
                                                <label>
                                                    <Field
                                                    name="silence"
                                                    component="input"
                                                    type="checkbox"
                                                    value="silence"
                                                    />{' '}
                                                    I keep silent and assume nothing happens
                                                </label>
                                                <label>
                                                    <Field
                                                    name="react"
                                                    component="input"
                                                    type="checkbox"
                                                    value="react"
                                                    />{' '}
                                                    I react and fight back most of the time (quarrel)
                                                </label>
                                                <label>
                                                    <Field
                                                    name="report-police"
                                                    component="input"
                                                    type="checkbox"
                                                    value="police"
                                                    />{' '}
                                                    I report him/her to the police
                                                </label>
                                                <label>
                                                    <Field
                                                    name="report-church"
                                                    component="input"
                                                    type="checkbox"
                                                    value="church"
                                                    />{' '}
                                                    I report him/her to the church/ village leaders
                                                </label>
                                            </div>
                                        </div>
                                        <br/>
                                        <div>
                                            <Field name="family-relationship" component="textarea" 
                                            placeholder="In general how is the family relationship?" 
                                            />
                                        </div>
                                    <hr />
                                    <h4 className="section-header text-success">Child Safety within the Community</h4>
                                        <div>
                                            <Field name="behaviors" component="textarea" 
                                            placeholder="List some of the behaviors/concerns that you have observed in your 
                                            community that would affect the well-being /welfare of your child/children?" 
                                            />
                                        </div>
                                        <label>What type/form of child abuse is most common within your community?(Check all that apply)</label>
                                        <div className="control-group">
                                            <div className="controls span2">
                                                    <label>
                                                        <Field
                                                        name="physical"
                                                        component="input"
                                                        type="checkbox"
                                                        value="physical"
                                                        />{' '}
                                                        Physical
                                                    </label>
                                                    <label>
                                                        <Field
                                                        name="sexual"
                                                        component="input"
                                                        type="checkbox"
                                                        value="sexual"
                                                        />{' '}
                                                        Sexual
                                                    </label>
                                                    <label>
                                                        <Field
                                                        name="negligence"
                                                        component="input"
                                                        type="checkbox"
                                                        value="negligence"
                                                        />{' '}
                                                        Negligence
                                                    </label>
                                                    <label>
                                                        <Field
                                                        name="emotional"
                                                        component="input"
                                                        type="checkbox"
                                                        value="emotional"
                                                        />{' '}
                                                        Emotional
                                                    </label>
                                                    <label>
                                                        <Field
                                                        name="other"
                                                        component="input"
                                                        type="checkbox"
                                                        value="other"
                                                        />{' '}
                                                        Other
                                                    </label>
                                                    <label>
                                                        <Field
                                                        name="none"
                                                        component="input"
                                                        type="checkbox"
                                                        value="none"
                                                        />{' '}
                                                        None
                                                    </label>
                                            </div>
                                        </div>

                                        <div>
                                            <Field name="abuse-others" component="textarea" 
                                            placeholder="If response to the question is other - please explain" 
                                            />
                                        </div> 
                                        <label>Do you or anyone in your household use alcohol or abuse any drug substance?(CONDITIONAL)</label>
                                        <div>
                                            <Field name="substance-abuse" component="select">
                                                <option value="no">No</option>
                                                <option value="yes">Yes</option>
                                            </Field>
                                            <Error name="substance-abuse" />
                                        </div>
                                        <div>
                                            <Field name="affected-members" component="textarea" 
                                            placeholder="Who in your family was affected?" 
                                            />
                                        </div>
                                        <div>
                                            <Field name="relationship-to-household" component="textarea" 
                                            placeholder="Relationship to the household" 
                                            />
                                        </div>
                                        <div>
                                            <Field name="abuse-history" component="textarea" 
                                            placeholder="Give a history on the case:(Type of abuse/What happpened/Who was involved/Was the concerned person assisted?" 
                                            />
                                        </div>
                                        <div>
                                            <Field name="srf-assistance" component="textarea" 
                                            placeholder="How can SRF assist in this matter?" 
                                            />
                                        </div> 
                                    <hr />
                                    <h4 className="section-header text-success">Beneficiaries who are SRF members</h4>
                                    <div className="control-group">
                                        <div classname="controls span2">
                                            <FieldArray name="beneficiary">
                                            {({ fields }) =>
                                                fields.map(( beneficiary, index) => (
                                                <div key={beneficiary}>
                                                    <label>Bene. #{index + 1}</label>
                                                    <br/>
                                                    <Field
                                                    name={`${beneficiary}.name`}
                                                    component="input"
                                                    placeholder="Name"
                                                    />
                                                    <br/>
                                                    <Field
                                                    name={`${beneficiary}.entry-year`}
                                                    component="input"
                                                    placeholder="Year of Entry"
                                                    />
                                                    <br/>
                                                    <Field
                                                    name={`${beneficiary}.membership`}
                                                    component="input"
                                                    placeholder="Membership Status"
                                                    />
                                                    <span
                                                    onClick={() => fields.remove(index)}
                                                    style={{ cursor: 'pointer' }}
                                                    >
                                                    ❌
                                                    </span>
                                                </div>
                                                ))
                                            }
                                            </FieldArray>
                                                <div className="buttons">
                                                    <button className="buttons mt-3"
                                                        type="button"
                                                        onClick={() => push('beneficiary', undefined)}
                                                    >
                                                        Add Beneficiary
                                                    </button>
                                                    <br/>
                                                    <button className="buttons mt-3"
                                                        type="button" onClick={() => pop('beneficiary')}>
                                                        Remove Beneficiary
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <br/>
                                    <hr />
                                    <h4 className="section-header text-success">Caregiver Consent</h4>
                                    <label>As the concerned caregiver, do you prefer your child/children being involved in SRF programs? *(CONDITIONAL)</label>
                                        <div>
                                            <Field name="consent" component="select">
                                                <option value="no">No</option>
                                                <option value="yes">Yes</option>
                                            </Field>
                                            <Error name="consent" />
                                        </div>
                                        <div>
                                            <Field name="consent-yes" component="textarea" 
                                            placeholder="If Yes, kindly give us your consent to continue working with your child/children" 
                                            />
                                        </div>
                                        <div>
                                            <Field name="consent-no" component="textarea" 
                                            placeholder="If No, kindly give us a reason why." 
                                            />
                                        </div>
                                        <div>
                                            <Field name="caregiver-name" component="input" 
                                            placeholder="Caregiver's Name" 
                                            />
                                        </div>
                                        <div>
                                            <Field
                                                name="visitDate"
                                                component={RenderDatePicker}
                                                validate={required}
                                            />
                                            <Error name="visitDate" />
                                        </div>
                                        <div className="buttons">
                                            <button type="submit" disabled={submitting || pristine}>
                                                Signature
                                            </button>
                                            <button type="submit" disabled={submitting || pristine}>
                                                Archive
                                            </button>
                                        </div>
                                        <br/>
                                        <div>
                                            <Field name="other-organisations" component="textarea" 
                                            placeholder="Which other organisations are your children involved with?" 
                                            />
                                        </div>
                                        <div>
                                            <Field name="comments" component="textarea" 
                                            placeholder="Any other additional comment on SRF program/s" 
                                            />
                                        </div>
                                        <hr />
                                    <h4 className="section-header text-success">Social Worker Summary</h4>
                                    <div>
                                        <Field name="brief-summary" component="textarea" 
                                            placeholder="Brief summary on the fmily including any other additional observations" 
                                        />
                                    </div>
                                    <div>
                                        <Field name="observation" component="textarea" 
                                            placeholder="Observations on the family burden of care including various needs/conditions" 
                                        />
                                    </div>
                                    <div>
                                        <Field name="additional-comments" component="textarea" 
                                            placeholder="Note any other additional skills of the family earners" 
                                        />
                                    </div>
                                    <label>Scale the family and to give the necessary recommendations</label>
                                        <div className="control-group">
                                            <div className="controls span2">
                                                <label>
                                                    <Field
                                                    name="l-vulnerable"
                                                    component="input"
                                                    type="checkbox"
                                                    value="l-vulnerable"
                                                    />{' '}
                                                    Least Vulnerable
                                                </label>
                                                <label>
                                                    <Field
                                                    name="vulnerable"
                                                    component="input"
                                                    type="checkbox"
                                                    value="vulnerable"
                                                    />{' '}
                                                    Vulnerable
                                                </label>
                                                <label>
                                                    <Field
                                                    name="h-vulnerable"
                                                    component="input"
                                                    type="checkbox"
                                                    value="h-vulnerable"
                                                    />{' '}
                                                    Highly Vulnerable
                                                </label>
                                            </div>
                                        </div>
                                    <div>
                                        <Field name="recommendations" component="textarea" 
                                            placeholder="Give necessary recommendations" 
                                        />
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
                </div>
                </div>
            </main>
        </div>
    )
}

export default Register