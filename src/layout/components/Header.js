import React from "react";
import { Link } from "react-router-dom";
import { HEADER } from "../../constants/global";
import { LINK_HOME } from "../../constants/utils";

const Header = () => {
  return (
    <header className="header">
      <Link className="logo" to="/">
        <i class="fas fa-shopping-basket"></i>
        <span>Groco</span>
      </Link>
      <nav className="navbar">
        {HEADER.map((item, index) => {
          return (
            <Link key={index} to={item.url}>
              {item.name}
            </Link>
          );
        })}
      </nav>
      <div>
        <i id="menu-btn" class="fas fa-bars"></i>
        <i id="search-btn" class="fas fa-search"></i>
        <i id="shopping-btn" class="fas fa-shopping-cart"></i>
        <i id="login-btn" class="fas fa-user"></i>
      </div>
      <form className="search-form">
        <input type="search" placeholder="buscar..." id="search" />
        <i class="fas fa-search"></i>
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
          <i id="menu-btn" class="fas fa-times"></i>
        </div>
        <h3 className="total">
          Total: <span>S/ 50.00</span>
        </h3>
        <Link to="" className="btn">
          Ver compras
        </Link>
      </div>
      <form className="login-form">
        <h3>Iniciar sesión</h3>
        <input type="email" placeholder="ingrese su correo" />
        <input type="password" placeholder="ingrese su contraseña" />
        <div className="remember">
          <input type="checkbox" id="remember" />
          <label for="remember">Recordarme</label>
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
    </header>
  );
};

export default Header;
