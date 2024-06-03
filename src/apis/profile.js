import axios from "axios";

export const getProfileData = async ({ token }) => {
  try {
    const response = await axios.get(
      "https://afternoon-lake-11970-27bd8a5aced0.herokuapp.com/info",
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

export const getProfileDataFromUser = async ({ email, token }) => {
  try {
    const response = await axios.get(
      "https://afternoon-lake-11970-27bd8a5aced0.herokuapp.com/info/findUser",
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
    // console.log(response);
  } catch (error) {
    // Handle error
    console.error(error);
  }
};

export const addNewUser = async (data, token) => {
  try {
    const response = await axios.post(
      "https://afternoon-lake-11970-27bd8a5aced0.herokuapp.com/info/add",
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

export const deleteUserApi = async (id, idx, token) => {
  try {
    const response = await axios.delete(
      "https://afternoon-lake-11970-27bd8a5aced0.herokuapp.com/info/removeImage",
      {
        params: {
          id,
          idx,
        },
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
