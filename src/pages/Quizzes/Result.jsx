import React from "react";
import { useLocation, useNavigate, useParams } from "react-router";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const Result = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { quizId } = useParams();

  // Recebe score e total do state, ou usa valores padrão
  const { score = 0, total = 0 } = location.state || {};

  const getFeedback = () => {
    const percent = total > 0 ? (score / total) * 100 : 0;
    if (percent === 100) return "Parabéns! Você acertou tudo!";
    if (percent >= 70) return "Muito bom! Você foi muito bem!";
    if (percent >= 40) return "Você pode melhorar, continue estudando!";
    return "Tente novamente!";
  };

  const courseNames = {
    "google-drive": "Google Drive",
    "google-docs": "Google Docs",
    "gmail": "Gmail",
    "google-planilhas": "Google Planilhas",
    "google-apresentacao": "Google Apresentações",
    "google-classroom": "Google Classroom",
    "seguranca-tecnologia": "Segurança e Tecnologia",
    "excel-iniciante": "Excel Iniciante",
    "excel-intermediario": "Excel Intermediário",
    "direitos-consumidor": "Direitos do Consumidor",
    "tecnologia-banco-dados": "Tecnologia e Banco de Dados",
  };

  const courseName = courseNames[quizId] || "Curso Desconhecido";

  const handleCertificadoClick = () => {
    alert(
      `Parabéns! Você concluiu o curso ${courseName}. O certificado será enviado em seu email em até 24 horas. Por favor verifique a caixa de entrada do seu e-mail.\n\nNão esqueça de verificar o Spam.`
    );
  };

  const certificado = () => {
    const percent = total > 0 ? (score / total) * 100 : 0;
    if (percent >= 50) {
      return (
        <div className="mt-4 bg-gray-900 w-100 p-2 rounded-5">
          <span className="fs-3 textLink text-light">
            Você pode solicitar seu{" "}
            <button
              className="bg-transparent border-0 text-light text-decoration-underline"
              onClick={handleCertificadoClick}
            >
              Certificado
            </button>
          </span>
        </div>
      );
    }
    return null;
  };

  return (
    <>
      <Header />
      <div className="container mt-5 pt-5 rounded-5 px-4 pb-5 bg-gray-800 text-center">
        <h1 className="text-light text-center fw-bold mb-5 textLink">
          Resultado do Quiz
        </h1>
        <div className="mb-4">
          <span className="fs-1 textLink text-light">
            Pontuação: {score} de {total}
          </span>
        </div>
        <div className="mb-4">
          <span className="fs-3 textLink text-light">{getFeedback()}</span>
          <span>{certificado()}</span>
        </div>
      </div>
      <div className="container d-flex justify-content-center mb-5 mt-5">
        <button
          className="btn moreBtn textLink border-0 text-black rounded-2 fs-3 my-5 mx-2"
          onClick={() => navigate("/courses")}
        >
          Voltar aos cursos
        </button>
      </div>
      <Footer />
    </>
  );
};

export default Result;
