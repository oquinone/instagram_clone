import axios from "axios";

export const updateSettings = async (info) => {
  try {
    const response = await axios.put(
      "https://afternoon-lake-11970-27bd8a5aced0.herokuapp.com/info/update",
      {
        ...info,
      }
    );
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
      "https://afternoon-lake-11970-27bd8a5aced0.herokuapp.com/info/updateAllBasicInfo",
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
