import React, { useState, useRef } from "react";
import Drive from "../../assets/Drive.png";
import Docs from "../../assets/Docx.png";
import Gmail from "../../assets/Gmail.png";
import Planilhas from "../../assets/Planilhas.png";
import Apresentacao from "../../assets/Apresentações.png";
import Classroom from "../../assets/Classroom.png";
import Seguranca from "../../assets/Segurança.png";
import Excel from "../../assets/Excel.png";
import DireitosConsumidor from "../../assets/Direitos do consumidor.png";
import BancoDados from "../../assets/Banco de Dados.png";
import styles from "./Carousel.module.css";

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

  return (
    <>
      <div className="d-flex flex-column align-items-center">
        <div className="d-flex overflow-x-hidden w-100 p-6" ref={carouselRef}>
          <div className={styles.carouselItemStyle}>
            <img src={Drive} alt="Google Drive" />
            <p className={styles.textStyle}>Google Drive</p>
          </div>

          <div className={styles.carouselItemStyle}>
            <img src={Docs} alt="Google Docs" />
            <p className={styles.textStyle}>Google Docs</p>
          </div>

          <div className={styles.carouselItemStyle}>
            <img src={Gmail} alt="Gmail" />
            <p className={styles.textStyle}>Gmail</p>
          </div>

          <div className={styles.carouselItemStyle}>
            <img src={Planilhas} alt="Google Planilhas" />
            <p className={styles.textStyle}>
              Google <br />
              Planilhas
            </p>
          </div>

          <div className={styles.carouselItemStyle}>
            <img src={Apresentacao} alt="Google Apresentações" />
            <p className={styles.textStyle}>
              Google <br />
              Apresentações
            </p>
          </div>

          <div className={styles.carouselItemStyle}>
            <img src={Classroom} alt="Google Classroom" />
            <p className={styles.textStyle}>
              Google <br /> Classroom
            </p>
          </div>

          <div className={styles.carouselItemStyle}>
            <img src={Seguranca} alt="Segurança e Tecnologia" />
            <p className={styles.textStyle}>
              Segurança e <br /> Tecnologia
            </p>
          </div>

          <div className={styles.carouselItemStyle}>
            <img src={Excel} alt="Excel" />
            <p className={styles.textStyle}>
              Excel <br /> Iniciante
            </p>
          </div>

          <div className={styles.carouselItemStyle}>
            <img src={Excel} alt="Excel" />
            <p className={styles.textStyle}>
              Excel <br /> Intermediário
            </p>
          </div>

          <div className={styles.carouselItemStyle}>
            <img src={DireitosConsumidor} alt="Direitos do Consumidor" />
            <p className={styles.textStyle}>
              Direitos do <br /> Consumidor
            </p>
          </div>

          <div className={styles.carouselItemStyle}>
            <img src={BancoDados} alt="Excel" />
            <p className={styles.textStyle}>
              Tecnologia e <br /> Banco de Dados
            </p>
          </div>
        </div>
        <div className={styles.arrowContainerStyle}>
          <button className={styles.arrowStyle} onClick={slideLeft}>
            &#10094;
          </button>
          <button className={styles.arrowStyle} onClick={slideRight}>
            &#10095;
          </button>
        </div>
      </div>
    </>
  );
};

export default Carousel;
