import React, { useState } from "react";
import { Form, Button, Alert, Spinner } from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";
import { loginAPI, getLoginDataAPI } from "../apis/login";
import { useSignUpStore } from "../zucstand/store";
import Cookies from "js-cookie";
import "../styling/login.scss";
import "../styling/globals.scss";
import Logo from "../images/logo.png";

export const Login = () => {
  const [email, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [invalid, setInvalid] = useState(false);

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { userSignUp } = useSignUpStore();

  const submit = async () => {
    const res = await loginAPI({ email, password });
    const { token = "" } = res || {};
    if (!token) {
      setInvalid(true);
      setTimeout(resetInvalid, 3000);
      return;
    }
    Cookies.set("token", token, { expires: 7, secure: true });
    const data = await getLoginDataAPI({ email, token });

    if (data) {
      const storage = {
        id: data.id,
        email: data.email,
      };
      localStorage.setItem("data", JSON.stringify(storage));
      setIsLoading(true);
      setIsLoggedIn(true);
      setInvalid(false);
    }
  };

  const resetInvalid = () => setInvalid(false);

  if (isLoggedIn) {
    return <Redirect to="/profile" />;
  }

  if (isLoading) {
    return (
      <div className="flex-c spinner">
        <Spinner animation="border" variant="primary" />
      </div>
    );
  }

  return (
    <div className="login-container">
      <section className="flex-c login">
        <div className="login-header">
          <img src={Logo} alt={Logo} />
          {userSignUp ? (
            <Alert variant="success"> Use Credentials to Login</Alert>
          ) : null}
          {invalid ? (
            <Alert variant="success">Invalid Login Credentials</Alert>
          ) : null}
        </div>
        <div className="login-form">
          <Form>
            <Form.Group controlId="formGroupEmail">
              <Form.Control
                type="email"
                placeholder="Email"
                onChange={(e) => setUsername(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formGroupPassword">
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
          </Form>
        </div>
        <div className="login-btn">
          <Button variant="primary" onClick={() => submit()}>
            Login
          </Button>
        </div>
        <div className="login-signup">
          <span>
            <p>
              Don't Have An Account?{" "}
              <Link to="/signup">
                <em> Sign up</em>
              </Link>
            </p>
          </span>
        </div>
      </section>
    </div>
  );
};
