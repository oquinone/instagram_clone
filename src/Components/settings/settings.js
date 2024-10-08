import React from "react";
import { Navbar, Image, Form, Spinner } from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";
import "../../styling/settings.scss";
import "../../styling/globals.scss";
import { ReactComponent as Cancel } from "../../svg/cancel.svg";
import { ReactComponent as Save } from "../../svg/save.svg";
import Slug from "../../images/ucscsammy.jpeg";
import { useSettingsHook } from "./settings.hooks";

const Settings = () => {
  const {
    changeProfileImage,
    updateSettings,
    isLoading,
    redirectToProfile,
    profileImage,
    username,
    setUsername,
    bio,
    setBio,
  } = useSettingsHook();

  if (isLoading) {
    return (
      <div className="flex-c spinner">
        <Spinner animation="border" variant="primary" />
      </div>
    );
  }

  if (redirectToProfile) {
    return <Redirect to="/" />;
  }

  return (
    <div className="settings">
      <Navbar className=" flex-sb settings-nav">
        <Link to="/">
          <Cancel fill="white" />
        </Link>
        <h1> Edit Profile</h1>
        <div style={{ curosr: "pointer" }}>
          <Save fill="white" onClick={() => updateSettings()} />
        </div>
      </Navbar>

      <div className="flex-c settings-body">
        <div>
          <label htmlFor="profilePicture-input">
            <h2>Change Profile Photo</h2>
            {profileImage !== "" ? (
              <Image src={profileImage} className="pic" thumbnail />
            ) : (
              <Image src={Slug} className="pic" thumbnail />
            )}
          </label>

          <input
            id="profilePicture-input"
            type="file"
            name="upfile"
            accept="image/*"
            className="profilePicture-input"
            onChange={(e) => {
              changeProfileImage(e);
            }}
          />
        </div>
        {/* <div className="btn-container">
          <hr className="hr" />
          <h4 style={{ fontSize: "15px" }}>Dark Mode</h4>
          <Button className="btn textStyle" variant="light">
            ON / OFF{" "}
          </Button>
        </div> */}
        <Form className="textarea">
          <hr className="hr" />
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label className="textStyle">Username</Form.Label>
            <Form.Control
              as="textarea"
              rows={1}
              maxLength={15}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Form.Group>
          <hr className="hr" />
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label className="textStyle">Bio</Form.Label>
            <Form.Control
              as="textarea"
              rows={2}
              maxLength={80}
              placeholder="Tell us about yourself"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
            />
          </Form.Group>
          <hr className="hr" />
        </Form>
      </div>
    </div>
  );
};

export default Settings;
