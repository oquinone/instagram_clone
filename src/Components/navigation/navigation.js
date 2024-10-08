import "../../styling/navigation.scss";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import { UploadFile } from "../uploadImageModal";
import { useNavigationHooks } from "./navigation.hooks";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

export const Navigation = () => {
  const { openModal, uploadImage, onFileChange, closeModal } =
    useNavigationHooks();

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Upload Image
    </Tooltip>
  );

  return (
    <nav className="flex-c navigation">
      <UploadFile open={openModal} close={closeModal} save={uploadImage} />

      <div>
        <label htmlFor="navigation-input">
          <OverlayTrigger
            placement="right"
            delay={{ show: 250, hide: 200 }}
            overlay={renderTooltip}
          >
            <UploadFileIcon style={{ cursor: "pointer", fontSize: "40px" }} />
          </OverlayTrigger>
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
    </nav>
  );
};
