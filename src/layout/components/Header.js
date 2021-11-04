import React from "react";
import { Link } from "react-router-dom";
import { HEADER } from "../../constants/global";

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <Link className="logo" to="/">
          <i className="fas fa-shopping-basket"></i>
          <span>Groco</span>
        </Link>
        <nav className="navbar">
          {HEADER.map((item, index) => {
            return (
              <Link key={index} to={item.url} className="navbar__item">
                {item.name}
              </Link>
            );
          })}
        </nav>
        <div className="icons">
          <i id="menu-btn" className="fas fa-bars"></i>
          <i id="search-btn" className="fas fa-search"></i>
          <i id="shopping-btn" className="fas fa-shopping-cart"></i>
          <i id="login-btn" className="fas fa-user"></i>
        </div>
        <form className="search-form">
          <input type="search" placeholder="buscar..." id="search" />
          <i className="fas fa-search"></i>
        </form>
        <div className="shopping-cart">
          <div className="shopping__item">
            <img src="https://i.ibb.co/7bC8szm/platano.png" alt="platano" />
            <div className="shopping-content">
              <h3>Platano</h3>
              <span className="stock">1</span>
              <span className="multiply">X</span>
              <span className="price">S/ 1.50</span>
            </div>
            <i id="menu-btn" className="fas fa-times"></i>
          </div>
          <div className="shopping__item">
            <img src="https://i.ibb.co/7bC8szm/platano.png" alt="platano" />
            <div className="shopping-content">
              <h3>Platano</h3>
              <span className="stock">1</span>
              <span className="multiply">X</span>
              <span className="price">S/ 1.50</span>
            </div>
            <i id="menu-btn" className="fas fa-times"></i>
          </div>
          <h3 className="total">
            Total: <span>S/ 50.00</span>
          </h3>
          <div className="btn-content">
            <Link to="" className="btn">
              Ver compras
            </Link>
          </div>
        </div>
        <form className="login-form">
          <h3>Iniciar sesión</h3>
          <input type="email" placeholder="ingrese su correo" />
          <input type="password" placeholder="ingrese su contraseña" />
          <div className="remember">
            <input type="checkbox" id="remember" />
            <label htmlFor="remember">Recordarme</label>
          </div>
          <button>Ingresar</button>
          <p>
            ¿Olvido contraseña?
            <Link to="" className="link">
              Click Aqui
            </Link>
          </p>
          <p>
            ¿No tienes una cuenta?
            <Link to="" className="link">
              Click Aqui
            </Link>
          </p>
        </form>
      </div>
    </header>
  );
};

export default Header;
