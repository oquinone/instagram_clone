import React, { useState, useEffect } from "react";
import { Navbar, Image, Form, Spinner } from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";
import { updateAllSettingsAPI } from "../apis/settings";
import { getLoginDataAPI } from "../apis/login";
import { change } from "../helper/settings";
import { useInfoStore } from "../zucstand/store";
import Cookies from "js-cookie";
import "../styling/settings.scss";
import "../styling/globals.scss";
import { ReactComponent as Cancel } from "../svg/cancel.svg";
import { ReactComponent as Save } from "../svg/save.svg";
import Slug from "../images/ucscsammy.jpeg";

export const Settings = () => {
  const storeProfileImage = useInfoStore((state) => state.profileImage);
  const storeUsername = useInfoStore((state) => state.username);
  const { id, setId } = useInfoStore();

  const [profileImage, setProfileImage] = useState(storeProfileImage || "");
  const [username, setUsername] = useState(storeUsername);
  const [bio, setBio] = useState(useInfoStore((state) => state.bio));
  const [getId, setCurrentId] = useState(id);
  const [done, setDone] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isToken, setIsToken] = useState(true);

  // select image to upload
  const changeProfileImage = async (e) => {
    const newImage = await change(e.target.files[0]);
    if (newImage) {
      setProfileImage(newImage);
    }
  };

  const updateSettings = async () => {
    if (!username || !getId) return;
    const token = Cookies.get("token");
    await updateAllSettingsAPI({ username, bio, id, profileImage }, token);
    setDone(true);
  };

  // eslint-disable-next-line
  useEffect(async () => {
    async function fetchData() {
      const token = Cookies.get("token");
      const storage = localStorage.getItem("data");
      const storageData = JSON.parse(storage);
      const res = await getLoginDataAPI({
        username: storageData.username,
        token,
      });
      if (res) {
        const { username, bio, id, profileImage } = res;
        // storeUsername(username);
        setUsername(username);
        setBio(bio);
        setId(id);
        setCurrentId(id);
        setProfileImage(profileImage);
      }
      setIsLoading(false);
    }

    const token = Cookies.get("token");

    if (!token) {
      setIsToken(false);
      return;
    }

    if (!username) {
      setIsLoading(true);
      await fetchData();
    }
    // eslint-disable-next-line
  }, []);

  if (isLoading) {
    return (
      <div className="flex-c spinner">
        <Spinner animation="border" variant="primary" />
      </div>
    );
  }

  if (!isToken) {
    return <Redirect to="/" />;
  }

  if (done) {
    return <Redirect to="/profile" />;
  }

  return (
    <div className="settings">
      <Navbar className=" flex-sb settings-nav">
        <Link to="/profile">
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
