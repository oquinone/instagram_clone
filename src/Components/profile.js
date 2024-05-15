import React, { useState, useEffect } from "react";
import { Spinner } from "react-bootstrap";
// import { Redirect } from "react-router-dom";

//Imported Functions
import { Navigation } from "./navigation";
import { getProfileDataFromUser } from "../apis/profile";

//Components
import { ProfileUserInfo } from "./profileUesrInfo";
import { ProfileBioMobile } from "./profileBioMobile";
import { ProfileUploads } from "./profileUploads";
import { ProfileFollowersMobile } from "./profileFollowersMobile";
import { ImageModal } from "./imageDisplay";

// Styling & Images
import "../styling/profile.scss";
import "../styling/globals.scss";

//Zustand
import { useInfoStore } from "../zucstand/store";

import Cookies from "js-cookie";

export const Profile = () => {
  const [isLoading, setIsLoading] = useState(true);
  //   const [isLoggedOut, setIsLoggedOut] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  //Zustand
  const setInfo = useInfoStore((state) => state.setInfo);
  const { bio, username, profileImage, setProfileImage, setUploadedImages } =
    useInfoStore();

  useEffect(() => {
    makeRequest();
    // eslint-disable-next-line
  }, []);

  //   useEffect(() => {
  //     if (selectedImage.payload !== -1 && selectedImage !== -1) {
  //       setOpenModal(true);
  //       // console.log(pData['uploadedPhotos'][selectedImage.payload]);
  //     }
  //   }, [selectedImage]);

  const makeRequest = async () => {
    const token = Cookies.get("token");
    const storage = JSON.parse(localStorage.getItem("data"));
    const getUserName = username || storage.username || "";
    const res = await getProfileDataFromUser({ username: getUserName, token });
    if (res) {
      const data = res;
      setInfo({ bio: data.bio, username: data.username, id: data.id });
      // setBio(data.bio);
      setProfileImage(data.profileImage);
      const images =
        data.images !== null
          ? data.uploadedImages.map((item) => {
              return item.image;
            })
          : [];
      setUploadedImages(images);
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex-c spinner">
        <Spinner animation="border" variant="primary" />
      </div>
    );
  }

  const closeModal = () => {
    setOpenModal(false);
    // dispatch(setSelectedImage(-1));
  };

  const reloadProfile = async () => {
    setIsLoading(true);
    await makeRequest();
  };

  return (
    <div className="profile">
      <ImageModal open={openModal} close={closeModal} />

      <section className="profile-nav">
        <Navigation reloadProfile={reloadProfile} />
      </section>
      <hr />

      <ProfileUserInfo
        username={username}
        bio={bio}
        profilePicture={profileImage}
      />

      <ProfileBioMobile bio={bio} />

      <ProfileFollowersMobile />

      <ProfileUploads />
    </div>
  );
};
