import React from "react";
import Header from "../../components/header/Header";
import styles from "./Home.module.css";
import TecnusLogo from "../../assets/LOGOVETOBRANCO1.png";

export const Home = () => {
  return (
    <div>
      <Header />

      <div className="col-12 d-flex flex-column justify-content-center align-items-center vh-100">
        <div className="w-100">
          <h2 className="display-6 fw-bold text-specific-color">
            Quem somos nós?
          </h2>

          <p
            className={`mt-4 fs-5 text-light align-items-start w-25 ${styles.text}`}
          >
            Projeto social da Enactus FACAMP, que promove o letramento digital e
            capacitação profissional para jovens e adultos da rede pública de
            ensino e de instituições vulneráveis através de cursos gratuitos
          </p>
        </div>
        <img src={TecnusLogo} alt=""/>
      </div>
    </div>
  );
};

export default Home;
