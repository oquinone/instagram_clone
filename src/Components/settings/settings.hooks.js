import { useState } from "react";
import { useInfoStore } from "../../store/store";
import { change } from "../../helper/settings";
import { PutAPICall } from "../../apis/apis";
import { urls } from "../../config/urls";

export const useSettingsHook = () => {
  const infoStore = useInfoStore();
  const [profileImage, setProfileImage] = useState(
    infoStore.profileImage || ""
  );
  const [username, setUsername] = useState(infoStore.username);
  const [bio, setBio] = useState(infoStore.bio);
  const [redirectToProfile, setRedirectToProfile] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // select image to upload
  const changeProfileImage = async (e) => {
    const newImage = await change(e.target.files[0]);
    if (newImage) {
      setProfileImage(newImage);
    }
  };

  const updateSettings = async () => {
    if (!username || !infoStore.id) return;
    setIsLoading(true);
    await PutAPICall({
      url: urls.updateBasicInfo,
      info: { username, bio, id: infoStore.id, profileImage },
    });
    setRedirectToProfile(true);
    setIsLoading(false);
  };

  return {
    changeProfileImage,
    updateSettings,
    isLoading,
    redirectToProfile,
    profileImage,
    username,
    setUsername,
    bio,
    setBio,
  };
};
