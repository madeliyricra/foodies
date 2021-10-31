import React from "react";
import { Link } from "react-router-dom";
import { HEADER, SOCIAL } from "../../constants/global";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__item">
          <h1 className="title">Groco</h1>
          <p>Groco es un sitito web</p>
        </div>
        <div className="footer__item">
          <h3>Enlaces rápidos</h3>
          <ul className="link">
            {HEADER.map((item, index) => {
              return (
                <li>
                  <Link key={index} to={item.url}>
                    <i class="fas fa-arrow-right"></i>
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="footer__item">
          <h3>Síguenos</h3>
          <ul className="link">
            {SOCIAL.map((item, index) => {
              return (
                <li>
                  <Link key={index} to={item.url}>
                    <i class={item.icon}></i>
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="footer__item">
          <h3>Boletín</h3>
          <p>Suscríbete para recibir Las Últimas Actualizaciones</p>
          <form className="subscribe-form">
            <input type="email" placeholder="Ingrese su correo electrónico" />
            <button>Suscribirse</button>
          </form>
        </div>
      </div>
      <div className="footer__credit">@Madeliy Ricra</div>
    </footer>
  );
};

export default Footer;
