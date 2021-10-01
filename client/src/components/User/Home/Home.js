import React from 'react';
// import homeImage from '../../../assets/images/dev.png';
import style from './Home.module.css'

function Home() {
    return (
        <div className={`row justify-content-center align-items-center text-center ${style.home}`}>
            <div className="col">
                <h1>Hi! I'm <span className={style.nama}>Akhmad Alwan R</span></h1>
                <h3>Backend Developer. 17 years old.</h3>
            </div>
        </div>
    )
}

export default Home;