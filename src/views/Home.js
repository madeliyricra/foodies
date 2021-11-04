import React from "react";
import { Link } from "react-router-dom";
import { TEXTS_SLIDES } from "../constants/global";

const Home = () => {
  return (
    <div className="home main">
      <section className="slides">
        <div className="slides-container">
          {TEXTS_SLIDES.map((item, index) => {
            return (
              <div className="slide__item" key={index}>
                <div className="content">
                  <span>{item.subtitle}</span>
                  <h3>{item.title}</h3>
                  <Link className="link" to={item.urlButton}>
                    {item.nameButton}
                  </Link>
                </div>
                <img src={item.image} alt={item.image} />
              </div>
            );
          })}
          <i id="next-slide" className="fas fa-angle-right"></i>
          <i id="prev-slide" className="fas fa-angle-left"></i>
        </div>
      </section>
      <section className="banners">
        {TEXTS_SLIDES.map((item, index) => {
          return (
            <div className="banner__item" key={index}>
              <div className="content">
                <span>{item.subtitle}</span>
                <h3>{item.title}</h3>
                <Link className="link" to={item.urlButton}>
                  {item.nameButton}
                </Link>
              </div>
              <img src={item.image} alt={item.image} />
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default Home;
