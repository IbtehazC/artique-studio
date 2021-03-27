import React, { useState } from "react";
import Images from "./Images";
import ImagePopUp from "./ImagePopUp";

export default function Portfolio() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div style={{display: "flex", justifyContent: "center"}}>
      <Images setSelectedImg={setSelectedImg} />
      {selectedImg && (
        <ImagePopUp selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </div>
  );
}
