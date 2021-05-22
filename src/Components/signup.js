import React from 'react';
import { Form, Button } from 'react-bootstrap';

import '../styling/login.scss';
import '../styling/globals.scss';
import Logo from '../images/logo.png';

export const Signup = ({ login }) => {
    return (
        <div className="login-container">
            <section className="flex-c login">
                <div className="login-header">
                    <img src={Logo} alt={Logo} />
                </div>
                <div className="login-form">
                    <Form>
                        <Form.Group controlId="formGroupName">
                            <Form.Control type="test" placeholder="Username" />
                        </Form.Group>
                        <Form.Group controlId="formGroupEmail">
                            <Form.Control type="email" placeholder="Email" />
                        </Form.Group>
                        <Form.Group controlId="formGroupPassword">
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group controlId="formGroupPassword">
                            <Form.Control type="password" placeholder="Enter Password" />
                        </Form.Group>
                    </Form> 
                </div>
                <div className="login-btn">
                    <Button variant="success">Sign Up</Button>
                </div>
                <div className="login-signup">
                    <span>
                        <p>Already Have An Account? </p>
                        <h1 onClick={login}> Login</h1>
                    </span>
                </div>
            </section>
        </div>
    );
}