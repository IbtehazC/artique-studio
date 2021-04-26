import emailjs from "emailjs-com";
import React from "react";
import "./contactUs.css";

export default function ContactUs() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qyefa8o",
        "template_g5e7sll",
        e.target,
        "user_qeL5NINjCiGJS3NEBjMPF"
      )
      .then(
        (result) => {
          alert("Thank You! We will be responding soon");
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <div>
      <div className="container">
        <form onSubmit={sendEmail}>
          <div className="form-items">
            <div className="input-fields">
              <input
                type="text"
                className="input"
                placeholder="Name"
                name="name"
              />

              <input
                type="email"
                className="input"
                placeholder="name@example.com"
                name="email"
              />

              <input
                type="text"
                className="input"
                placeholder="01XXXXXXXXX"
                name="phone_number"
              />
            </div>

            <div className="txt-area">
              <textarea
                className="input"
                id=""
                placeholder="Type it Out"
                name="message"
              ></textarea>
              <div className="btn-submit">
                <input
                  type="submit"
                  className="submit-btn"
                  value="Send Now"
                ></input>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
