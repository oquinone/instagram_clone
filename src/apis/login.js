import axios from "axios";

export const loginAPI = async (data) => {
  try {
    const response = await axios.post(
      "http://localhost:8080/api/auth/authenticate",
      {
        ...data,
      }
    );
    return response.data;
  } catch (error) {
    // Handle error
    console.error(error);
  }
};

// axios.defaults.withCredentials = true;
export const getLoginDataAPI = async ({ email, token }) => {
  try {
    const response = await axios.get(`http://localhost:8080/info/findUser`, {
      params: {
        email,
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    // Handle error
    console.error(error);
  }
};
