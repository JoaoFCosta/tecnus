import React from "react";

const DoQuiz = ({ aulasAssistidas, aulas, onClick }) => (
  <button
    className="btn moreBtn textLink border-0 text-decoration-none text-black rounded-2 fs-5 mx-5 h-25 mb-5 py-2"
    onClick={onClick}
    disabled={aulasAssistidas.length !== aulas.length}
    title={
      aulasAssistidas.length !== aulas.length
        ? "Assista todas as aulas para liberar o quiz"
        : ""
    }
  >
    Fazer o quiz!
  </button>
);

export default DoQuiz;
