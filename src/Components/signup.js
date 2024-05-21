import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { Form, Button, Alert } from "react-bootstrap";
import "../styling/login.scss";
import "../styling/globals.scss";
import Logo from "../images/logo.png";
import { signUpUserAPI } from "../apis/signup";
import { addNewUser } from "../apis/profile";
import { useSignUpStore } from "../zucstand/store";

export const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alreadyExists, setUpAlreadyExists] = useState(false);
  // const [password2, setPassword2] = useState("");
  const [signUp, setSignUp] = useState(false);
  const { setUserSignUp } = useSignUpStore();

  const submit = async () => {
    if (!email && !password) {
      alert("Must enter email and password");
      return;
    }
    const data = await signUpUserAPI({ email, password });
    if (!data) {
      setUpAlreadyExists(true);
      setTimeout(resetAlreadyExists, 5000);
    } else {
      const { token = "" } = data;
      const res = await addNewUser(
        {
          email,
          username,
          bio: "Welcome to my new Profile",
          profileImage: "",
        },
        token
      );

      if (res) {
        setUserSignUp(true);
        setSignUp(true);
      }
    }
  };

  const resetAlreadyExists = () => {
    setUpAlreadyExists(false);
  };

  if (signUp) {
    return <Redirect to="/" />;
  }
  return (
    <div className="login-container">
      <section className="flex-c login">
        <div className="login-header">
          <img src={Logo} alt={Logo} />
        </div>
        <div className="login-form">
          {alreadyExists ? (
            <Alert variant="danger">Email Already Exists</Alert>
          ) : null}
          <Form>
            <Form.Group controlId="usernameSignUp">
              <Form.Control
                type="text"
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="emailSignUp">
              <Form.Control
                type="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="passwordSignUp">
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            {/* <Form.Group controlId="password2Signup">
              <Form.Control
                type="password"
                placeholder="Enter Password Again"
                onChange={(e) => setPassword2(e.target.value)}
              />
            </Form.Group> */}
          </Form>
        </div>
        <div className="login-btn">
          <Button variant="success" onClick={() => submit()}>
            Sign Up
          </Button>
        </div>
        <div className="login-signup">
          <span>
            <p>
              Already Have An Account?{" "}
              <Link to="/">
                <em>Login</em>
              </Link>{" "}
            </p>
          </span>
        </div>
      </section>
    </div>
  );
};
