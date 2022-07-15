import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Card, Container } from 'react-bootstrap'
import Logo from "../../assets/img/logo.png"
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { register, reset } from '../../features/auth/authSlice'
import Spinner from '../../components/Spinner'
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

const navigate = useNavigate()
const dispatch = useDispatch()

const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
)

useEffect(() => {
    if (isError) {
        toast.error(message)
    }

    if (isSuccess || user) {
        navigate('/')
    }

    dispatch(reset())
}, [user, isError, isSuccess, message, navigate, dispatch])

const onChange = (e) => {
    setFormData((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
    }))
}

const onSubmit = (e) => {
    e.preventDefault()

    if (password !== password2) {
        toast.error('Passwords do not match')
    } else {
        const userData = {
            name,
            email,
            password,
        }

        dispatch(register(userData))
    }
}

    if (isLoading) {
        return <Spinner />
};

    return (
        <>
            <div className="bg-success mt-0">
                <Container className="containerAuth mb-0">
                    <main className="row justify-content-center">
                        <div className="col-lg-5 mt-5">
                            <Card className="formSignin shadow-lg border-0 rounded-lg mt-5 mb-5">
                                <div className="cardHeader text-center mt-5">
                                    <img className="img mb-3" src={Logo} alt=""/>
                                    <h1 className="h3 mb-3 fw-strong">Create Account</h1>
                                </div>
                                <form className="form cardBody mt-5" onSubmit={onSubmit}>
                                    <div className="formFloating  mb-3">
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            id="nameFloatingInput" 
                                            name="name"
                                            value={name}
                                            onChange={onChange}
                                            placeholder="Name" />
                                    </div>
                                    <div className="formFloating  mb-3">
                                        <input 
                                            type="email" 
                                            className="form-control" 
                                            id="emailFloatingInput"
                                            name="email"
                                            value={email}
                                            onChange={onChange}
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
                                            onChange={onChange}
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
                                            onChange={onChange}
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
        </>
    )
}

export default Create;