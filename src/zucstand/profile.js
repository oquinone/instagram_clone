import { create } from "zustand";

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
