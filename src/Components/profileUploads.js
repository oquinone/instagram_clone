import React from "react";
// import { Button } from 'react-bootstrap';
import img_1 from "../images/nature_1.jpeg";
import img_2 from "../images/nature_2.jpeg";
import img_3 from "../images/nature_3.jpeg";
import img_4 from "../images/nature_4.jpeg";

//zucstand
import { useInfoStore, useImageUploadState } from "../store/store";

const ProfileUploads = () => {
  const uploadedImages = useInfoStore((state) => state.uploadedImages);
  const imgs = [img_1, img_2, img_3, img_4];
  const { setSelectedImage } = useImageUploadState();

  return (
    <section className="profile-uploads">
      <hr />
      <div className="profile-uploads-flex">
        {uploadedImages !== undefined
          ? uploadedImages.map((data, index) => (
              <div key={index} onClick={() => setSelectedImage(index)}>
                <img src={data} alt={data} />
              </div>
            ))
          : imgs.map((data, index) => (
              <div key={index} onClick={() => setSelectedImage(index)}>
                <img src={data} alt={data} />
              </div>
            ))}
      </div>
    </section>
  );
};

export default ProfileUploads;
