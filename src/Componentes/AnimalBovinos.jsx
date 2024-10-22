/* eslint-disable no-unused-vars */
import React from 'react';

function AnimalBovinos() {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://unpkg.com/boxicons@2.1.1/css/boxicons.min.css"
          rel="stylesheet"
        />
        <link rel="icon" href="public/logo-Ganadeando-app.ico" />
        <link rel="stylesheet" href="/css/AnimalBbovino.css" />
        <script
          src="https://kit.fontawesome.com/7e5b2d153f.js"
          crossOrigin="anonymous"
        ></script>
        <script src="https://unpkg.com/boxicons@2.1.4/dist/boxicons.js"></script>
        <script defer src="/js/index.js"></script>
        <script src="/js/script.js"></script>
        <title>Ganadeando App</title>
      </head>

      <body>
        <div className="contenedor">
          <header className="header">
            <nav className="nav">
              <a href="#" className="logo nav-link">
                <img src="/GanadeandoApp/public/logo-Ganadeando-app.ico" alt="logo" />
              </a>
              <button className="nav-toggle" aria-label="Abrir menú">
                <i className="fas fa-bars"></i>
              </button>
              <ul className="nav-menu">
                <li className="nav-menu-item">
                  <a href="/html/Conocenos.html" className="nav-menu-link nav-link">
                    Conócenos
                  </a>
                </li>
                <li className="nav-menu-item">
                  <a href="/html/Contatcto.html" className="nav-menu-link nav-link">
                    Contacto
                  </a>
                </li>
                <li className="nav-menu-item">
                  <a href="/GanadeandoApp/src/Componentes/AnimalBovinos.jsx" className="nav-menu-link nav-link">
                    Animal Bovino
                  </a>
                </li>
                <li className="nav-menu-item">
                  <a
                    href="/html/index.html"
                    className="nav-menu-link nav-link nav-menu-link_active"
                  >
                    Registrarse
                  </a>
                </li>
              </ul>
            </nav>
          </header>
        </div>

        <form className="formulario">
          <h2 className="create-account">Bienvenido a la sección Animal Bovino</h2>
          <p>Que acción quieres realizar</p>
          <br />
          <div className="AnimalBovino">
            <img src="/public/cinco.jpg" width="300px" height="250px" />
            <div className="message">
              <button className="sign-up-btn">
                <img src="/public/Registrar.svg" alt="" width="20px" height="20px" />
                <a href="/html/Registrar.html">Registrar</a>
              </button>
              <button className="sign-up-btn">
                <img src="/public/Actualizar.svg" alt="" width="20px" height="20px" />
                <a href="/html/Actualizar.html">Actualizar</a>
              </button>
              <button className="sign-up-btn">
                <img src="/public/Consultar.svg" alt="" width="20px" height="20px" />
                <a href="/html/Consultar.html">Consultar</a>
              </button>
              <button className="sign-up-btn">
                <img src="/public/Eliminar.svg" alt="" width="20px" height="20px" />
                <a href="/html/Eliminar.html">Eliminar</a>
              </button>
            </div>
          </div>
        </form>

        <footer>
          <br />
          <div className="redes-sociales">Ganadeando App</div>
          <div className="copyright">© 2022 Todos los derechos reservados.</div>
        </footer>
      </body>
    </html>
  );
}

export default AnimalBovinos;