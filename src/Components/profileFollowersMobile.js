import React from "react";
import { useInfoStore } from "../store/store";

const ProfileFollowersMobile = () => {
  const infoStore = useInfoStore();

  return (
    <section className="profile-followers-mobile">
      <div className="profile-followers-mobile-flex">
        <h5>{infoStore.uploadedImages.length}</h5>
        <h5>Post</h5>
      </div>
      <div className="profile-followers-mobile-flex">
        <h5>9</h5>
        <h5>Followers</h5>
      </div>
      <div className="profile-followers-mobile-flex">
        <h5>15</h5>
        <h5>Following</h5>
      </div>
    </section>
  );
};

export default ProfileFollowersMobile;
