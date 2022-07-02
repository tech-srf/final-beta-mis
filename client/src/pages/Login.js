import React from 'react'
import { Card, Container } from 'react-bootstrap'
import Logo from "../assets/img/logo.png"


function Login() {
    return (
        <>
            <body className="bg-success mt-0">
                <Container className="containerAuth mb-0">
                    <main className="row justify-content-center">
                        <div className="col-lg-5 mt-5">
                            <Card className="formSignin shadow-lg border-0 rounded-lg mt-5 mb-5">
                                <div className="cardHeader text-center mt-5">
                                    <img className="img mb-3" src={Logo} alt=""/>
                                    <h1 className="h3 mb-3 fw-normal text-center">Login</h1>
                                </div>
                                <form className="cardBody mt-5">
                                    <div className="formFloating  mb-3">
                                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                                    </div>
                                    <div className="formFloating mb-3">
                                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                                    </div>

                                    <div className="checkbox mb-3">
                                        <label>
                                            <input type="checkbox" value="remember-me" /> Remember me
                                        </label>
                                    </div>
                                    <form action="/signup" method="get">
                                        <button className="w-100 btn btn-lg" type="submit">Sign in</button>
                                    </form>
                                    <div class="cardFooter text-center py-3">
                                                <div class="small"><a href="/login">Need an account? Sign up!</a></div>
                                            </div>
                                    <p className="mt-1 mb-3 text-center text-muted">&copy; 2022 </p>
                                </form>
                            </Card>
                        </div>
                        
                    </main>
                    <footer className="py-2 fixed-bottom bg-light">
                        <div className="container-fluid px-4">
                            <div className="d-flex align-items-center justify-content-between small">
                                <div className="text-muted">Copyright &copy; SRF 2022</div>
                                    <div>
                                        <a href="#">Privacy Policy</a>
                                        &middot;
                                        <a href="#">Terms &amp; Conditions</a>
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