import React from "react";
import style from "./Home.module.css";

function Home() {
  return (
    <div
      className={`row justify-content-center align-items-center text-center ${style.home}`}
      data-aos="fade-down"
      data-aos-duration="1000"
    >
      <div className="col">
        <h1>
          Hi! I'm <span className={style.nama}>Akhmad Alwan R</span>
        </h1>
        <h3>A Software Developer. 17 years old.</h3>
      </div>
    </div>
  );
}

export default Home;
