import axios from "axios";

export const uploadNewImageApi = async (data, token) => {
  try {
    const response = await axios.post(
      "https://afternoon-lake-11970-27bd8a5aced0.herokuapp.com/info/upload",
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
      "https://afternoon-lake-11970-27bd8a5aced0.herokuapp.com/info/userUploadedImagesB64",
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
