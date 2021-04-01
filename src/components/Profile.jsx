import React from "react";
import "./profile.css";

export default function Profile() {
  return (
    <div
      className="artist-cover"
    >
      <div className="artist-info">
        <div className="avatar">
          <img
            src="/images/display picture.jpg"
            alt="display"
            height="120"
            width="120"
          />
        </div>
        <div className="info-text">
          <h1 className="artist-name">Swapnil Tanzim</h1>
          <div className="additional-info">wall artist</div>
        </div>
      </div>
    </div>
  );
}
