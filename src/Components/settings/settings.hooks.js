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

  // eslint - disable - next - line;
  //   useEffect(() => {
  //     const fetchData = async () => {
  //     //   const token = Cookies.get("token");
  //     //   const storage = localStorage.getItem("data");
  //     //   const storageData = JSON.parse(storage);
  //       const res = await getLoginDataAPI({
  //         username: storageData.username,
  //         token,
  //       });
  //       if (res) {
  //         const { username, bio, id, profileImage } = res;
  //         // storeUsername(username);
  //         setUsername(username);
  //         setBio(bio);
  //         setId(id);
  //         setCurrentId(id);
  //         setProfileImage(profileImage);
  //       }
  //       setIsLoading(false);
  //     };
  //     if (!username) {
  //       setIsLoading(true);
  //       fetchData();
  //     }
  //     // eslint-disable-next-line
  //   }, []);

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
