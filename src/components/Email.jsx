import React, { useState } from "react";
import { firestore } from "../firebase/config";

const Email = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const Submitter = (e) => {
    e.preventDefault();
    firestore
      .collection("emails")
      .add({
        name: name,
        email: email,
        message: message,
      })
      .then(() => {
        alert("Your message has been delivered");
      })
      .catch((error) => {
        alert(error.message);
      });

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <form className="form" onSubmit={Submitter}>
      <h1>How can we help??</h1>

      <label>Name</label>
      <input
        placeholder="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label>Email</label>
      <input
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label>Message</label>
      <textarea
        placeholder="type it up"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>

      <button type="submit">Let's Go</button>
    </form>
  );
};

export default Email;
