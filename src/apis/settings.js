// export const updateUserInfo = async (username, bio, profilePic) => {
//   const url = "https://invulnerable-moliere-82505.herokuapp.com/edit";
//   const options = {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       Accept: "appliation.josn",
//     },
//     body: JSON.stringify({
//       username: username,
//       bio: bio,
//       image: profilePic,
//     }),
//     credentials: "include",
//   };
//   await fetch(url, options);
//   // const dataJSON = await data.json();
//   return;
// };

import axios from "axios";

export const updateSettings = async (info) => {
  try {
    const response = await axios.put("http://localhost:8080/info/update", {
      ...info,
    });
    return response.data;
    // console.log(response);
  } catch (error) {
    // Handle error
    console.error(error);
  }
};

export const updateAllSettingsAPI = async (info, token) => {
  try {
    const response = await axios.put(
      "http://localhost:8080/info/updateAllBasicInfo",
      {
        ...info,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response.data;
  } catch (error) {
    // Handle error
    console.error(error);
  }
};
