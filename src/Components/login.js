import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap';
import Logo from '../images/logo.png';
import { Signup } from './signup';

import '../styling/login.scss';
import '../styling/globals.scss';

export const Login = () => {
    const [isLogin, setIsLogin] = useState(true);

    const hasAccount = () => {
        setIsLogin(true);
    }

    if(!isLogin) return <Signup  login={hasAccount}/> 

    return (
        <div className="login-container">
            <section className="flex-c login">
                <div className="login-header">
                    <img src={Logo} alt={Logo} />
                </div>
                <div className="login-form">
                    <Form>
                        <Form.Group controlId="formGroupEmail">
                            <Form.Control type="email" placeholder="Email" />
                        </Form.Group>
                        <Form.Group controlId="formGroupPassword">
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                    </Form> 
                </div>
                <div className="login-btn">
                    <Button variant="primary">Login</Button>
                </div>
                <div className="login-signup">
                    <span>
                        <p>Don't Have An Accountm  <em onClick = {() => setIsLogin(false)}> Sign up</em></p>
                        {/* // <Button onClick = {() => setIsLogin(false)}> Sign up</Button> */}
                    </span>
                </div>
            </section>
        </div>
    );
}