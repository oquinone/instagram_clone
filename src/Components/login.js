import React, { useState } from 'react'
import { Form, Button, Alert, Spinner } from 'react-bootstrap';
import { Link, Redirect } from 'react-router-dom';
import Logo from '../images/logo.png';

import { loginReq } from '../fetch/login';
import '../styling/login.scss';
import '../styling/globals.scss';

import { useDispatch, useSelector } from 'react-redux';
import { setUsername } from '../redux/signup';

export const Login = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const { signUpSuccessfull } = useSelector((state) => state.signUpStore);

    const submit = async () => {
        const loginData = await loginReq(email, password);

        if(loginData['success']){
            setIsLoading(true);
            dispatch(setUsername(loginData['username']));
            setIsLoggedIn(true);
        }
    }

    if(isLoggedIn){
        return(
            <Redirect to="/profile" />
        );
    }

    if(isLoading){
        return <div className="flex-c spinner">
                <Spinner animation="border" variant="primary"/>
            </div>
    }

    return (
        <div className="login-container">
            <section className="flex-c login">
                <div className="login-header">
                    <img src={Logo} alt={Logo} />
                    {signUpSuccessfull ? <Alert variant="success"> Use Credentials to Login</Alert> : null}
                </div>
                <div className="login-form">
                    <Form>
                        <Form.Group controlId="formGroupEmail">
                            <Form.Control type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
                        </Form.Group>
                        <Form.Group controlId="formGroupPassword">
                            <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
                        </Form.Group>
                    </Form> 
                </div>
                <div className="login-btn">
                    <Button variant="primary" onClick={() => submit()}>Login</Button>
                </div>
                <div className="login-signup">
                    <span>
                        <p>Don't Have An Account?  <Link to="/signup"><em> Sign up</em></Link></p>
                    </span>
                </div>
            </section>
        </div>
    );
}