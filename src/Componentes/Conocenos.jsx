/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, { useState } from 'react';
import '../css/style.css'; // Asegúrate de tener un archivo CSS para los estilos

const Conocenos = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      img: '/public/Alimentacion.png', // Asegúrate de que la ruta de la imagen sea correcta
      title: 'Nutrición Bovina',
      description: 'La aplicación Web permite llevar un control en la alimentación en los bovinos, permitiendo tener una trazabilidad de la alimentación diaria.',
    },
    {
      img: '/public/Vacunacion.png', // Asegúrate de que la ruta de la imagen sea correcta
      title: 'Vacunación',
      description: 'Llevar control en la vacunación ayuda en gran medida a reducir enfermedades y la mortalidad animal.',
    },
    {
      img: '/public/Nacimientos.png', // Asegúrate de que la ruta de la imagen sea correcta
      title: 'Nacimientos',
      description: 'Llevar el control de los nuevos nacimientos permite un mayor desarrollo para nuestros finqueros.',
    },
    {
      img: '/public/Ordeño.png', // Asegúrate de que la ruta de la imagen sea correcta
      title: 'Producción láctea',
      description: 'Registrar la producción láctea de tu ganado te permite calcular de manera eficaz el punto de equilibrio para que tu finca sea autosostenible y altamente productiva.',
    },
  ];

  const plusSlides = (n) => {
    setCurrentSlide((prevSlide) => (prevSlide + n + slides.length) % slides.length);
  };

  const setSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div>
      <header className="header">
        {/* Puedes agregar un logo o un título aquí si lo deseas */}
      </header>
      <div className="container">
        <div className="mySlides">
          <img src={slides[currentSlide].img} alt={`imagen-${currentSlide + 1}`} width="800px" height="400px" />
          <h3>{slides[currentSlide].title}</h3>
          <p>{slides[currentSlide].description}</p>
        </div>
        <a className="prev" onClick={() => plusSlides(-1)}>&#10094;</a>
        <a className="next" onClick={() => plusSlides(1)}>&#10095;</a>
        <div className="elements">
          {slides.map((slide, index) => (
            <span key={index} className={`quadrate ${index === currentSlide ? 'active' : ''}`} onClick={() => setSlide(index)}></span>
          ))}
        </div>
      </div>
      <footer>
        <br />
        <div className="redes-sociales">Ganadeando App</div>
        <div className="copyright">2024 Todos los derechos reservados.</div>
      </footer>
    </div>
  );
};

export default Conocenos;
