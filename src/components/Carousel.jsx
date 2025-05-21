import React, { useState, useRef } from "react";
import Drive from "../assets/Drive.png";
import Docs from "../assets/Docx.png";
import Gmail from "../assets/Gmail.png";
import Planilhas from "../assets/Planilhas.png";
import Apresentacao from "../assets/Apresentações.png";
import Classroom from "../assets/Classroom.png";
import Seguranca from "../assets/Segurança.png";
import Excel from "../assets/Excel.png";
import DireitosConsumidor from "../assets/Direitos do consumidor.png";
import BancoDados from "../assets/Banco de dados.png";
const Carousel = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const carouselRef = useRef(null);

  const slideLeft = () => {
    const newPosition = Math.max(scrollPosition - 300, 0);
    setScrollPosition(newPosition);
    carouselRef.current.scrollTo({
      top: 0,
      left: newPosition,
      behavior: "smooth",
    });
  };

  const slideRight = () => {
    const maxScroll =
      carouselRef.current.scrollWidth - carouselRef.current.clientWidth;
    const newPosition = Math.min(scrollPosition + 300, maxScroll);
    setScrollPosition(newPosition);
    carouselRef.current.scrollTo({
      top: 0,
      left: newPosition,
      behavior: "smooth",
    });
  };

  const carouselItems = [
    { src: Drive, alt: "Google Drive", text: "Google Drive" },
    { src: Docs, alt: "Google Docs", text: "Google Docs" },
    { src: Gmail, alt: "Gmail", text: "Gmail" },
    { src: Planilhas, alt: "Google Planilhas", text: "Google Planilhas" },
    {
      src: Apresentacao,
      alt: "Google Apresentações",
      text: "Google Apresentações",
    },
    { src: Classroom, alt: "Google Classroom", text: "Google Classroom" },
    {
      src: Seguranca,
      alt: "Segurança e Tecnologia",
      text: "Segurança e Tecnologia",
    },
    { src: Excel, alt: "Excel Iniciante", text: "Excel Iniciante" },
    { src: Excel, alt: "Excel Intermediário", text: "Excel Intermediário" },
    {
      src: DireitosConsumidor,
      alt: "Direitos do Consumidor",
      text: "Direitos do Consumidor",
    },
    {
      src: BancoDados,
      alt: "Tecnologia e Banco de Dados",
      text: "Tecnologia e Banco de Dados",
    },
  ];

  return (
    <>
      <div className="d-flex flex-column align-items-center">
        <div className="d-flex overflow-x-hidden w-100 p-6" ref={carouselRef}>
          {carouselItems.map((item, idx) => (
            <div className="carouselItemStyle d-flex flex-column align-items-center justify-content-center p-3" key={idx}>
              <img src={item.src} alt={item.alt} />
              <p className="textLink fs-2">{item.text}</p>
            </div>
          ))}
        </div>
        <div className="d-flex justify-content-between w-100 mt-2">
          <button
            className="bg-transparent border-none text-secondary fs-2 border-0 mx-5"
            onClick={slideLeft}
          >
            &#10094;
          </button>
          <button
            className="bg-transparent border-none text-secondary fs-2 border-0 mx-5"
            onClick={slideRight}
          >
            &#10095;
          </button>
        </div>
      </div>
    </>
  );
};

export default Carousel;
