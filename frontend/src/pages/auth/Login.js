import React, { useState } from 'react'
import { Card, Container } from 'react-bootstrap'
import Logo from "../../assets/img/logo.png"
import { Link } from 'react-router-dom'


const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

const { email, password } = formData;

const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

const onSubmit = async (e) => {
    e.preventDefault();
    console.log('SUCCESS!')
};

    return (
        <>
            <body className="bg-success mt-0">
                <Container className="containerAuth mb-0">
                    <main className="row justify-content-center">
                        <div className="col-lg-5 mt-5">
                            <Card className="formSignin shadow-lg border-0 rounded-lg mt-5 mb-5">
                                <div className="cardHeader text-center mt-5">
                                    <img className="img mb-3" src={Logo} alt=""/>
                                    <h1 className="h3 mb-3 fw-stong">Login</h1>
                                </div>
                                <form className="form cardBody mt-5" onSubmit={e => onSubmit(e)}>
                                    <div className="formFloating  mb-3">
                                        <input 
                                            type="email" 
                                            className="form-control" 
                                            id="floatingInput"
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
                                    <div className="checkbox mb-3">
                                        <label>
                                            <input 
                                                type="checkbox" value="remember-me" /> Remember me
                                        </label>
                                    </div>
                                        <input className="w-100 btn btn-lg" type="submit" value="Sign in" />
                                    </form>
                                    <div className="cardFooter text-center py-3">
                                                <div className="small">
                                                    <Link to="/create">Need an account? <br/> Sign up!</Link>
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
            </body>
        </>
    )
}

export default Login