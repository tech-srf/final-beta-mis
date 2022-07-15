import React, { Fragment, useState } from 'react'
import { Card, Container } from 'react-bootstrap'
import Logo from "../../assets/img/logo.png"
import { Link } from 'react-router-dom'
// import { setAlert } from '../../actions/alert'
// import { create } from '../../actions/auth'

// import axios from 'axios'

const Create = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    });

const { name, email, password, password2 } = formData;

const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

const onSubmit = async e => {
    e.preventDefault();
    if (password !== password2) {
        console.log('Passwords do not match', 'danger');
    } else {
        console.log('SUCCESS')
        // create({ name, email, password });
        //console.log(formData);

        // const newUser = {
        //     name,
        //     email,
        //     password
        // }
        // try {
        //     const config = {
        //         headers: {
        //             'Content-Type': 'application/json'
        //         }
        //     }

        //     const body = JSON.stringify(newUser);

        //     const res = await axios.post('/api/users', body, config);
        //     console.log(res.data);
        // } catch(err) {
        //     console.error(err.response.data);
        // }
    }
};

    return (
        <Fragment>
        <div className="bg-success mt-0">
            <Container className="containerAuth mb-0">
                <main className="row justify-content-center">
                    <div className="col-lg-5 mt-5">
                        <Card className="formSignin shadow-lg border-0 rounded-lg mt-5 mb-5">
                            <div className="cardHeader text-center mt-5">
                                <img className="img mb-3" src={Logo} alt=""/>
                                <h1 className="h3 mb-3 fw-strong">Create Account</h1>
                            </div>
                            <form className="form cardBody mt-5" onSubmit={e => onSubmit(e)}>
                                <div className="formFloating  mb-3">
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        id="nameFloatingInput" 
                                        name="name"
                                        value={name}
                                        onChange={e => onChange(e)}
                                        placeholder="Name" />
                                </div>
                                <div className="formFloating  mb-3">
                                    <input 
                                        type="email" 
                                        className="form-control" 
                                        id="emailFloatingInput"
                                        name="email"
                                        value={email}
                                        onChange={e => onChange(e)}
                                        placeholder="name@example.com" 
                                        required
                                    />
                                </div>
                                <div className="formFloating mb-3">
                                    <input 
                                        type="password" 
                                        className="form-control" 
                                        id="floatingPassword"
                                        name="password"
                                        value={password}
                                        onChange={e => onChange(e)}
                                        minLength="8"
                                        placeholder="Password" />
                                </div>
                                <div className="formFloating mb-3">
                                    <input 
                                        type="password" 
                                        className="form-control" 
                                        id="floatingPassword2"
                                        name="password2"
                                        value={password2}
                                        onChange={e => onChange(e)}
                                        minLength="8"
                                        placeholder="Confirm Password" />
                                </div>
                                    <input className="w-100 btn btn-lg" type="submit" value="Submit"/>
                                </form>
                                <div className="cardFooter text-center py-3">
                                            <div className="small">
                                                <Link to="/login">Have an account already? <br/> Sign In !</Link>
                                            </div>
                                        </div>
                        </Card>
                    </div>
                    
                </main>
                <footer className="py-2 fixed-bottom bg-light">
                    <div className="container-fluid px-4">
                        <div className="d-flex align-items-center justify-content-between small">
                            <div className="text-muted">Copyright &copy; SRF 2022</div>
                                <div>
                                    <Link to="#">Privacy Policy</Link>
                                    &middot;
                                    <Link to="#">Terms &amp; Conditions</Link>
                                </div>
                        </div>
                    </div>
            </footer>
            </Container>
        </div>
        </Fragment>
    )
}

export default Create;