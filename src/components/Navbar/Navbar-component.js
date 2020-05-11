import React from "react";
import { Link } from "react-router-dom";
import "./Navbar-styles.css";
import logo from "../../assets/images/Chat_Logo_PNG.png";
export default function Navbar(props) {
    return (
      <header className="navbar">
        <div class="logo">
          <img src={logo} alt="logo" />
        </div>
        <ul class="navbar-nav mr-auto">
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/">Registro</Link>
          </li>
          <li>
            <Link to="/">Iniciar Sesión</Link>
          </li>
          <li>
            <Link to="/chat">Chat</Link>
          </li>
          <li>
            <Link
              onClick={() =>
                props.logout().then(result => console.log("Desconectado"))
              }
            >
              Logout
            </Link>
          </li>
        </ul>
      </header>
    );
  }