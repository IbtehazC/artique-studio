import React from "react";
import { motion } from "framer-motion";

export default function ImagePopUp({ selectedImg, setSelectedImg }) {
  const handleClick = (e) => {
    if (e.target.classList.contains("backdrop")) setSelectedImg(null);
  };

  return (
    <motion.div
      style={{ zIndex: 4 }}
      className="backdrop"
      onClick={handleClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.img
        src={selectedImg.url}
        alt="large"
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
      />
      <motion.h2 initial={{ y: "-100vh" }} animate={{ y: 0 }}>
        {selectedImg.details}
      </motion.h2>
    </motion.div>
  );
}
