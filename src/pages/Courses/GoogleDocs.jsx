import React from "react";
import { useNavigate } from "react-router";
import { FaArrowLeft } from "react-icons/fa";
import { FaCirclePlay } from "react-icons/fa6";

import Docs from "../../assets/Docx.png";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

const GoogleDocs = () => {
  const navigate = useNavigate();

  const aulas = [
    {
      id: 1,
      titulo: "Tornar Público",
      duracao: "12 minutos",
    },
  ];
  return (
    <>
      <Header />

      <h1 className="text-center fw-bold text-header-color mb-5">
        Google Docs <br />
        (documentos)
      </h1>

      <div className="container d-flex justify-content-center gap-5">
        <div className="courseLogo">
          <img src={Docs} alt="Google Drive" />
          <span className="textLink text-light fs-2 fw-bold">Google Docs</span>
        </div>

        <p className="textLink text-light col-6 fs-3 mt-3">
          O Google Docs é voltado para a produção textual de diversos arquivos,
          como cartas, currículos, boletins informativos, brochuras, relatórios,
          planos de aula, etc.
          <br />
          <br />
          <strong>Duração:</strong> 12 minutos
          <br />
          <strong>Professor:</strong> Havaiana Alegítima
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
              onClick={() => navigate(`/curso/google-docs/aula/${aula.id}`)}
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
                onClick={() => navigate(`/curso/google-docs/aula/${aula.id}`)}
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

export default GoogleDocs;
