import React, { useState } from "react";
import Images from "./Images";
import ImagePopUp from "./ImagePopUp";
import Loading from "./Loading";
import useFirestore from "../hooks/useFirestore";

export default function Portfolio() {
  const [selectedImg, setSelectedImg] = useState(null);
  const [loading, setLoading] = useState(true);
  const { docs } = useFirestore("images", setLoading);

  return (
    <div className="main">
      
      {loading ? (
        <Loading />
      ) : (
        <Images setSelectedImg={setSelectedImg} docs={docs} setLoading={setLoading} />
      )}
      {selectedImg && (
        <ImagePopUp selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </div>
  );
}
