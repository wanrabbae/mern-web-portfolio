import React from 'react';
import style from './About.module.css'
import logoImg from '../../../assets/images/logo.png'

function About() {
    return (
        <div className="py-5">
            <div className="row text-center">
                <div className="col">
                    <h2>About Me</h2>
                </div>
            </div>
            <div className="row justify-content-center align-items-center mt-3" data-aos="fade-down" data-aos-duration="1000">
                <div className="col-md-4">
                    <img src={logoImg} alt="logo" width="250" className="img-fluid mx-auto" />
                </div>
                <div className="col-md-7">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Aperiam, doloremque, eaque, eius, exercitationem,
                        fugiat, illum, ipsam, itaque, laborum, magni, molestias
                        natus, nesciunt, nihil, nobis, officiis, omnis,
                        perferendis, quaerat, quas, quisquam, quod, ratione,
                        repellendus, rerum, sapiente, sequi, similique,
                        sunt, tempora, tenetur, totam, ut, vel, veritatis,
                        vitae, voluptatem.
                    </p>
                </div>
            </div>
            <hr />
            <div>
                <p data-aos="fade-up" data-aos-duration="1000">
                    You can reach me out via email at <a href="mailto:alwanrabbae@gmail.com" target="_blank" rel="noreferrer" className={`${style.emailColor}`}>alwanrabbae@gmail.com</a>, or via socials below:
                </p>
                <div className={style.flexBox} data-aos="fade-up" data-aos-duration="1000">
                    <div className="flex1">
                        <a target="_blank" rel="noreferrer" href="https://www.facebook.com" className={`btn nav-link text-white ${style.btnFacebook} ${style.buttonSocial} ${style.buttonSocialFocus}`}><i className="fab fa-facebook-f"></i> Facebook</a>
                    </div>
                    <div className="flex1">
                        <a target="_blank" rel="noreferrer" href="https://www.github.com/wanrabbae" className={`btn nav-link text-white ${style.btnGithub} ${style.buttonSocial} ${style.buttonSocialFocus}`}><i className="fab fa-github"></i> GitHub</a>
                    </div>
                    <div className="flex1">
                        <a target="_blank" rel="noreferrer" href="https://www.instagram.com/imalwan_" className={`btn nav-link text-white ${style.btnInstagram} ${style.buttonSocial} ${style.buttonSocialFocus}`}><i className="fab fa-instagram"></i> Instagram</a>
                    </div>
                    <div className="flex1">
                        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com" className={`btn nav-link text-white ${style.btnLinkedin} ${style.buttonSocial} ${style.buttonSocialFocus}`}><i className="fab fa-linkedin"></i> LinkedIn</a>
                    </div>
                    <div className="flex1">
                        <a target="_blank" rel="noreferrer" href="https://www.twitter.com" className={`btn nav-link text-white ${style.btnTwitter} ${style.buttonSocial} ${style.buttonSocialFocus}`}><i className="fab fa-twitter"></i> Twitter</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;