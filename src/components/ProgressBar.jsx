import React, { useEffect } from "react";
import useStorage from "../hooks/useStorage";
import { motion } from "framer-motion";

export default function ProgressBar({
  file,
  setFile,
  details,
  setDetails,
  setShouldSubmit,
}) {
  const { url, progress } = useStorage(file, details);

  useEffect(() => {
    if (url) {
      setFile(null);
      setShouldSubmit(false);
      setDetails("");
    }
  }, [url, setFile, setShouldSubmit, setDetails]);

  return (
    <motion.div
      className="progress-bar"
      initial={{ width: 0 }}
      animate={{ width: progress + "%" }}
    ></motion.div>
  );
}
