import React from "react";
import { useNavigate } from "react-router";
import { FaArrowLeft } from "react-icons/fa";
import { FaCirclePlay } from "react-icons/fa6";

import Drive from "../../assets/Drive.png";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const GoogleDrive = () => {
  const navigate = useNavigate();

  const professor = "Claudinho Buchecha";

  const aulas = [
    {
      id: 1,
      titulo: "Tornar Público",
      duracao: "10 minutos",
    },
    {
      id: 2,
      titulo: "Acesso Offline",
      duracao: "10 minutos",
    },
    {
      id: 3,
      titulo: "Gmail e Google Drive",
      duracao: "11 minutos",
    },
    {
      id: 4,
      titulo: "Tradutor",
      duracao: "10 minutos",
    },
    {
      id: 5,
      titulo: "Atalhos",
      duracao: "10 minutos",
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

      {/* Renderizar aulas dinamicamente */}
      {aulas.map((aula) => (
        <React.Fragment key={aula.id}>
          <div className="container mt-3 d-flex justify-content-between gap-5 flex-row">
            <div
              className="position-relative playVideo"
              style={{ width: 320, height: 180, cursor: "pointer" }}
              onClick={() => navigate(`/curso/google-drive/aula/${aula.id}`)}
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
                onClick={() => navigate(`/curso/google-drive/aula/${aula.id}`)}
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

export default GoogleDrive;
