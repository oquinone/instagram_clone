import React, { useState, useEffect } from "react";
import { Spinner } from "react-bootstrap";
import { Navigation } from "./navigation";
import { getProfileDataFromUser } from "../apis/profile";
import { ProfileUserInfo } from "./profileUesrInfo";
import { ProfileBioMobile } from "./profileBioMobile";
import { ProfileUploads } from "./profileUploads";
import { ProfileFollowersMobile } from "./profileFollowersMobile";
import { ImageModal } from "./imageDisplay";
import "../styling/profile.scss";
import "../styling/globals.scss";
import { useInfoStore } from "../zucstand/store";
import Cookies from "js-cookie";

export const Profile = () => {
  const [isLoading, setIsLoading] = useState(true);
  //   const [isLoggedOut, setIsLoggedOut] = useState(false);
  const [openModal, setOpenModal] = useState(false);
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
    const getEmail = storage.email || "";
    const res = await getProfileDataFromUser({ email: getEmail, token });
    if (res) {
      setInfo({ bio: res.bio, username: res.username, id: res.id });
      setProfileImage(res.profileImage);
      const images =
        res.images !== null
          ? res.uploadedImages.map((item) => {
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
