/* eslint-disable no-unused-vars */
import React from 'react';

function Contacto() {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://unpkg.com/boxicons@2.1.1/css/boxicons.min.css"
          rel="stylesheet"
        />
        <link rel="icon" href="/public/logo-Ganadeando-app.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="/css/style.css" />
        <script
          src="https://kit.fontawesome.com/7e5b2d153f.js"
          crossOrigin="anonymous"
        ></script>
        <script src="https://unpkg.com/boxicons@2.1.4/dist/boxicons.js"></script>
        <script defer src="/js/index.js"></script>
        <script src="/js/script.js"></script>
        <script src="/css/Contacto.css"></script>
        <title>Ganadeando App</title>
      </head>
      <body>
        <header className="header">
          
        </header>
        <form className="form">
          <div className="form__container">
            <h2 className="form__title">Contáctame</h2>
            <img src="/public/Consultar AB.png" width="200px" height="150px" />
            <input type="text" className="form__input" placeholder="Nombre:" />
            <input type="email" className="form__input" placeholder="Email:" />
            <textarea
              className="form__input form__input--message"
              placeholder="Mensaje:"
            />
            <input type="submit" value="Enviar" className="form__cta" />
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

export default Contacto;