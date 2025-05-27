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
  "banco-dados": {
    titulo: "Quiz Banco de Dados",
    perguntas: [
      {
        pergunta: "O que é um banco de dados?",
        alternativas: [
          "Armazenamento de dados",
          "Editor de texto",
          "Navegador",
        ],
        resposta: 0,
      },
      {
        pergunta: "Qual é a função de um SGBD?",
        alternativas: ["Gerenciar dados", "Enviar emails", "Editar vídeos"],
        resposta: 0,
      },
    ],
  },
  "direitos-consumidor": {
    titulo: "Quiz Direitos do Consumidor",
    perguntas: [
      {
        pergunta: "O que é o Código de Defesa do Consumidor?",
        alternativas: [
          "Lei de proteção ao consumidor",
          "Editor de texto",
          "Navegador",
        ],
        resposta: 0,
      },
      {
        pergunta: "Quais são os direitos básicos do consumidor?",
        alternativas: [
          "Segurança, informação e escolha",
          "Enviar emails",
          "Editar vídeos",
        ],
        resposta: 0,
      },
    ],
  },
  "excel-iniciante": {
    titulo: "Quiz Excel Iniciante",
    perguntas: [
      {
        pergunta: "O que é o Excel?",
        alternativas: ["Software de planilhas", "Editor de texto", "Navegador"],
        resposta: 0,
      },
      {
        pergunta: "Como se cria uma fórmula no Excel?",
        alternativas: [
          "Usando o sinal de igual",
          "Clicando com o botão direito",
          "Arrastando a célula",
        ],
        resposta: 0,
      },
    ],
  },
  "excel-intermediario": {
    titulo: "Quiz Excel Intermediário",
    perguntas: [
      {
        pergunta: "O que são tabelas dinâmicas no Excel?",
        alternativas: [
          "Ferramenta de resumo de dados",
          "Editor de texto",
          "Navegador",
        ],
        resposta: 0,
      },
      {
        pergunta: "Como se usa a função PROCV?",
        alternativas: [
          "Para buscar valores em uma tabela",
          "Para enviar emails",
          "Para editar vídeos",
        ],
        resposta: 0,
      },
    ],
  },
  "google-apresentacao": {
    titulo: "Quiz Google Apresentações",
    perguntas: [
      {
        pergunta: "O que é o Google Apresentações?",
        alternativas: [
          "Software de apresentação",
          "Editor de texto",
          "Navegador",
        ],
        resposta: 0,
      },
      {
        pergunta: "Como se adiciona um slide no Google Apresentações?",
        alternativas: [
          "Clicando no botão 'Novo Slide'",
          "Clicando com o botão direito",
          "Arrastando a célula",
        ],
        resposta: 0,
      },
    ],
  },
  "google-classroom": {
    titulo: "Quiz Google Classroom",
    perguntas: [
      {
        pergunta: "O que é o Google Classroom?",
        alternativas: [
          "Plataforma de gerenciamento de aulas",
          "Editor de texto",
          "Navegador",
        ],
        resposta: 0,
      },
      {
        pergunta: "Para que serve o Google Classroom?",
        alternativas: [
          "Organizar tarefas e aulas online",
          "Enviar emails",
          "Editar vídeos",
        ],
        resposta: 0,
      },
    ],
  },
  "google-docs": {
    titulo: "Quiz Google Docs",
    perguntas: [
      {
        pergunta: "O que é o Google Docs?",
        alternativas: [
          "Editor de documentos online",
          "Editor de imagens",
          "Navegador de internet",
        ],
        resposta: 0,
      },
      {
        pergunta: "Como compartilhar um documento no Google Docs?",
        alternativas: [
          "Clicando em 'Compartilhar' e adicionando emails",
          "Imprimindo o documento",
          "Salvando no computador",
        ],
        resposta: 0,
      },
    ],
  },
  "google-gmail": {
    titulo: "Quiz Google Gmail",
    perguntas: [
      {
        pergunta: "O que é o Google Gmail?",
        alternativas: [
          "Serviço de e-mail do Google",
          "Editor de texto",
          "Navegador de internet",
        ],
        resposta: 0,
      },
      {
        pergunta: "Como anexar um arquivo em um e-mail no Gmail?",
        alternativas: [
          "Clicando no ícone de clipe de papel",
          "Clicando em 'Responder'",
          "Clicando em 'Arquivar'",
        ],
        resposta: 0,
      },
    ],
  },
  "google-planilhas": {
    titulo: "Quiz Google Planilhas",
    perguntas: [
      {
        pergunta: "O que é o Google Planilhas?",
        alternativas: [
          "Editor de planilhas online",
          "Editor de imagens",
          "Navegador de internet",
        ],
        resposta: 0,
      },
      {
        pergunta: "Como inserir uma fórmula no Google Planilhas?",
        alternativas: [
          "Digitando '=' em uma célula",
          "Clicando com o botão direito",
          "Arrastando a célula",
        ],
        resposta: 0,
      },
    ],
  },
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
