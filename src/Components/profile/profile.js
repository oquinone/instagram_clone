import { Spinner } from "react-bootstrap";
import { Navigation } from "../navigation/navigation";
import ProfileUserInfo from "../profileUesrInfo";
import ProfileBioMobile from "../profileBioMobile";
import ProfileUploads from "../profileUploads";
import ProfileFollowersMobile from "../profileFollowersMobile";
import { ImageModal } from "../imageModal";
import "../../styling/profile.scss";
import "../../styling/globals.scss";
import { useProfileHooks } from "./profile.hooks";

const Profile = () => {
  const {
    isLoading,
    openModal,
    closeImageUploadModal,
    removeImage,
    infoStore,
    imageStore,
  } = useProfileHooks();

  if (isLoading) {
    return (
      <div className="flex-c spinner">
        <Spinner animation="border" variant="primary" />
      </div>
    );
  }

  return (
    <div className="profile">
      <ImageModal
        open={openModal}
        close={closeImageUploadModal}
        remove={removeImage}
        image={infoStore.uploadedImages[imageStore.selectedImage]}
      />

      <section className="profile-nav">
        <Navigation />
      </section>
      <hr />

      <ProfileUserInfo />

      <ProfileBioMobile />

      <ProfileFollowersMobile />

      <ProfileUploads />
    </div>
  );
};

export default Profile;
