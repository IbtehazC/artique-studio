import React, { useState } from "react";
import ProgressBar from "./ProgressBar";

export default function ImageUploader() {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const [details, setDetails] = useState("");
  const [shouldSubmit, setShouldSubmit] = useState(false);

  const types = ["image/jpeg"];

  const changeImageHandler = (e) => {
    let selected = e.target.files[0];

    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError("");
    } else {
      setFile(null);
      setError("Please set a valid format (Jpeg)");
    }
  };

  const uploadHandler = (e) => {
    e.preventDefault();
    setShouldSubmit(true);
  };

  return (
    <form onSubmit={uploadHandler}>
      <label>
        <input type="file" onChange={changeImageHandler} />
        <span>+</span>
      </label>
      <div className="output">
        {error && <div className="error">{error}</div>}
        {file && <div>{file.name}</div>}
        {shouldSubmit && (
          <ProgressBar file={file} setFile={setFile} details={details} setDetails={setDetails} setShouldSubmit={setShouldSubmit} />
        )}
      </div>
      <input
        type="text"
        value={details}
        onChange={(e) => setDetails(e.target.value)}
        placeholder="Details"
      />
      <button type="submit">Submit</button>
    </form>
  );
}
