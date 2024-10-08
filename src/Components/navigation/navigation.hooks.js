import { useState } from "react";
import { change } from "../../helper/settings";
import { useInfoStore, useImageUploadState } from "../../store/store";
import { PostAPICall } from "../../apis/apis";
import { urls } from "../../config/urls";

export const useNavigationHooks = (reloadProfile, setIsLoading) => {
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

  const uploadImage = async () => {
    setIsLoading(true);
    const data = { id: infoStore.id, image: imageStore.uploadedImage };
    await PostAPICall({
      options: { ...data },
      url: urls.uploadImageB64,
    });
    closeModal();
    await reloadProfile();
  };

  const closeModal = (e) => {
    URL.revokeObjectURL(imageStore.image);
    setupModal(false);
  };

  return { openModal, setupModal, uploadImage, onFileChange, closeModal };
};
