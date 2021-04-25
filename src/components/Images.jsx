import React, { useState } from "react";
import { motion } from "framer-motion";
import Loading from "./Loading";
import "./images.css";

const container = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.5,
      duration: 0.25,
      ease: "easeIn",
      delayChildren: 0.5,
      staggerChildren: 0.3,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 1,
    }
  },
};

export default function Images({ setSelectedImg, docs }) {
  const [loading, setLoading] = useState(true);

  return (
    <motion.div
      className="container"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {docs &&
        docs.map((doc) => (
          <motion.div
            className="box"
            key={doc.id}
            onClick={() => setSelectedImg(doc)}
            variants={item}
          >
            <div className="imagebox">
              {loading ? <Loading /> : null}
              <img
                src={doc.url}
                alt="some"
                onLoad={() => setLoading(false)}
              />
            </div>
            <div className="content">
              <h2>{doc.details}</h2>
            </div>
          </motion.div>
        ))}
    </motion.div>
  );
}
