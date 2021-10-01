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
            <div className="row justify-content-center align-items-center mt-3">
                <div className="col-md-4">
                    <img src={logoImg} alt="logo" width="250" className="img-fluid mx-auto" />
                </div>
                <div className="col-md-6">
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
        </div>
    );
}

export default About;