import axios from "axios";

export const loginAPI = async (data) => {
  try {
    const response = await axios.post(
      "https://afternoon-lake-11970-27bd8a5aced0.herokuapp.com/api/auth/authenticate",
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
    const response = await axios.get(
      `https://afternoon-lake-11970-27bd8a5aced0.herokuapp.com/info/findUser`,
      {
        params: {
          email,
        },
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
