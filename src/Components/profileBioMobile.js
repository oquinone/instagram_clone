import React from "react";
import { useInfoStore } from "../store/store";

const ProfileBioMobile = () => {
  const infoStore = useInfoStore();

  return (
    <section className="p-tb profile-bio-mobile">
      <p>{infoStore.bio}</p>
    </section>
  );
};

export default ProfileBioMobile;
