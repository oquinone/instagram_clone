import { create } from "zustand";

// basic info store
export const useInfoStore = create((set) => ({
  id: 0,
  username: "",
  bio: "",
  profileImage: "",
  uploadedImages: [],

  setBio: (newBio) => set(() => ({ bio: newBio })),
  setUserName: (newUsername) => set(() => ({ username: newUsername })),
  setInfo: ({ id, username, bio }) =>
    set(() => ({
      id: id,
      username: username,
      bio: bio,
    })),
  setData: ({ username, bio }) =>
    set(() => ({
      username: username,
      bio: bio,
    })),
  setProfileImage: (newImage) => set(() => ({ profileImage: newImage })),
  setId: (newId) => set(() => ({ id: newId })),
  setUploadedImages: (images) => set(() => ({ uploadedImages: images })),
}));

// image upload store
export const useImageUploadStore = create((set) => ({
  image: "",
  imageName: "",
  uploadedImage: null,
  uploaded: false,
  profileImage: "",
  selectedImage: -1,

  setImage: (newImage) => set(() => ({ image: newImage })),
  setImageName: (newImageName) => set(() => ({ imageName: newImageName })),
  setUploadedImage: (newUploadImage) =>
    set(() => ({ uploadedImage: newUploadImage })),
  isUploaded: (isUploaded) => set(() => ({ uploaded: isUploaded })),
  setProfileImage: (newProfImage) =>
    set(() => ({ profileImage: newProfImage })),
  setSelectedImage: (newSelectedImage) =>
    set(() => ({ selectedImage: newSelectedImage })),
}));

// sign up store
export const useSignUpStore = create((set) => ({
  userSignUp: false,

  setUserSignUp: (signup) => set((state) => ({ userSignUp: signup })),
  resetSignUpStore: () => set((state) => ({ userSignUp: false })),
}));
