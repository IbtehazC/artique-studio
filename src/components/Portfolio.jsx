import React, { useState } from "react";
import Images from "./Images";
import ImagePopUp from "./ImagePopUp";
import useFirestore from "../hooks/useFirestore";

export default function Portfolio() {
  const [selectedImg, setSelectedImg] = useState(null);
  const { docs } = useFirestore("images");

  return (
    <div className="main">
      <Images setSelectedImg={setSelectedImg} docs={docs} />
      {selectedImg && (
        <ImagePopUp selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </div>
  );
}
