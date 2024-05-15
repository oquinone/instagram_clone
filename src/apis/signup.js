import axios from "axios";

export const signUpUserAPI = async (data) => {
  try {
    const response = await axios.post("http://localhost:8080/api/auth/signup", {
      ...data,
    });
    return response.data;
  } catch (error) {
    // Handle error
    console.error(error);
  }
};
