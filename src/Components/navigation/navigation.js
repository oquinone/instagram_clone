import "../../styling/navigation.scss";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import { UploadFile } from "../uploadImageModal";
import { useNavigationHooks } from "./navigation.hooks";

export const Navigation = () => {
  const { openModal, uploadImage, onFileChange, closeModal } =
    useNavigationHooks();

  return (
    <nav className="flex-c navigation">
      <UploadFile open={openModal} close={closeModal} save={uploadImage} />
      <div
        style={{
          width: "70px",
          height: "40px",
          padding: "15px 0 0 15px",
        }}
      >
        <div>
          <label htmlFor="navigation-input">
            <UploadFileIcon style={{ cursor: "pointer" }} />
          </label>

          <input
            id="navigation-input"
            type="file"
            name="upfile"
            accept="image/*"
            className="navigation-input"
            onChange={(e) => onFileChange(e)}
            style={{ cursor: "pointer" }}
          />
        </div>
      </div>
    </nav>
  );
};
