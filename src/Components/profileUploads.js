import React from "react";
import img_1 from "../images/nature_1.jpeg";
import img_2 from "../images/nature_2.jpeg";
import img_3 from "../images/nature_3.jpeg";
import img_4 from "../images/nature_4.jpeg";
import { useInfoStore, useImageUploadStore } from "../store/store";

const ProfileUploads = () => {
  const infoStore = useInfoStore();
  const imageStore = useImageUploadStore();
  const imgs = [img_1, img_2, img_3, img_4];

  return (
    <section className="profile-uploads">
      <hr />
      <div className="profile-uploads-flex">
        {infoStore.uploadedImages !== undefined
          ? infoStore.uploadedImages.map((data, index) => {
              return (
                <div
                  key={index}
                  onClick={() => imageStore.setSelectedImage(index)}
                >
                  <img src={data} alt={data} />
                </div>
              );
            })
          : imgs.map((data, index) => (
              <div
                key={index}
                onClick={() => imageStore.setSelectedImage(index)}
              >
                <img src={data} alt={data} />
              </div>
            ))}
      </div>
    </section>
  );
};

export default ProfileUploads;
