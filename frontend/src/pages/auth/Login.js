import React, { useState, useEffect } from 'react'
import { Card, Container } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { login, reset } from '../../features/auth/authSlice'
import Spinner from '../../components/Spinner'
import Logo from "../../assets/img/logo.png"
import { Link } from 'react-router-dom'


const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

const { email, password } = formData;

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

        const userData = {
        email,
        password,
        }

        dispatch(login(userData))
    }

    if (isLoading) {
        return <Spinner />
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
                                <form className="form cardBody mt-5" onSubmit={onSubmit}>
                                    <div className="formFloating  mb-3">
                                        <input 
                                            type="email" 
                                            className="form-control" 
                                            id="floatingInput"
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