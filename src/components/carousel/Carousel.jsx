import React, { useState, useRef } from "react";
import Drive from "../../assets/Drive.png";
import Docs from "../../assets/Docx.png";
import Gmail from "../../assets/Gmail.png";
import Planilhas from "../../assets/Planilhas.png";
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
    <div className={styles.carouselContainerStyle}>
      <div className={styles.carouselStyle} ref={carouselRef}>
        <div className={styles.carouselItemStyle}>
          <img src={Drive} alt="Google Drive" />
          <p className={styles.textStyle}>Google Drive</p>
        </div>

        <div className={styles.carouselItemStyle}>
          <img src={Docs} alt="Google Drive" />
          <p className={styles.textStyle}>Google Docs</p>
        </div>

        <div className={styles.carouselItemStyle}>
          <img src={Gmail} alt="Google Drive" />
          <p className={styles.textStyle}>Gmail</p>
        </div>

        <div className={styles.carouselItemStyle}>
          <img src={Planilhas} alt="Google Drive" />
          <p className={styles.textStyle}>Google Planilhas</p>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
