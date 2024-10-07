import axios from "axios";

export const GetAPICall = async (props) => {
  const { url } = props;
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const PostAPICall = async (props) => {
  const { options, url } = props;
  try {
    const response = await axios.post(url, {
      ...options,
    });
    return response.data;
    // console.log(response);
  } catch (error) {
    // Handle error
    console.error(error);
  }
};

export const PutAPICall = async (props) => {
  const { url, info } = props;
  try {
    const response = await axios.put(url, {
      ...info,
    });

    return response.data;
  } catch (error) {
    // Handle error
    console.error(error);
  }
};
