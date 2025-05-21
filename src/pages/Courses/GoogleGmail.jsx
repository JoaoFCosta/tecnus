import React from "react";
import { useNavigate } from "react-router";
import { FaArrowLeft } from "react-icons/fa";
import { FaCirclePlay } from "react-icons/fa6";

import Gmail from "../../assets/Gmail.png";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

const GoogleGmail = () => {
  const navigate = useNavigate();

  const professor = "Getúlio de Oliveira";

  const aulas = [
    {
      id: 1,
      titulo: "Tornar Público",
      duracao: "10 minutos",
    },
    {
      id: 2,
      titulo: "Acesso Offline",
      duracao: "9 minutos",
    },
  ];

  const getTotalMinutos = (aulas) =>
    aulas.reduce((acc, aula) => {
      const match = aula.duracao.match(/\d+/);
      return acc + (match ? parseInt(match[0], 10) : 0);
    }, 0);

  return (
    <>
      <Header />
      <h1 className="text-center fw-bold text-header-color mb-5">G-mail</h1>

      <div className="container d-flex justify-content-center gap-5">
        <div className="courseLogo">
          <img src={Gmail} alt="Google Gmail" />
          <span className="textLink text-light fs-2 fw-bold">G-mail</span>
        </div>
        <p className="textLink text-light col-6 fs-3 mt-3">
          O Google Drive é uma plataforma de armazenamento em nuvem,
          compartilhamento e também colaboração de arquivos, sendo documentos,
          planilhas e apresentações.
          <br />
          <br />
          <strong>Duração:</strong> {getTotalMinutos(aulas)} minutos
          <br />
          <strong>Professor:</strong> {professor}
        </p>
      </div>

      <div className="container col-6">
        <button
          onClick={() => navigate("/courses")}
          className="mt-5 textLink text-decoration-none text-more-color fw-bold btn btn-link"
        >
          <FaArrowLeft /> Retornar aos cursos
        </button>
      </div>

      <div className="container mt-5 ">
        <h1 className="text-more-color fw-bold">O que você irá aprender:</h1>
      </div>

      {aulas.map((aula) => (
        <React.Fragment key={aula.id}>
          <div className="container mt-3 d-flex justify-content-between gap-5 flex-row">
            <div
              className="position-relative playVideo"
              style={{ width: 320, height: 180, cursor: "pointer" }}
              onClick={() => navigate(`/curso/google-gmail/aula/${aula.id}`)}
            >
              <FaCirclePlay className="position-absolute top-50 start-50 translate-middle text-light fs-1" />
            </div>

            <span className="fs-3 text-light mx-4">
              Aula {aula.id} - {aula.titulo}
              <br />
              <span className="fs-5">duração: {aula.duracao}</span>
            </span>
            <div className="d-flex flex-column align-items-end">
              <button
                className="btn moreBtn fs-5 mx-5 h-25"
                onClick={() => navigate(`/curso/google-gmail/aula/${aula.id}`)}
              >
                Assistir aula
              </button>
            </div>
          </div>

          <div className="container mt-3 mb-5 d-flex gap-5 flex-row">
            <progress value={0} className="w-100"></progress>
          </div>
        </React.Fragment>
      ))}
      <Footer />
    </>
  );
};

export default GoogleGmail;
