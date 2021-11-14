import React from "react";
import style from "./About.module.css";
import { useSelector } from "react-redux";
import parse from "html-react-parser";

function About() {
  const data = useSelector((state) => state.abouts);

  return (
    <div className="py-5">
      {data.length === 0 ? (
        <div className="text-center">
          <span
            className="spinner-border spinner-border-sm"
            style={{ width: "3rem", height: "3rem" }}
            role="status"
            aria-hidden="true"
          ></span>
        </div>
      ) : (
        <>
          <div className="row text-center">
            <div className="col">
              <h2>About Me</h2>
            </div>
          </div>
          <div
            className="row justify-content-center align-items-center mt-3"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            <div className="col-md-4">
              <img
                src={data[0].profile.url}
                alt="logo"
                width="250"
                className="img-fluid mx-auto"
              />
            </div>
            <div className="col-md-7">
              <p>{parse(data[0].content)}</p>
            </div>
          </div>
          <hr />
          <div>
            <p data-aos="fade-up" data-aos-duration="1000">
              You can reach me out via email at{" "}
              <a
                href="mailto:alwanrabbae@gmail.com"
                target="_blank"
                rel="noreferrer"
                className={`${style.emailColor}`}
              >
                alwanrabbae@gmail.com
              </a>{" "}
              for projects or other, or via socials below:
            </p>
            <div
              className={style.flexBox}
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className="flex1">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.facebook.com"
                  className={`btn nav-link text-white ${style.btnFacebook} ${style.buttonSocial} ${style.buttonSocialFocus}`}
                >
                  <i className="fab fa-facebook-f"></i> Facebook
                </a>
              </div>
              <div className="flex1">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.github.com/wanrabbae"
                  className={`btn nav-link text-white ${style.btnGithub} ${style.buttonSocial} ${style.buttonSocialFocus}`}
                >
                  <i className="fab fa-github"></i> GitHub
                </a>
              </div>
              <div className="flex1">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.instagram.com/imalwan_"
                  className={`btn nav-link text-white ${style.btnInstagram} ${style.buttonSocial} ${style.buttonSocialFocus}`}
                >
                  <i className="fab fa-instagram"></i> Instagram
                </a>
              </div>
              <div className="flex1">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.linkedin.com"
                  className={`btn nav-link text-white ${style.btnLinkedin} ${style.buttonSocial} ${style.buttonSocialFocus}`}
                >
                  <i className="fab fa-linkedin"></i> LinkedIn
                </a>
              </div>
              <div className="flex1">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.twitter.com"
                  className={`btn nav-link text-white ${style.btnTwitter} ${style.buttonSocial} ${style.buttonSocialFocus}`}
                >
                  <i className="fab fa-twitter"></i> Twitter
                </a>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default About;
