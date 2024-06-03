import axios from "axios";

export const signUpUserAPI = async (data) => {
  try {
    const response = await axios.post(
      "https://instacloneapi-env.eba-dsivkvr7.us-east-2.elasticbeanstalk.com/api/auth/signup",
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
