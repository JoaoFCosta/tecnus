import React from "react";
import { Link } from "react-router";
import { FaArrowLeft } from "react-icons/fa";
import { FaCirclePlay } from "react-icons/fa6";

import Drive from "../../assets/Drive.png";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

const GoogleDrive = () => {
  return (
    <>
      <Header />
      <h1 className="text-center fw-bold text-header-color mb-5">
        Google Drive
      </h1>
      <div className="container d-flex justify-content-center gap-5">
        <div className="courseLogo">
          <img src={Drive} alt="Google Drive" />
          <span className="textLink text-light fs-2 fw-bold">Google Drive</span>
        </div>

        <p className="textLink text-light col-6 fs-3 mt-3">
          O Google Drive é uma plataforma de armazenamento em nuvem,
          compartilhamento e também colaboração de arquivos, sendo documentos,
          planilhas e apresentações.
          <br />
          <br />
          <strong>Duração:</strong> 51 minutos e 54 segundos
          <br />
          <strong>Professor:</strong> Claudinho Buchecha
        </p>
      </div>

      <div className="container col-6 mt-3">
        <Link
          to="/courses"
          className="mt-5 textLink text-decoration-none text-more-color fw-bold "
        >
          <FaArrowLeft /> Retornar aos cursos
        </Link>
      </div>

      <div className="container mt-5 ">
        <h1 className="text-more-color fw-bold ">O que você irá aprender:</h1>
      </div>

      <div className="container mt-3 d-flex gap-5 flex-row">
        <div className="playVideo">
          <FaCirclePlay className="text-light fs-1" />
        </div>

        <span className="fs-3 text-light mx-4">
          Aula 1 - Tornar Público
          <br />
          <span className="fs-5">duração: 10 minutos</span>
        </span>

        <Link className="text-text-decoration-none mx-5" to="/googleDrive">
          <button className="btn moreBtn fs-5 mx-4">Assistir aula</button>
        </Link>
      </div>

      <div className="container mt-3 mb-5 d-flex gap-5 flex-row">
        <progress value={0} className="w-100"></progress>
      </div>

      <div className="container mt-3 d-flex gap-5 flex-row">
        <div className="playVideo">
          <FaCirclePlay className="text-light fs-1" />
        </div>

        <span className="fs-3 text-light mx-4">
          Aula 2 - Acesso Offline
          <br />
          <span className="fs-5">duração: 10 minutos</span>
        </span>

        <Link className="text-text-decoration-none mx-5" to="/googleDrive">
          <button className="btn moreBtn fs-5 mx-4">Assistir aula</button>
        </Link>
      </div>

      <div className="container mt-3 mb-5 d-flex gap-5 flex-row">
        <progress value={0} className="w-100"></progress>
      </div>

      <div className="container mt-3 d-flex gap-5 flex-row">
        <div className="playVideo">
          <FaCirclePlay className="text-light fs-1" />
        </div>

        <span className="fs-3 text-light mx-4">
          Aula 3 - Gmail e Google Drive
          <br />
          <span className="fs-5">duração: 11 minutos</span>
        </span>

        <Link className="text-text-decoration-none" to="/googleDrive">
          <button className="btn moreBtn fs-5 mx-4">Assistir aula</button>
        </Link>
      </div>

      <div className="container mt-3 mb-5 d-flex gap-5 flex-row">
        <progress value={0} className="w-100"></progress>
      </div>

      <Footer />
    </>
  );
};

export default GoogleDrive;
