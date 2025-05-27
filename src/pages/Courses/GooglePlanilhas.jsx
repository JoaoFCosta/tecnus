import React, { useState } from "react";
import { useNavigate } from "react-router";
import { FaArrowLeft } from "react-icons/fa";
import { FaCirclePlay } from "react-icons/fa6";

import Planilhas from "../../assets/Planilhas.png";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import DoQuiz from "../../components/DoQuiz";

const GooglePlanilhas = () => {
  const navigate = useNavigate();

  const professor = "Rodrigo Cézar";

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
      duracao: "5 minutos",
    },
  ];

  const getTotalMinutos = (aulas) =>
    aulas.reduce((acc, aula) => {
      const match = aula.duracao.match(/\d+/);
      return acc + (match ? parseInt(match[0], 10) : 0);
    }, 0);

  const [aulasAssistidas, setAulasAssistidas] = useState([]);

  // Função para marcar aula como assistida
  const marcarComoAssistida = (id) => {
    if (!aulasAssistidas.includes(id)) {
      setAulasAssistidas([...aulasAssistidas, id]);
    }
  };

  return (
    <>
      <Header />
      <h1 className="text-center fw-bold text-header-color mb-5">
        Google Planilhas
      </h1>

      <div className="container d-flex justify-content-center gap-5">
        <div className="courseLogo badge d-flex flex-column align-items-center justify-content-center p-6 rounded-2">
          <img src={Planilhas} alt="Google Planilhas" />
          <span className="textLink text-light fs-5 mt-4 fw-bold">
            Google Planilhas
          </span>
        </div>
        <p className="textLink text-light col-6 fs-3 mt-3 text-start">
          O Google Planilhas, é uma plataforma em que você cria e edita
          planilhas no navegador da Web sem qualquer software especial. Várias
          pessoas podem trabalhar simultaneamente.
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
              className="position-relative playVideo d-flex align-items-center justify-content-center rounded-2"
              onClick={() => {
                marcarComoAssistida(aula.id);
                navigate(`/class/google-planilhas/aula/${aula.id}`);
              }}
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
                className="btn moreBtn textLink border-0 text-decoration-none text-black rounded-2 fs-5 mx-5 h-25"
                onClick={() => {
                  marcarComoAssistida(aula.id);
                  navigate(`/class/google-planilhas/aula/${aula.id}`);
                }}
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

      <div className="container d-flex justify-content-center">
        <DoQuiz
          aulasAssistidas={aulasAssistidas}
          aulas={aulas}
          onClick={() => navigate("/quizzes/google-planilhas")}
        />
      </div>
      <Footer />
    </>
  );
};

export default GooglePlanilhas;
