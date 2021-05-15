import { createSlice } from '@reduxjs/toolkit'

export const imageSlice = createSlice({
  name: 'imageUpload',
  initialState: {
    image: "",
    imageName: "",
    uploadedImage: null,
    uploaded: false,
  },
  reducers: {
    setImage: (state, image) => {
      state.image = image;
    },
    setImageName: (state, name) => {
      state.imageName = name;
    },
    setUploadedImage: (state, newUpload) => {
      state.uploadedImage = newUpload;
    },
    isUploaded: (state, check) => {
      state.uploaded = check;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setImage, setImageName, setUploadedImage, isUploaded } = imageSlice.actions;

export default imageSlice.reducer