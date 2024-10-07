import { useState } from "react";
import { change } from "../../helper/settings";
import { useInfoStore, useImageUploadState } from "../../zucstand/store";
import { uploadNewImageToProfileApi } from "../../apis/app";
import Cookies from "js-cookie";
import { PostAPICall } from "../../apis/apis";
import { urls } from "../../config/urls";

export const useNavigationHooks = ({ reloadProfile }) => {
  //   const [isLoggedOut, setIsLoggedOut] = useState(false);
  const [openModal, setupModal] = useState(false);

  const imageStore = useImageUploadState();
  const infoStore = useInfoStore();

  const onFileChange = async (e) => {
    e.preventDefault();
    const { files } = e.target;
    const localImageUrl = URL.createObjectURL(files[0]);
    imageStore.setImage(localImageUrl);
    const b64Image = await change(files[0]);
    imageStore.setUploadedImage(b64Image);
    setupModal(true);
  };

  //   const signOut = async () => {
  //     localStorage.clear();
  //     Cookies.remove("token");
  //     setIsLoggedOut(true);
  //   };

  const submit = async () => {
    // setIsLoading(true);
    const data = { id: infoStore.id, image: imageStore.uploadedImage };
    // const token = Cookies.get("token");
    await PostAPICall({
      options: { params: { ...data } },
      url: urls.uploadImage,
    });
    // await uploadNewImageToProfileApi(data, token);
    closeModal();
    // await reloadProfile();
  };

  const closeModal = (e) => {
    URL.revokeObjectURL(imageStore.image);
    setupModal(false);
  };

  return { openModal, setupModal, submit, onFileChange, closeModal };
};
