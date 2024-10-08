import { useState, useEffect } from "react";
import { useInfoStore, useImageUploadStore } from "../../store/store";
import { GetAPICall } from "../../apis/apis";
import { urls } from "../../config/urls";
import { removeImageApi } from "../../apis/apis";

export const useProfileHooks = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [openModal, setOpenModal] = useState(false);
  const infoStore = useInfoStore();
  const imageStore = useImageUploadStore();

  useEffect(() => {
    getProfileData();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (imageStore.selectedImage !== -1 && imageStore.selectedImage !== -1) {
      setOpenModal(true);
    }
  }, [imageStore.selectedImage]);

  const getProfileData = async () => {
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

  const closeImageUploadModal = () => {
    imageStore.setSelectedImage(-1);
    setOpenModal(false);
  };

  const removeImage = async () => {
    let images = infoStore.uploadedImages;
    images.splice(imageStore.selectedImage, 1);
    infoStore.setUploadedImages(images);
    setOpenModal(false);
    await removeImageApi({
      url: urls.deleteImage,
      id: infoStore.id,
      idx: imageStore.selectedImage,
    });
    imageStore.setSelectedImage(-1);
    await getProfileData();
  };

  const reloadProfile = async () => {
    setIsLoading(true);
    await getProfileData();
  };

  return {
    isLoading,
    setIsLoading,
    openModal,
    setOpenModal,
    closeImageUploadModal,
    removeImage,
    reloadProfile,
    infoStore,
    imageStore,
  };
};
