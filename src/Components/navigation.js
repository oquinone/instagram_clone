import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { change } from "../helper/settings";
import { useInfoStore, useImageUploadState } from "../zucstand/store";
import "../styling/navigation.scss";
import { ReactComponent as Upload } from "../svg/upload.svg";
import { ReactComponent as Profile } from "../svg/profile.svg";
import { ReactComponent as Off } from "../svg/power-outline.svg";
import { UploadFile } from "../Components/modal";
import { uploadNewImageToProfileApi } from "../apis/app";
import Cookies from "js-cookie";

export const Navigation = ({ reloadProfile }) => {
  const [isLoggedOut, setIsLoggedOut] = useState(false);
  const [openModal, setupModal] = useState(false);

  const { image, setImage } = useImageUploadState();
  const setUploadedImage = useImageUploadState(
    (state) => state.setUploadedImage
  );
  const uploadedImage = useImageUploadState((state) => state.uploadedImage);
  const id = useInfoStore((state) => state.id);

  const onFileChange = async (e) => {
    e.preventDefault();
    const { files } = e.target;
    const localImageUrl = URL.createObjectURL(files[0]);
    setImage(localImageUrl);
    const b64Image = await change(files[0]);
    setUploadedImage(b64Image);
    setupModal(true);
  };

  const signOut = async () => {
    localStorage.clear();
    Cookies.remove("token");
    setIsLoggedOut(true);
  };

  const submit = async () => {
    // setIsLoading(true);
    const data = { id, image: uploadedImage };
    const token = Cookies.get("token");
    await uploadNewImageToProfileApi(data, token);
    closeModal();
    await reloadProfile();
  };

  const closeModal = (e) => {
    URL.revokeObjectURL(image);
    setupModal(false);
  };

  if (isLoggedOut) {
    return <Redirect to="/" />;
  }

  return (
    <nav className="flex-c navigation">
      <UploadFile open={openModal} close={closeModal} save={submit} />
      <div
        style={{
          width: "70px",
          height: "40px",
          padding: "15px 0 0 15px",
        }}
      >
        <a>
          <label htmlFor="navigation-input">
            <Upload fill="black" style={{ cursor: "pointer" }} />
          </label>

          <input
            id="navigation-input"
            type="file"
            name="upfile"
            accept="image/*"
            className="navigation-input"
            onChange={(e) => onFileChange(e)}
            style={{ cursor: "pointer" }}
          />
        </a>
      </div>

      <div
        style={{
          width: "70px",
          height: "40px",
          padding: "15px 0 0 0",
        }}
      >
        <Link to="/profile" className="nav-btn">
          <Profile fill="black" />
        </Link>
      </div>

      <div
        style={{
          width: "70px",
          height: "40px",
          padding: "15px 0 0 0",
          cursor: "pointer",
        }}
      >
        <Off fill="black" onClick={() => signOut()} className="nav-btn" />
      </div>
    </nav>
  );
};
