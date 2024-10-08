import React from "react";
import Slug from "../images/ucscsammy.jpeg";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import { useInfoStore } from "../store/store";

const ProfileUserInfo = () => {
  const username = useInfoStore((state) => state.username);
  const bio = useInfoStore((state) => state.bio);
  const profilePicture = useInfoStore((state) => state.profileImage);

  return (
    <section className="profile-p-all profile-user">
      <div>
        {!profilePicture ? (
          <img src={Slug} alt="Sammy The Slug" className="profile-pic" />
        ) : (
          <img src={profilePicture} alt="Profile Pic" className="profile-pic" />
        )}
      </div>
      <div className="profile-stats-mobile">
        <div>
          <h1>{username}</h1>
        </div>
        <div className="p-tb profile-edit">
          <Link to="/edit">
            <Button variant="light" block size="sm" className="textStyle">
              Edit Profile
            </Button>
          </Link>
        </div>
      </div>
      <div className="profile-stats">
        <div className="info">
          <div className="info-username">
            <h1>{username}</h1>
          </div>
          <div className="p-tb profile-edit">
            <Link to="edit">
              <Button variant="light" block size="sm" className="textStyle">
                Edit Profile
              </Button>
            </Link>
          </div>
          <div></div>
          <div></div>
        </div>
        <div className="status">
          <div className="status-flex">
            <h4>8</h4>
            <h5>Post</h5>
          </div>
          <div className="status-flex">
            <h4>9</h4>
            <h5>Followers</h5>
          </div>
          <div className="status-flex">
            <h4>10</h4>
            <h5>Following</h5>
          </div>
        </div>
        <div className="profile-bio">
          <p>{bio}</p>
        </div>
      </div>

      <div className="extra"></div>
      <div className="extra"></div>
    </section>
  );
};

export default ProfileUserInfo;
