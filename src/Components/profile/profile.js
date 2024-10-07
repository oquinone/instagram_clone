// import React, { useState, useEffect } from "react";
// import { Redirect } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import { Navigation } from "../navigation/navigation";
import ProfileUserInfo from "../profileUesrInfo";
import ProfileBioMobile from "../profileBioMobile";
import ProfileUploads from "../profileUploads";
import ProfileFollowersMobile from "../profileFollowersMobile";
import { ImageModal } from "../imageDisplay";
import "../../styling/profile.scss";
import "../../styling/globals.scss";
import { useProfileHooks } from "./profile.hooks";

const Profile = () => {
  const {
    isLoading,
    openModal,
    closeModal,
    removeImage,
    reloadProfile,
    infoStore,
    imageStore,
  } = useProfileHooks();

  if (isLoading) {
    return (
      <div className="flex-c spinner">
        <Spinner animation="border" variant="primary" />
      </div>
    );
  }

  return (
    <div className="profile">
      <ImageModal
        open={openModal}
        close={closeModal}
        remove={removeImage}
        image={infoStore.uploadedImages[imageStore.selectedImage]}
      />

      <section className="profile-nav">
        <Navigation reloadProfile={reloadProfile} />
      </section>
      <hr />

      <ProfileUserInfo
        username={infoStore.username}
        bio={infoStore.bio}
        profilePicture={infoStore.profileImage}
      />

      <ProfileBioMobile bio={infoStore.bio} />

      <ProfileFollowersMobile />

      <ProfileUploads />
    </div>
  );
};

export default Profile;
