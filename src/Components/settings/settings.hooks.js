import { useState, useEffect } from "react";
import { useInfoStore } from "../../zucstand/store";
import { change } from "../../helper/settings";
import { PutAPICall } from "../../apis/apis";
import Cookies from "js-cookie";
import { urls } from "../../config/urls";
import { getLoginDataAPI } from "../../apis/login";

export const useSettingsHook = () => {
  const storeProfileImage = useInfoStore((state) => state.profileImage);
  const storeUsername = useInfoStore((state) => state.username);
  const { id, setId } = useInfoStore();

  const [profileImage, setProfileImage] = useState(storeProfileImage || "");
  const [username, setUsername] = useState(storeUsername);
  const [bio, setBio] = useState(useInfoStore((state) => state.bio));
  const [getId, setCurrentId] = useState(id);
  const [done, setDone] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // select image to upload
  const changeProfileImage = async (e) => {
    const newImage = await change(e.target.files[0]);
    if (newImage) {
      setProfileImage(newImage);
    }
  };

  const updateSettings = async () => {
    if (!username || !getId) return;
    // const token = Cookies.get("token");
    // await updateAllSettingsAPI({ username, bio, id, profileImage }, token);
    await PutAPICall({
      url: urls.updateBasicInfo,
      info: { username, bio, id, profileImage },
    });
    setDone(true);
  };

  // eslint - disable - next - line;
  useEffect(() => {
    const fetchData = async () => {
      const token = Cookies.get("token");
      const storage = localStorage.getItem("data");
      const storageData = JSON.parse(storage);
      const res = await getLoginDataAPI({
        username: storageData.username,
        token,
      });
      if (res) {
        const { username, bio, id, profileImage } = res;
        // storeUsername(username);
        setUsername(username);
        setBio(bio);
        setId(id);
        setCurrentId(id);
        setProfileImage(profileImage);
      }
      setIsLoading(false);
    };
    if (!username) {
      setIsLoading(true);
      fetchData();
    }
    // eslint-disable-next-line
  }, []);

  return {
    changeProfileImage,
    updateSettings,
    isLoading,
    done,
    profileImage,
    username,
    setUsername,
    bio,
    setBio,
  };
};
