import axios from "axios";

export const getProfileData = async ({ token }) => {
  try {
    const response = await axios.get("http://localhost:8080/info", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
    // console.log(response);
  } catch (error) {
    // Handle error
    console.error(error);
  }
};

export const getProfileDataFromUser = async ({ email, token }) => {
  try {
    const response = await axios.get("http://localhost:8080/info/findUser", {
      params: {
        email,
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
    // console.log(response);
  } catch (error) {
    // Handle error
    console.error(error);
  }
};

export const addNewUser = async (data, token) => {
  try {
    const response = await axios.post(
      "http://localhost:8080/info/add",
      {
        ...data,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
    // console.log(response);
  } catch (error) {
    // Handle error
    console.error(error);
  }
};
