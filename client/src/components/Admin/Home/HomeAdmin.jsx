import React from 'react';
import style from './HomeAdmin.module.css';

function Home() {
    return (
        <div className={`row justify-content-center align-items-center text-center ${style.home}`} data-aos="fade-down" data-aos-duration="1000">
            <div className="col">
                <h1>Welcome to <span className={style.nama}>Admin Mode</span></h1>
            </div>
        </div>
    )
}

export default Home;