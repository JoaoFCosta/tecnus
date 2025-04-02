import React from "react";
import Principios from "../../assets/Group58.png";
import styles from "./AboutUs.module.css";
import MemberCarousel from "../../components/memberCarousel/MemberCarousel";

const AboutUs = () => {
  return (
    <div className="container">
      <h1 className="text-header-color fw-bold text-center">Quem somos nós?</h1>

      <h1 className="fw-bold text-more-color mt-5">Nosso principios:</h1>

      <div className="d-flex justify-content-center">
        <img src={Principios} alt="" className="col-7 img-fluid" />
      </div>

      <div className="d-flex justify-content-center">
        <p className={`text-light w-75 mt-5 mb-5 d-flex text-center fs-2 ${styles.text}`}>
          Tecnus vem da junção das palavras: Tecnologia + us ( nós - em inglês),
          ou seja tecnus significa a tecnologia que nos une. Saturn vem do
          planeta Saturno, o qual seus anéis representam conectividade e união
        </p>
      </div>
      <MemberCarousel />
    </div>
  );
};

export default AboutUs;
