import React, { useRef } from "react";
import styles from "./MemberCarousel.module.css";
import Elipse from "../../assets//Ellipse13.png"; // Substitua pelo caminho correto da imagem

const MemberCarousel = () => {
  const carouselRef = useRef(null);

  const slideLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft -= 300; // Ajuste o valor para o deslocamento desejado
    }
  };

  const slideRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft += 300; // Ajuste o valor para o deslocamento desejado
    }
  };

  const members = [
    { name: "Nome do Membro 1", image: "https://placehold.co/125x125" },
    { name: "Nome do Membro 2", image: "https://placehold.co/125x125" },
    { name: "Nome do Membro 3", image: "https://placehold.co/125x125" },
    { name: "Nome do Membro 4", image: "https://placehold.co/125x125" },
    { name: "Nome do Membro 5", image: "https://placehold.co/125x125" },
    { name: "Nome do Membro 6", image: "https://placehold.co/125x125" },
    { name: "Nome do Membro 7", image: "https://placehold.co/125x125" },
  ];

  return (
    <>
      <h1 className="text-more-color fw-bold">Nossa equipe:</h1>
      <div className={`position-absolute mt-5 ${styles.connectingLine}`}></div>
      <div className="d-flex flex-column align-items-center mt-4">
        <div
          className={`d-flex p-6 gap-5 overflow-hidden ${styles.carouselContainer}`}
          ref={carouselRef}
          style={{
            display: "flex",
            overflowX: "auto", // Permite o scroll horizontal
            scrollBehavior: "smooth", // Animação suave ao rolar
          }}
        >
          {members.map((member, index) => (
            <div key={index} className="bg-transparent z-3 text-end">
              <div className="position-relative d-inline-block">
                <img
                  src={Elipse}
                  alt=""
                  className="position-relative"
                  style={{ zIndex: 1 }}
                />
                <img
                  src={member.image}
                  alt={member.name}
                  className="position-absolute rounded-circle"
                  style={{
                    top: "40%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    zIndex: 2,
                  }}
                />
              </div>
              <p className="text-light fs-5">{member.name}</p>
            </div>
          ))}
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

export default MemberCarousel;
