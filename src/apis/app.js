import axios from "axios";

export const uploadNewImageApi = async (data, token) => {
  try {
    const response = await axios.post(
      "http://instacloneapi-env.eba-dsivkvr7.us-east-2.elasticbeanstalk.com/info/upload",
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

export const uploadNewImageToProfileApi = async (data, token) => {
  try {
    const response = await axios.post(
      "http://instacloneapi-env.eba-dsivkvr7.us-east-2.elasticbeanstalk.com/info/userUploadedImagesB64",
      {
        id: data.id,
        image: data.image,
      },
      {
        headers: {
          "Content-Type": "multipart/form-data",
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
