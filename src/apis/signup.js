import axios from "axios";

export const signUpUserAPI = async (data) => {
  try {
    const response = await axios.post(
      "https://afternoon-lake-11970-27bd8a5aced0.herokuapp.com/api/auth/signup",
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
