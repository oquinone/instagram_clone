import React, { useState } from 'react'
import { Form, Button, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from '../images/logo.png';
import { useSelector } from 'react-redux';

import '../styling/login.scss';
import '../styling/globals.scss';

export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { signUpSuccessfull } = useSelector((state) => state.signUpStore);

    const login = () => {
        const url = "http://localhost:5000/login";
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
              },
            body:JSON.stringify({
                email: email,
                password: password
            })
        }
        fetch(url, options)
        .then(res => res.json())
        .then(data => console.log(data));
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
                    <Button variant="primary" onClick={() => login()}>Login</Button>
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