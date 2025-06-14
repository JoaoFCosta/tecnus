import { Link } from "react-router";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useEffect, useState } from "react";

const Courses = () => {
  const getTotalMinutos = (aulas) => {
    if (!aulas || !Array.isArray(aulas) || aulas.length === 0) return 0;
    return aulas.reduce(
      (total, aula) => total + (aula.duracaoEmMinutos || 0),
      0
    );
  };

  const [cursos, setCursos] = useState([]); // Estado para armazenar TODOS os cursos da API
  const [isLoading, setIsLoading] = useState(true); // Estado para controlar o carregamento
  const [error, setError] = useState(null); // Estado para erros na requisição

  // URL do seu endpoint de cursos
  const API_CURSOS_URL = "http://tecnusapi.somee.com/api/CursosModel";

  // --- Efeito para carregar os cursos ao montar o componente ---
  useEffect(() => {
    const fetchCursos = async () => {
      try {
        const response = await fetch(API_CURSOS_URL);
        if (!response.ok) {
          const errorText = await response.text();
          throw new Error(
            `HTTP error! status: ${response.status} - ${errorText}`
          );
        }
        const data = await response.json();
        setCursos(data); // Armazena os cursos no estado
      } catch (err) {
        console.error("Erro ao carregar cursos:", err); // Log para depuração
        setError(err.message); // Armazena a mensagem de erro
      } finally {
        setIsLoading(false); // Finaliza o carregamento
      }
    };

    fetchCursos();
  }, []); // O array vazio assegura que o efeito roda apenas uma vez

  // --- Filtragem dos cursos com base na propriedade 'Tipo' da sua API ---
  // Assumindo que 'Tipo' retorna valores como "Basico" e "Profissional"
  const cursosNormais = cursos.filter((curso) => curso.tipo === "Basico");
  const cursosProfissionais = cursos.filter(
    (curso) => curso.tipo === "Profissional"
  );

  // --- Renderização Condicional ---
  if (isLoading) {
    return (
      <div className="text-light text-center mt-5">Carregando cursos...</div>
    );
  }

  if (error) {
    return (
      <div className="text-danger text-center mt-5">
        Erro ao carregar os cursos: {error}
      </div>
    );
  }

  return (
    <>
      <Header />
      <h1 className="text-header-color fw-bold fs-1 text-center">
        Cursos oferecidos
      </h1>

      <div className="container col-5 d-flex flex-column justify-content-center align-items-center text-white">
        <p className="mb-5 fs-4 text-center textLink">
          Os cursos têm o objetivo de trazer o letramento digital e a
          capacitação profissional, bastando inscrever-se gratuitamente e
          assistir as aulas gravadas no tempo necessário. A maioria dos cursos
          tem um quiz para ajudar a fixação do conteúdo.
        </p>
      </div>

      {/* --- Seção "Noções básicas" --- */}
      <h1 className="text-more-color fw-bold text-center mt-5">
        Noções básicas
      </h1>

      <div className="timeline-container">
        <div className="timeline-line"></div>
        {cursosNormais.length > 0 ? (
          cursosNormais.map((curso) => (
            <div
              className={`row timeline-item mb-5 mx-5 ${
                // Usa o índice original para alternar a classe de layout
                cursos.indexOf(curso) % 2 === 0 ? "" : "flex-row-reverse"
              }`}
              key={curso.id_Curso} // Usa id_Curso como chave única
            >
              <div className="col-md-5">
                <div className="card-body">
                  <div className="row">
                    <div className="col">
                      <div className="courseItem d-flex flex-column align-items-center justify-content-center rounded-2 p-2 mb-3">
                        {/* Propriedade 'imagem' da API */}
                        <img
                          src={curso.imagem}
                          alt={curso.nome_Curso}
                          width="150"
                        />
                        <span className="textLink text-center text-light ms-2 fs-3">
                          {/* Propriedade 'nome_Curso' da API */}
                          {curso.nome_Curso}
                        </span>
                      </div>
                    </div>
                    <div className="col">
                      <p className="service-description textLink text-light fs-4">
                        {/* Propriedade 'descricao_Curso' da API */}
                        {curso.descricao_Curso}
                      </p>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <span className="badge rounded-2 bg-secondary mx-2 me-5 px-4 py-2 fs-5 textLink">
                        {/* Usa 'duracao_Curso' da API */}
                        {getTotalMinutos(curso.duracao_Curso)}min
                      </span>
                      <span className="badge rounded-2 bg-secondary px-4 ms-3 py-2 fs-5 textLink"></span>
                    </div>
                    <Link to={`/courses/${curso.nome_Curso}`}>
                      <button className="btn moreBtn textLink border-0 text-decoration-none text-black rounded-2">
                        Ver curso
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-light text-center mt-3">
            Nenhum curso básico disponível.
          </p>
        )}
      </div>

      {/* --- Seção "Noções Profissionalizantes" --- */}
      <h1 className="text-more-color fw-bold text-center mt-5 mb-5">
        Noções Profissionalizantes
      </h1>

      <div className="timeline-line"></div>
      {cursosProfissionais.length > 0 ? (
        cursosProfissionais.map((curso) => (
          <div
            className={`row timeline-item mb-5 mx-5 ${
              // Usa o índice original para alternar a classe de layout
              cursos.indexOf(curso) % 2 === 0 ? "flex-row-reverse" : ""
            }`}
            key={curso.id_Curso} // Usa id_Curso como chave única
          >
            <div className="col-md-5">
              <div className="card-body">
                <div className="row">
                  <div className="col">
                    <div className="courseItem d-flex flex-column align-items-center justify-content-center rounded-2 p-2 mb-3">
                      {/* Propriedade 'imagem' da API */}
                      <img
                        src={curso.Imagem}
                        alt={curso.nome_Curso}
                        width="150"
                      />
                      <span className="textLink text-center text-light ms-2 fs-3">
                        {/* Propriedade 'nome_Curso' da API */}
                        {curso.nome_Curso}
                      </span>
                    </div>
                  </div>
                  <div className="col">
                    <p className="service-description textLink text-light fs-4">
                      {/* Propriedade 'descricao_Curso' da API */}
                      {curso.descricao_Curso}
                    </p>
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <span className="badge rounded-2 bg-secondary mx-2 me-5 px-4 py-2 fs-5 textLink">
                      {/* Usa 'duracao_Curso' da API */}
                      {getTotalMinutos(curso.duracao_Curso)}min
                    </span>
                    <span className="badge rounded-2 bg-secondary px-4 ms-3 py-2 fs-5 textLink"></span>
                  </div>
                  <Link to={`/courses/${curso.nome_Curso}`}>
                    <button className="btn moreBtn textLink border-0 text-decoration-none text-black rounded-2">
                      Ver curso
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p className="text-light text-center mt-3">
          Nenhum curso profissionalizante disponível.
        </p>
      )}
      <Footer />
    </>
  );
};
export default Courses;
