import React, { useState } from "react";
import { useNavigate } from "react-router";

import { quizzes } from "../data/Quiz";


const Quiz = ({ quizId }) => {
  const quiz = quizzes[quizId];
  const [current, setCurrent] = useState(0);
  const [resposta, setResposta] = useState("");
  const [score, setScore] = useState(0);
  const navigate = useNavigate();

  if (!quiz) {
    return <div className="text-light">Quiz não encontrado.</div>;
  }

  const perguntaAtual = quiz.perguntas[current];

  const handleNext = () => {
    // Verifica se a resposta está correta
    const respostaCorreta = perguntaAtual.alternativas[perguntaAtual.resposta].toLowerCase();
    if (resposta.trim().toLowerCase() === respostaCorreta) {
      setScore(score + 1);
    }
    setResposta("");
    setCurrent(current + 1);
  };

  const handleResult = () => {
    // Verifica se a resposta da última pergunta está correta
    const respostaCorreta = perguntaAtual.alternativas[perguntaAtual.resposta].toLowerCase();
    let finalScore = score;
    if (resposta.trim().toLowerCase() === respostaCorreta) {
      finalScore += 1;
    }
    navigate(`/quizzes/${quizId}/resultado`, {
      state: { score: finalScore, total: quiz.perguntas.length },
    });
  };

  return (
    <div>
      <h2 className="text-light text-center text-header-color fs-1 fw-bold mb-5">
        {quiz.titulo}
      </h2>
      <div className="questionBadge bg-gray-800 container mt-5 pt-5 rounded-5 px-4 pb-5 badge d-flex flex-column align-items-center justify-content-center">
        <div className="text-light mb-3 text-center">
          <strong className="fs-1 textLink">{perguntaAtual.pergunta}</strong>
          <span className="fs-3 textLink">
            {perguntaAtual.alternativas &&
              perguntaAtual.alternativas.map((alt, idx) => (
                <span key={idx} className="d-block">
                  {`${idx + 1}. ${alt}`}
                </span>
              ))}
          </span>
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
            value={resposta}
            onChange={(e) => setResposta(e.target.value)}
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
