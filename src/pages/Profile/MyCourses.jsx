import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { cursos, profissionais } from "../../data/Courses";

const todosCursos = [...cursos, ...profissionais];

const MyCourses = () => {
  const [progresso, setProgresso] = useState({});

  useEffect(() => {
    const progressoSalvo =
      JSON.parse(localStorage.getItem("progressoCursos")) || {};
    setProgresso(progressoSalvo);
  }, []);

  const getPorcentagem = (cursoNome, totalAulas) => {
    const assistidas = progresso[cursoNome]?.length || 0;
    return Math.round((assistidas / totalAulas) * 100);
  };

  // Função para converter "10 minutos" em número
  const minutosFromString = (str) => {
    const match = str.match(/\d+/);
    return match ? parseInt(match[0], 10) : 0;
  };

  // Calcula o tempo restante em minutos
  const getTempoRestante = (curso) => {
    const assistidas = progresso[curso.nome] || [];
    const aulasRestantes = curso.aulas.filter(
      (aula) => !assistidas.includes(aula.id)
    );
    const minutosRestantes = aulasRestantes.reduce(
      (acc, aula) => acc + minutosFromString(aula.duracao),
      0
    );
    return minutosRestantes;
  };

  // Calcula o tempo assistido em minutos
  const getTempoAssistido = (curso) => {
    const assistidas = progresso[curso.nome] || [];
    const aulasAssistidas = curso.aulas.filter((aula) =>
      assistidas.includes(aula.id)
    );
    const minutosAssistidos = aulasAssistidas.reduce(
      (acc, aula) => acc + minutosFromString(aula.duracao),
      0
    );
    return minutosAssistidos;
  };

  return (
    <>
      <Header />
      <div className="container mt-5 pt-5 rounded-5 px-4 pb-5 bg-gray-800">
        <h1 className="text-light text-center fw-bold mb-5 textLink">
          Meus cursos
        </h1>
        <div className="row">
          {todosCursos.map((curso) => {
            const porcentagem = getPorcentagem(curso.nome, curso.aulas.length);
            const concluido = porcentagem === 100;
            const tempo = concluido
              ? `Tempo assistido: ${getTempoAssistido(curso)}min`
              : `Tempo restante: ${getTempoRestante(curso)}min`;

            return (
              <div
                key={curso.nome}
                className="col-12 col-md-6 mb-4 border-start border-5"
              >
                <div className="d-flex justify-content-between align-items-center p-4 rounded-4 h-100">
                  {/* Barra circular de progresso */}
                  <div className="text-center me-3">
                    <div className="circular-progress textLink">
                      {porcentagem}%
                    </div>
                  </div>

                  {/* Informações do curso */}
                  <div className="flex-grow-1">
                    <h5 className="text-white textLink text-start fw-bold mb-2">
                      {curso.nome}
                    </h5>
                    <p className="text-light mb-1 textLink text-start">
                      {tempo}
                    </p>
                  </div>

                  {/* Botão "Ver Curso" */}
                  <a
                    href={curso.link}
                    className="btn aboutBtn border-0 text-black textLink fw-bolder px-3 py-2"
                  >
                    Ver Curso
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MyCourses;
