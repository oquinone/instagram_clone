import { useState } from "react";
import { change } from "../../helper/settings";
import { useInfoStore, useImageUploadState } from "../../zucstand/store";
// import { uploadNewImageToProfileApi } from "../../apis/app";
// import Cookies from "js-cookie";
import { PostAPICall } from "../../apis/apis";
import { urls } from "../../config/urls";

export const useNavigationHooks = (reloadProfile) => {
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

  const submit = async () => {
    // setIsLoading(true);
    const data = { id: infoStore.id, image: imageStore.uploadedImage };
    await PostAPICall({
      options: { ...data },
      url: urls.uploadImageB64,
    });
    // await uploadNewImageToProfileApi(data, token);
    closeModal();
    await reloadProfile();
  };

  const closeModal = (e) => {
    URL.revokeObjectURL(imageStore.image);
    setupModal(false);
  };

  return { openModal, setupModal, submit, onFileChange, closeModal };
};
