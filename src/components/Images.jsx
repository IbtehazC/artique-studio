import React from "react";
import useFirestore from "../hooks/useFirestore";
import { motion } from "framer-motion";
import './images.css';

export default function Images({ setSelectedImg }) {
  const { docs } = useFirestore("images");
  console.log(docs);

  return (
    <div className="container">
      {docs &&
        docs.map((doc) => (
          <motion.div
            className="box"
            key={doc.id}
            onClick={() => setSelectedImg(doc.url)}
            layout
          >
            <div className="imagebox">
              <img
                src={doc.url}
                alt="some"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              />
            </div>
            <div className="content">
              <h2>{doc.details}</h2>
            </div>
          </motion.div>
        ))}
    </div>
  );
}
