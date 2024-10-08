import { useState, useEffect } from "react";
import { useInfoStore, useImageUploadState } from "../../zucstand/store";
import { GetAPICall } from "../../apis/apis";
import { urls } from "../../config/urls";
import { removeImageApi } from "../../apis/apis";

export const useProfileHooks = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [openModal, setOpenModal] = useState(false);
  const infoStore = useInfoStore();
  const imageStore = useImageUploadState();

  useEffect(() => {
    makeRequest();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (imageStore.selectedImage !== -1 && imageStore.selectedImage !== -1) {
      setOpenModal(true);
    }
  }, [imageStore.selectedImage]);

  const makeRequest = async () => {
    const res = await GetAPICall({ url: urls.profileData });
    if (res.length > 0) {
      const data = res[0];
      infoStore.setInfo({
        bio: data.bio,
        username: data.username,
        id: data.id,
      });
      infoStore.setProfileImage(data.profileImage);
      const images =
        data.uploadedImages !== null
          ? data.uploadedImages.map((item) => {
              return item.image;
            })
          : [];
      infoStore.setUploadedImages(images);
      setIsLoading(false);
    }
  };

  const closeModal = () => {
    imageStore.setSelectedImage(-1);
    setOpenModal(false);
  };

  const removeImage = async () => {
    setIsLoading(true);
    setOpenModal(false);
    imageStore.setSelectedImage(-1);
    await removeImageApi({
      url: urls.deleteImage,
      id: infoStore.id,
      idx: imageStore.selectedImage,
    });
    // await deleteUserApi(infoStore.id, imageStore.selectedImage, token);
    await makeRequest();
    setIsLoading(false);
  };

  const reloadProfile = async () => {
    setIsLoading(true);
    await makeRequest();
  };

  return {
    isLoading,
    setIsLoading,
    openModal,
    setOpenModal,
    closeModal,
    removeImage,
    reloadProfile,
    infoStore,
    imageStore,
  };
};
