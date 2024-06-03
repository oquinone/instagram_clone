import axios from "axios";

export const loginAPI = async (data) => {
  try {
    const response = await axios.post(
      "https://instacloneapi-env.eba-dsivkvr7.us-east-2.elasticbeanstalk.com/api/auth/authenticate",
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
      `https://instacloneapi-env.eba-dsivkvr7.us-east-2.elasticbeanstalk.com/info/findUser`,
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
