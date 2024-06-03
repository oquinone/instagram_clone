import axios from "axios";

export const getProfileData = async ({ token }) => {
  try {
    const response = await axios.get(
      "http://instacloneapi-env.eba-dsivkvr7.us-east-2.elasticbeanstalk.com/info",
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
      "http://instacloneapi-env.eba-dsivkvr7.us-east-2.elasticbeanstalk.com/info/findUser",
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
      "http://instacloneapi-env.eba-dsivkvr7.us-east-2.elasticbeanstalk.com/info/add",
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
      "http://instacloneapi-env.eba-dsivkvr7.us-east-2.elasticbeanstalk.com/info/removeImage",
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
