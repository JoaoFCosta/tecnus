import Caminho from "../../assets/CaminhoEntreOsCursos.png";
import Caminho2 from "../../assets/Caminho2.png";
import Drive from "../../assets/Drive.png";
import Docs from "../../assets/Docx.png";
import Gmail from "../../assets/Gmail.png";
import Planilhas from "../../assets/Planilhas.png";
import Apresentacao from "../../assets/Apresentações.png";
import Classroom from "../../assets/Classroom.png";
import Seguranca from "../../assets/Segurança.png";
import Excel from "../../assets/Excel.png";
import DireitosConsumidor from "../../assets/Direitos do consumidor.png";
import BancoDados from "../../assets/Banco de dados.png";

import { Link } from "react-router";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
 
import { cursos, profissionais } from "../../data/Courses";

const Courses = () => {

  // Função para somar o tempo total em minutos
  const getTotalMinutos = (aulas) =>
    aulas.reduce((acc, aula) => {
      const match = aula.duracao.match(/\d+/);
      return acc + (match ? parseInt(match[0], 10) : 0);
    }, 0);

  const cursosNormais = cursos.filter((curso) => curso.tipo === "normal");
  const cursosProfissionais = profissionais.filter(
    (curso) => curso.tipo === "profissional"
  );
  return (
    <>
      <Header />
      <h1 className="text-header-color fw-bold fs-1 text-center">
        Cursos oferecidos
      </h1>

      <div className="container col-5 d-flex flex-column justify-content-center align-items-center text-white">
        <p className="mb-5 fs-4 text-center textLink">
          Os cursos tem o objetivo de trazer o letramento digital e a
          capacitação profissional, bastando inscrever-se gratuitamente e
          assistir as aulas gravadas no tempo necessário. A maioria dos cursos
          tem um quiz para ajudar a fixação do conteúdo.
        </p>
      </div>

      <h1 className="text-more-color fw-bold text-center mt-5">
        Noções básicas
      </h1>

      <div className="timeline-container">
        <div className="timeline-line">
          <img
            src={Caminho}
            alt=""
            className="position-absolute justify-content-center start-50 mt-5"
          />
        </div>
        {cursosNormais.map((curso, index) => (
          <div
            className={`row timeline-item mb-5 mx-5 ${
              index % 2 === 0 ? "" : "flex-row-reverse"
            }`}
            key={index}
          >
            <div className="col-md-5">
              <div className="card-body">
                <div className="row">
                  <div className="col">
                    <div className="courseItem d-flex flex-column align-items-center justify-content-center rounded-2 p-2 mb-3">
                      <img src={curso.imagem} alt={curso.nome} width="150" />
                      <span className="textLink text-center text-light ms-2 fs-3">
                        {curso.nome}
                      </span>
                    </div>
                  </div>
                  <div className="col">
                    <p className="service-description textLink text-light fs-4">
                      {curso.descricao}
                    </p>
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <span className="badge rounded-2 bg-secondary mx-2 me-5 px-4 py-2 fs-5 textLink">
                      {getTotalMinutos(curso.aulas)}min
                    </span>
                    <span className="badge rounded-2 bg-secondary px-4 ms-3 py-2 fs-5 textLink">
                      {curso.aulas.length} aulas
                    </span>
                  </div>
                  <Link to={curso.link}>
                    <button className="btn moreBtn textLink border-0 text-decoration-none text-black rounded-2">Ver curso</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
        <h1 className="text-more-color fw-bold text-center mt-5 mb-5">
          Noções Profissionalizantes
        </h1>

        <div className="timeline-line">
          <img
            src={Caminho2}
            alt=""
            className="position-absolute justify-content-center start-50 mt-5"
          />
        </div>
        {cursosProfissionais.map((curso, index) => (
          <div
            className={`row timeline-item mb-5 mx-5  ${
              index % 2 === 0 ? "flex-row-reverse" : ""
            }`}
            key={index}
          >
            <div className="col-md-5">
              <div className="card-body">
                <div className="row">
                  <div className="col">
                    <div className="courseItem d-flex flex-column align-items-center justify-content-center rounded-2 p-2 mb-3">
                      <img src={curso.imagem} alt={curso.nome} width="150" />
                      <span className="textLink text-center text-light ms-2 fs-3">
                        {curso.nome}
                      </span>
                    </div>
                  </div>
                  <div className="col">
                    <p className="service-description textLink text-light fs-4">
                      {curso.descricao}
                    </p>
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <span className="badge rounded-2 bg-secondary mx-2 me-5 px-4 py-2 fs-5 textLink">
                      {getTotalMinutos(curso.aulas)}min
                    </span>
                    <span className="badge rounded-2 bg-secondary px-4 ms-3 py-2 fs-5 textLink">
                      {curso.aulas.length} aulas
                    </span>
                  </div>
                  <Link to={curso.link}>
                    <button className="btn moreBtn textLink border-0 text-decoration-none text-black rounded-2">Ver curso</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};
export default Courses;
