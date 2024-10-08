import { create } from "zustand";

// basic info store
export const useInfoStore = create((set) => ({
  id: 0,
  username: "",
  bio: "",
  profileImage: "",
  uploadedImages: [],

  setBio: (newBio) => set((state) => ({ bio: newBio })),
  setUserName: (newUsername) => set((state) => ({ username: newUsername })),
  setInfo: ({ id, username, bio }) =>
    set((state) => ({
      id: id,
      username: username,
      bio: bio,
    })),
  setData: ({ username, bio }) =>
    set((state) => ({
      username: username,
      bio: bio,
    })),
  setProfileImage: (newImage) => set((state) => ({ profileImage: newImage })),
  setId: (newId) => set((state) => ({ id: newId })),
  setUploadedImages: (images) => set((state) => ({ uploadedImages: images })),
}));

// image upload store
export const useImageUploadStore = create((set) => ({
  image: "",
  imageName: "",
  uploadedImage: null,
  uploaded: false,
  profileImage: "",
  selectedImage: -1,

  setImage: (newImage) => set((state) => ({ image: newImage })),
  setImageName: (newImageName) => set((state) => ({ imageName: newImageName })),
  setUploadedImage: (newUploadImage) =>
    set((state) => ({ uploadedImage: newUploadImage })),
  isUploaded: (isUploaded) => set((state) => ({ uploaded: isUploaded })),
  setProfileImage: (newProfImage) =>
    set((state) => ({ profileImage: newProfImage })),
  setSelectedImage: (newSelectedImage) =>
    set((state) => ({ selectedImage: newSelectedImage })),
}));

// sign up store
export const useSignUpStore = create((set) => ({
  userSignUp: false,

  setUserSignUp: (signup) => set((state) => ({ userSignUp: signup })),
  resetSignUpStore: () => set((state) => ({ userSignUp: false })),
}));
