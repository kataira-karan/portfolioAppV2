import { React, useRef } from "react";
import "./ContactStyle.css";
import Header from "../Header/Header";
import TopNav from "../TopNav/TopNav";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_34wn20l",
        "template_xatl0bc",
        form.current,
        "86FZHUBmkBWoyDL48"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <>
      <TopNav></TopNav>

      <div className="contact-details-container">
        <div className="form-container">
          <section id="contact">
            <div class="contact-box">
              <div class="contact-links">
                <Header
                  fontSize="2rem"
                  fontColor="#CCF381"
                  fontWeight="bold"
                  margin="0.5rem 0"
                  text="Liked My Work?"
                ></Header>
                <Header
                  fontSize="1.5rem"
                  fontColor="white"
                  fontWeight="600"
                  text="Don't Be A Stranger 👋"
                ></Header>
                <Header
                  fontSize="1rem"
                  fontColor="white"
                  fontWeight="500"
                  margin="0.5rem 0"
                  text="Let's Connect And Build Something"
                ></Header>
                <div class="links">
                  <div class="link">
                    <a>
                      <img
                        className="social-img"
                        src="https://i.postimg.cc/m2mg2Hjm/linkedin.png"
                        alt="linkedin"
                      />
                    </a>
                  </div>
                  <div class="link">
                    <a>
                      <img
                        className="social-img"
                        src="https://i.postimg.cc/YCV2QBJg/github.png"
                        alt="github"
                      />
                    </a>
                  </div>
                  <div class="link">
                    <a>
                      <img
                        className="social-img"
                        src="https://i.postimg.cc/W4Znvrry/codepen.png"
                        alt="codepen"
                      />
                    </a>
                  </div>
                  <div class="link">
                    <a>
                      <img
                        className="social-img"
                        src="https://i.postimg.cc/NjLfyjPB/email.png"
                        alt="email"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div class="contact-form-wrapper">
                <form ref={form} onSubmit={sendEmail}>
                  <div class="form-item">
                    <input type="text" name="user_name" required />
                    <label>Name:</label>
                  </div>
                  <div class="form-item">
                    <input type="text" name="user_email" required />
                    <label>Email:</label>
                  </div>
                  <div class="form-item">
                    <textarea class="" name="message" required></textarea>
                    <label>Message:</label>
                  </div>
                  <button class="submit-btn">Shoot Me A Text</button>
                </form>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Contact;
