/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import '../css/style.css'; // Asegúrate de tener un archivo CSS para los estilos

function Registro({ irInicioSesion }) {
    return (
        <>
            <div className="container-form sign-up">
                <div className="welcome-back">
                    <div className="message">
                        <h1>Bienvenido a Ganadeando App</h1>
                        <h3>Si ya tienes una cuenta, por favor inicia sesión aquí</h3>
                        <button className="sign-up-btn" onClick={irInicioSesion}>Iniciar Sesión</button>
                    </div>
                </div>
            </div>
            <div>
                <form className="formulario">
                    <h2 className="create-account">Crear una cuenta</h2>
                    <div className="iconos">
                        <div className="border-icono">
                            <FaFacebook color="white" />
                        </div>
                        <div className="border-icono">
                            <FaInstagram color="white" />
                        </div>
                        <div className="border-icono">
                            <FaTwitter color="white" />
                        </div>
                    </div>
                    <p className="cuenta-gratis">Crear una cuenta gratis</p>
                    <label htmlFor="Nombre">Nombre</label>
                    <input type="text" id="Nombre" />
                    <label htmlFor="email">Correo</label>
                    <input type="text" id="email" />
                    <label htmlFor="password">Contraseña</label>
                    <input type="password" id="password" />
                    <input type="button" value="Registrarse" />
                </form>
            </div>
        </>
    );
}

export default Registro;