import React, { useState } from "react";
import { useNavigate } from "react-router";

// Exemplo de quizzes, substitua pelo seu banco de quizzes real
const quizzes = {
  "google-drive": {
    titulo: "Quiz Google Drive",
    perguntas: [
      {
        pergunta: "O que é o Google Drive?",
        alternativas: ["Nuvem", "Editor de texto", "Navegador"],
        resposta: 0,
      },
      {
        pergunta: "Para que serve o Google Drive?",
        alternativas: ["Armazenar arquivos", "Enviar emails", "Editar vídeos"],
        resposta: 0,
      },
    ],
  },
  // Adicione outros quizzes aqui
};

const Quiz = ({ quizId }) => {
  const quiz = quizzes[quizId];
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();

  if (!quiz) {
    return <div className="text-light">Quiz não encontrado.</div>;
  }

  const perguntaAtual = quiz.perguntas[current];

  const handleNext = () => {
    if (current < quiz.perguntas.length - 1) {
      setCurrent(current + 1);
    }
  };

  const handleResult = () => {
    // Você pode passar dados via state se quiser mostrar o resultado do usuário
    navigate(`/quizzes/${quizId}/resultado`);
  };

  return (
    <div>
      <h2 className="text-light text-center text-header-color fs-1 fw-bold mb-5">
        {quiz.titulo}
      </h2>
      <div className="questionBadge bg-gray-800 container mt-5 pt-5 rounded-5 px-4 pb-5 badge d-flex flex-column align-items-center justify-content-center">
        <div className="text-light mb-3 text-center">
          <strong className="fs-1 textLink">{perguntaAtual.pergunta}</strong>
        </div>
      </div>
      <div className="container mt-5">
        <h2 className="text-light text-more-color fs-1 fw-bold mb-5">
          Espaço para resposta:
        </h2>
      </div>
      <div className="container mt-5">
        <div className="mt-5 col-8 d-flex">
          <input
            type="text"
            className="answerBadge form-control bg-gray-800 text-light textLink text-start rounded-5 p-3"
            placeholder="Escreva sua resposta aqui!"
          />
        </div>
      </div>
      <div className="container d-flex mt-4 justify-content-between">
        <button
          onClick={() => setCurrent(current - 1)}
          disabled={current === 0}
          className="btn btn-secondary moreBtn text-black"
        >
          Pergunta Anterior
        </button>
        {current < quiz.perguntas.length - 1 ? (
          <button
            onClick={handleNext}
            className="btn btn-primary moreBtn text-black"
          >
            Próxima Pergunta
          </button>
        ) : (
          <button
            className="btn btn-success moreBtn text-black"
            onClick={handleResult}
          >
            Ver Resultado
          </button>
        )}
      </div>
    </div>
  );
};

export default Quiz;
