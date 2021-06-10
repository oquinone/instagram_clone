import React, { useState } from 'react'
import { Form, Button, Alert } from 'react-bootstrap';
import { Link, Redirect } from 'react-router-dom';
import Logo from '../images/logo.png';

import { useSelector, useDispatch } from 'react-redux';
import { loginReq } from '../fetch/login';
import { setInfo, setUsername } from '../redux/signup';
import '../styling/login.scss';
import '../styling/globals.scss';

export const Login = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const { signUpSuccessfull } = useSelector((state) => state.signUpStore);

    const submit = () => {
        const data = loginReq(email, password);
        if(data['success']){
            dispatch(setInfo(data['_info']));
            dispatch(setUsername(data['username']));
            setIsLoggedIn(true);
        }
    }

    if(isLoggedIn){
        return(
            <Redirect to="/profile" />
        );
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