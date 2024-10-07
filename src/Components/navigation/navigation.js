// import { Link } from "react-router-dom";
import "../../styling/navigation.scss";
import UploadFileIcon from "@mui/icons-material/UploadFile";
// import { ReactComponent as Profile } from "../../svg/profile.svg";
// import { ReactComponent as Off } from "../../svg/power-outline.svg";
import { UploadFile } from "../modal";
// import { uploadNewImageToProfileApi } from "../../apis/app";
import { useNavigationHooks } from "./navigation.hooks";

export const Navigation = ({ reloadProfile }) => {
  const { openModal, submit, onFileChange, closeModal } =
    useNavigationHooks(reloadProfile);

  return (
    <nav className="flex-c navigation">
      <UploadFile open={openModal} close={closeModal} save={submit} />
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

      {/* <div
        style={{
          width: "70px",
          height: "40px",
          padding: "15px 0 0 0",
        }}
      >
        <Link to="/profile" className="nav-btn">
          <Profile fill="black" />
        </Link>
      </div> */}

      {/* <div
        style={{
          width: "70px",
          height: "40px",
          padding: "15px 0 0 0",
          cursor: "pointer",
        }}
      >
        <Off fill="black" onClick={() => signOut()} className="nav-btn" />
      </div> */}
    </nav>
  );
};
