// import { createSlice } from "@reduxjs/toolkit";

// export const imageSlice = createSlice({
//   name: "imageUpload",
//   initialState: {
//     image: "",
//     imageName: "",
//     uploadedImage: null,
//     uploaded: false,
//     profileImage: "",
//   },
//   reducers: {
//     setImage: (state, image) => {
//       state.image = image;
//     },
//     setImageName: (state, name) => {
//       state.imageName = name;
//     },
//     setUploadedImage: (state, newUpload) => {
//       state.uploadedImage = newUpload;
//     },
//     isUploaded: (state, check) => {
//       state.uploaded = check;
//     },
//     setProfileImage: (state, image) => {
//       state.profileImage = image;
//     },
//   },
// });

// // Action creators are generated for each case reducer function
// export const {
//   setImage,
//   setImageName,
//   setUploadedImage,
//   isUploaded,
//   setProfileImage,
// } = imageSlice.actions;

// export default imageSlice.reducer;

import { create } from "zustand";

export const useImageUploadState = create((set) => ({
  image: "",
  imageName: "",
  uploadedImage: null,
  uploaded: false,
  profileImage: "",

  setImage: (newImage) => set((state) => ({ image: newImage })),
  setImageName: (newImageName) => set((state) => ({ imageName: newImageName })),
  setUploadedImage: (newUploadImage) =>
    set((state) => ({ uploadedImage: newUploadImage })),
  isUploaded: (isUploaded) => set((state) => ({ uploaded: isUploaded })),
  setProfileImage: (newProfImage) =>
    set((state) => ({ profileImage: newProfImage })),
}));
