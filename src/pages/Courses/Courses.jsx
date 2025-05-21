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

const Courses = () => {
  const cursos = [
    {
      nome: "Google Drive",
      tipo: "normal",
      imagem: Drive,
      aulas: [
        { id: 1, titulo: "Tornar Público", duracao: "10 minutos" },
        { id: 2, titulo: "Acesso Offline", duracao: "10 minutos" },
        { id: 3, titulo: "Gmail e Google Drive", duracao: "11 minutos" },
        { id: 4, titulo: "Tradutor", duracao: "10 minutos" },
        { id: 5, titulo: "Atalhos", duracao: "10 minutos" },
      ],
      link: "/google-drive",
      descricao:
        "O Google Drive é uma plataforma de armazenamento em nuvem, compartilhamento e também colaboração de arquivos, sendo documentos, planilhas e apresentações.",
    },
    {
      nome: "Google Docs",
      tipo: "normal",
      imagem: Docs,
      aulas: [{ id: 1, titulo: "Tornar Público", duracao: "12 minutos" }],
      link: "/google-docs",
      descricao:
        "O Google Docs é voltado para a produção textual de diversos arquivos, como cartas, currículos, boletins informativos, brochuras, relatórios, planos de aula, etc.",
    },
    {
      nome: "Gmail",
      tipo: "normal",
      imagem: Gmail,
      aulas: [
        { id: 1, titulo: "Tornar Público", duracao: "10 minutos" },
        { id: 2, titulo: "Acesso Offline", duracao: "9 minutos" },
      ],
      link: "/google-gmail",
      descricao:
        "O gmail é um serviço que permite, ao usuário, enviar e receber e-mails através do navegador, sem a necessidade de instalar um programa no computador.",
    },
    {
      nome: "Google Planilhas",
      tipo: "normal",
      imagem: Planilhas,
      aulas: [
        { id: 1, titulo: "Tornar Público", duracao: "10 minutos" },
        { id: 2, titulo: "Acesso Offline", duracao: "10 minutos" },
        { id: 3, titulo: "Gmail e Google Drive", duracao: "5 minutos" },
      ],
      link: "/google-planilhas",
      descricao:
        "O Google Planilhas, é uma plataforma em que você cria e edita planilhas no navegador da Web sem qualquer software especial. Várias pessoas podem trabalhar simultaneamente.",
    },
    {
      nome: "Google Apresentações",
      tipo: "normal",
      imagem: Apresentacao,
      aulas: [
        { id: 1, titulo: "Tornar Público", duracao: "10 minutos" },
        { id: 2, titulo: "Acesso Offline", duracao: "9 minutos" },
      ],
      link: "/google-apresentacao",
      descricao:
        "O google apresentações permite criar e formatar slides em nuvem, onde todas as mudanças que você fizer serão salvas. Você pode editar um modelo pronto ou criar um novo.",
    },
    {
      nome: "Google Classroom",
      tipo: "normal",
      imagem: Classroom,
      aulas: [
        { id: 1, titulo: "Tornar Público", duracao: "4 minutos" },
        { id: 2, titulo: "Acesso Offline", duracao: "2 minutos" },
        { id: 3, titulo: "Gmail e Google Drive", duracao: "4 minutos" },
        { id: 4, titulo: "Tradutor", duracao: "4 minutos" },
        { id: 5, titulo: "Atalhos", duracao: "2 minutos" },
        { id: 6, titulo: "Acesso Offline", duracao: "2 minutos" },
        { id: 7, titulo: "Acesso Offline", duracao: "2 minutos" },
        { id: 8, titulo: "Acesso Offline", duracao: "2 minutos" },
      ],
      link: "/google-classroom",
      descricao:
        "O google classroom é uma ferramenta on-line gratuita que auxilia professores, alunos e escolas com um espaço para a realização de aulas virtuais de maneira organizada.",
    },
    {
      nome: "Segurança e Tecnologia",
      tipo: "normal",
      imagem: Seguranca,
      aulas: [{ id: 1, titulo: "Tornar Público", duracao: "7 minutos" }],
      link: "/seguranca",
      descricao:
        "A sua segurança é algo essencial no meio tecnológico, para manter suas informações pessoais em sigilo.",
    },
  ];
  const profissionais = [
    {
      nome: "Excel Iniciante",
      tipo: "profissional",
      imagem: Excel,
      aulas: [
        { id: 1, titulo: "Tornar Público", duracao: "10 minutos" },
        { id: 2, titulo: "Acesso Offline", duracao: "5 minutos" },
        { id: 3, titulo: "Tradutor", duracao: "5 minutos" },
      ],
      link: "/excel-iniciante",
      descricao:
        "O Excel é um software de planilhas eletrônicas, que utiliza tabelas para realizar cálculos ou apresentar dados. Com ele, é possível organizar orçamentos, por exemplo.",
    },
    {
      nome: "Excel Intermediário",
      tipo: "profissional",
      imagem: Excel,
      aulas: [
        { id: 1, titulo: "Tornar Público", duracao: "20 minutos" },
        { id: 2, titulo: "Acesso Offline", duracao: "20 minutos" },
        { id: 3, titulo: "Tradutor", duracao: "10 minutos" },
        { id: 4, titulo: "Atalhos", duracao: "10 minutos" },
        { id: 5, titulo: "Acesso Offline", duracao: "10 minutos" },
      ],
      link: "/excel-intermediario",
      descricao:
        "O Excel é um software de planilhas eletrônicas, que utiliza tabelas para realizar cálculos ou apresentar dados. Com ele, é possível organizar orçamentos, por exemplo.",
    },
    {
      nome: "Direitos do Consumidor",
      tipo: "profissional",
      imagem: DireitosConsumidor,
      aulas: [{ id: 1, titulo: "Tornar Público", duracao: "41 minutos" }],
      link: "/direitos-consumidor",
      descricao:
        "Aborda sobre relações de consumo, travadas entre fornecedores (quem disponibiliza produtos ou serviços ao mercado) e consumidores (quem consome).",
    },
    {
      nome: "Banco de Dados",
      tipo: "profissional",
      imagem: BancoDados,
      aulas: [
        {
          id: 1,
          titulo: "Tornar Público",
          duracao: "25 minutos",
        },
      ],
      link: "/banco-de-dados",
      descricao:
        "Entenda essa relação no meio digital. O Banco de Dados retorna resultados consistentes e íntegros, assegurando que as políticas de segurança dos dados sejam cumpridas.",
    },
  ];
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
                    <div className="courseItem d-flex flex-column mb-3">
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
                    <button className="btn moreBtn">Ver curso</button>
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
                    <div className="courseItem d-flex flex-column mb-3">
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
                    <button className="btn moreBtn">Ver curso</button>
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
