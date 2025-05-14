import Caminho from "../../assets/CaminhoEntreOsCursos.png";
import Caminho2 from "../../assets/Caminho2.png"
import Drive from "../../assets/Drive.png";
import Docs from "../../assets/Docx.png";
import Gmail from "../../assets/Gmail.png";
import Planilhas from "../../assets/Planilhas.png";
import Apresentacao from "../../assets/Apresentações.png";
import Classroom from "../../assets/Classroom.png";
import Seguranca from "../../assets/Segurança.png";
import Excel from "../../assets/Excel.png";
import DireitosConsumidor from "../../assets/Direitos do consumidor.png";
import BancoDados from "../../assets/Banco de dados.png"

import Header from "../../components/Header";
import Footer from "../../components/Footer";

const Courses = () => {
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
      <div className="timeline-line"><img src={Caminho} alt="" className="position-absolute justify-content-center start-50 mt-5"/></div>

      <div className="row timeline-item mb-5 mx-5">
        <div className="col-md-5">
            <div className="card-body">
            <div className="row">
              <div className="col">
              <div className="courseItem d-flex flex-column mb-3">
                  <img src={Drive} alt="Google Drive" width="200" />
                <span className="textLink text-light ms-2 fs-3">Google Drive</span>
              </div>
              </div>
              <div className="col">
              <p className="service-description textLink text-light fs-4">
                O Google Drive é uma plataforma de armazenamento em nuvem, compartilhamento e também colaboração de arquivos, sendo documentos, planilhas e apresentações.
              </p>
              </div>
            </div>
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <span className="badge rounded-2 bg-secondary mx-2 me-5 px-4 py-2 fs-5 textLink">51min</span>
                  <span className="badge rounded-2 bg-secondary px-4 ms-3 py-2 fs-5 textLink">5 aulas</span>
                </div>
                <button className="btn moreBtn">Ver curso</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row timeline-item mb-5 mx-5">
        <div class="col-md-5"></div>
        <div class="col-md-2 position-relative">
          <div class="timeline-dot"></div>
        </div>
        <div class="col-md-5">
            <div class="card-body">
              <div className="row">

              <div className="col">
              <div class="courseItem d-flex flex-column mb-3">
                <div class="service-icon me-3 text-center">
                  <img src={Docs} alt="Google Docs" width="200" />
                <span class="textLink text-light fs-3">Google Docs</span>
                </div>
              </div>
              </div>

              <div className="col">
              <p class="service-description text-start textLink text-light fs-4 mt-4">
                O Google Docs é voltado para a produção textual de diversos arquivos, como cartas, currículos, boletins informativos, brochuras, relatórios, planos de aula, etc.
              </p>
              </div>
              </div>
              <div class="d-flex justify-content-between align-items-center">
                <div>
                  <span class="badge rounded-2 bg-secondary mx-3 me-5 px-4 py-2 fs-5 textLink">12min</span>
                  <span class="badge rounded-2 bg-secondary px-4 ms-4 py-2 fs-5 textLink">1 aula</span>
                </div>
                <button class="btn moreBtn">Ver curso</button>
              </div>
            </div>
        </div>
      </div>

      <div className="row timeline-item mb-5 mx-5">
        <div className="col-md-5">
            <div className="card-body">
            <div className="row">
              <div className="col">
              <div className="courseItem d-flex flex-column mb-3">
                  <img src={Gmail} alt="Google Gmail" width="200" />
                <span className="textLink text-light ms-2 fs-3">Gmail</span>
              </div>
              </div>
              <div className="col">
              <p className="service-description textLink text-light fs-4 mt-5">
                O gmail é um serviço que permite, ao usuário, enviar e receber e-mails através do navegador, sem a necessidade de instalar um programa no computador.
              </p>
              </div>
            </div>
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <span className="badge rounded-2 bg-secondary mx-2 me-5 px-4 py-2 fs-5 textLink">19min</span>
                  <span className="badge rounded-2 bg-secondary px-4 ms-3 py-2 fs-5 textLink">2 aulas</span>
                </div>
                <button className="btn moreBtn">Ver curso</button>
              </div>
            </div>
          </div>
        </div>

      <div class="row timeline-item mb-5 mx-5">
        <div class="col-md-5"></div>
        <div class="col-md-2 position-relative">
          <div class="timeline-dot"></div>
        </div>
        <div class="col-md-5">
            <div class="card-body">
              <div className="row">

              <div className="col">
              <div class="courseItem d-flex flex-column mb-3">
                <div class="service-icon text-center">
                  <img src={Planilhas} alt="Google Docs" width="200" />
                <span class="textLink text-light fs-3">Google <br /> Planilhas</span>
                </div>
              </div>
              </div>

              <div className="col">
              <p class="service-description text-start textLink text-light fs-4 mt-4">
                O Google Planilhas, é uma plataforma em que você cria e edita planilhas no navegador da Web sem qualquer software especial. Várias pessoas podem trabalhar simultaneamente.
              </p>
              </div>
              </div>
              <div class="d-flex justify-content-between align-items-center">
                <div>
                  <span class="badge rounded-2 bg-secondary mx-3 me-4 px-4 py-2 fs-5 textLink">25min</span>
                  <span class="badge rounded-2 bg-secondary px-4 ms-4 py-2 fs-5 textLink">3 aulas</span>
                </div>
                <button class="btn moreBtn">Ver curso</button>
              </div>
            </div>
        </div>
      </div>

       <div className="row timeline-item mb-5 mx-5">
        <div className="col-md-5">
            <div className="card-body">
            <div className="row">
              <div className="col">
              <div className="courseItem d-flex flex-column mb-3">
                  <img src={Apresentacao} alt="Google Apresentação" width="200" />
                <span className="textLink text-light ms-2 fs-3 text-center">Google <br /> apresentações</span>
              </div>
              </div>
              <div className="col">
              <p className="service-description textLink text-light fs-4 mt-2">
                O google apresentações permite criar e formatar slides em nuvem, onde todas as mudanças que você fizer serão salvas. Você pode editar um modelo pronto ou criar um novo.
              </p>
              </div>
            </div>
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <span className="badge rounded-2 bg-secondary mx-2 me-5 px-4 py-2 fs-5 textLink">29min</span>
                  <span className="badge rounded-2 bg-secondary px-4 ms-3 py-2 fs-5 textLink">2 aulas</span>
                </div>
                <button className="btn moreBtn">Ver curso</button>
              </div>
            </div>
          </div>
        </div>

       <div class="row timeline-item mb-5 mx-5">
        <div class="col-md-5"></div>
        <div class="col-md-2 position-relative">
          <div class="timeline-dot"></div>
        </div>
        <div class="col-md-5">
            <div class="card-body">
              <div className="row">

              <div className="col">
              <div class="courseItem d-flex flex-column mb-3">
                <div class="service-icon text-center">
                  <img src={Classroom} alt="Google Docs" width="200" />
                <span class="textLink text-light fs-3">Google <br /> Classroom</span>
                </div>
              </div>
              </div>

              <div className="col">
              <p class="service-description text-start textLink text-light fs-4 mt-4">
                O google classroom é uma ferramenta on-line gratuita que auxilia professores, alunos e escolas com um espaço para a realização de aulas virtuais de maneira organizada.
              </p>
              </div>
              </div>
              <div class="d-flex justify-content-between align-items-center">
                <div>
                  <span class="badge rounded-2 bg-secondary mx-3 me-4 px-4 py-2 fs-5 textLink">22min</span>
                  <span class="badge rounded-2 bg-secondary px-4 ms-4 py-2 fs-5 textLink">8 aulas</span>
                </div>
                <button class="btn moreBtn">Ver curso</button>
              </div>
            </div>
        </div>
      </div>

       <div className="row timeline-item mb-5 mx-5">
        <div className="col-md-5">
            <div className="card-body">
            <div className="row">
              <div className="col">
              <div className="courseItem d-flex flex-column mb-3">
                  <img src={Seguranca} alt="Segurança e tecnologia" width="150" />
                <span className="textLink text-light ms-2 fs-3 text-center">Segurança e <br /> Tecnologia</span>
              </div>
              </div>
              <div className="col">
              <p className="service-description textLink text-light fs-4 mt-2">
               A sua segurança é algo essencial no meio tecnológico, para manter suas informações pessoais em sigilo.
              </p>
              </div>
            </div>
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <span class="badge rounded-2 bg-secondary mx-3 me-5 px-4 py-2 fs-5 textLink">7min</span>
                  <span class="badge rounded-2 bg-secondary px-4 ms-4 py-2 fs-5 textLink">1 aula</span>
                </div>
                <button className="btn moreBtn">Ver curso</button>
              </div>
            </div>
          </div>
        </div>

      <h1 className="text-more-color fw-bold text-center my-5">
        Noções profissionalizantes
      </h1>

      <div className="timeline-container">
        <div className="timeline-line"><img src={Caminho2} alt="" className="position-absolute justify-content-center start-50 mt-5"/></div>
      </div>
      
      <div class="row timeline-item mb-5 mx-5">
        <div class="col-md-5"></div>
        <div class="col-md-2 position-relative">
          <div class="timeline-dot"></div>
        </div>
        <div class="col-md-5">
            <div class="card-body">
              <div className="row">

              <div className="col">
              <div class="courseItem d-flex flex-column mb-3">
                <div class="service-icon text-center">
                  <img src={Excel} alt="Excel" width="210" />
                <span class="textLink text-light fs-3">Excel <br /> Iniciante</span>
                </div>
              </div>
              </div>

              <div className="col">
              <p class="service-description text-start textLink text-light fs-4 mt-4">
                O Excel é um software de planilhas eletrônicas, que utiliza tabelas para realizar cálculos ou apresentar dados. Com ele, é possível organizar orçamentos, por exemplo.
              </p>
              </div>
              </div>
              <div class="d-flex justify-content-between align-items-center">
                <div>
                  <span class="badge rounded-2 bg-secondary mx-3 me-4 px-4 py-2 fs-5 textLink">20min</span>
                  <span class="badge rounded-2 bg-secondary px-4 ms-4 py-2 fs-5 textLink">3 aulas</span>
                </div>
                <button class="btn moreBtn">Ver curso</button>
              </div>
            </div>
        </div>
      </div>


       <div className="row timeline-item mb-5 mx-5">
        <div className="col-md-5">
            <div className="card-body">
            <div className="row">
              <div className="col">
              <div className="courseItem d-flex flex-column mb-3">
                  <img src={Excel} alt="Excel" width="210" />
                <span className="textLink text-light ms-2 fs-3 text-center">Excel <br /> Intermediário</span>
              </div>
              </div>
              <div className="col">
              <p className="service-description textLink text-light fs-4 mt-2">
               O Excel é um software de planilhas eletrônicas, que utiliza tabelas para realizar cálculos ou apresentar dados. Com ele, é possível organizar orçamentos, por exemplo.
              </p>
              </div>
            </div>
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <span class="badge rounded-2 bg-secondary mx-3 me-5 px-4 py-2 fs-5 textLink">70min</span>
                  <span class="badge rounded-2 bg-secondary px-4 ms-4 py-2 fs-5 textLink">1 aula</span>
                </div>
                <button className="btn moreBtn">Ver curso</button>
              </div>
            </div>
          </div>
        </div>

        <div class="row timeline-item mb-5 mx-5">
        <div class="col-md-5"></div>
        <div class="col-md-2 position-relative">
          <div class="timeline-dot"></div>
        </div>
        <div class="col-md-5">
            <div class="card-body">
              <div className="row">

              <div className="col">
              <div class="courseItem d-flex flex-column mb-3">
                <div class="service-icon text-center">
                  <img src={DireitosConsumidor} alt="Direitos do Consumidor" width="180" />
                <span class="textLink text-light fs-3">Direitos do<br /> Consumidor</span>
                </div>
              </div>
              </div>

              <div className="col">
              <p class="service-description text-start textLink text-light fs-4 mt-4">
                Aborda sobre relações de consumo, travadas entre fornecedores (quem disponibiliza produtos ou serviços ao mercado) e consumidores (quem consome).
              </p>
              </div>
              </div>
              <div class="d-flex justify-content-between align-items-center">
                <div>
                  <span class="badge rounded-2 bg-secondary mx-3 me-4 px-4 py-2 fs-5 textLink">41min</span>
                  <span class="badge rounded-2 bg-secondary px-4 ms-4 py-2 fs-5 textLink">1 aula</span>
                </div>
                <button class="btn moreBtn">Ver curso</button>
              </div>
            </div>
        </div>
      </div>
      
       <div className="row timeline-item mb-5 mx-5">
        <div className="col-md-5">
            <div className="card-body">
            <div className="row">
              <div className="col">
              <div className="courseItem d-flex flex-column mb-3">
                  <img src={BancoDados} alt="Banco de dados" width="200" />
                <span className="textLink text-light ms-2 fs-3 text-center">Tecnologia e <br /> Banco de Dados</span>
              </div>
              </div>
              <div className="col">
              <p className="service-description textLink text-light fs-4 mt-2">
               O Excel é um software de planilhas eletrônicas, que utiliza tabelas para realizar cálculos ou apresentar dados. Com ele, é possível organizar orçamentos, por exemplo.
              </p>
              </div>
            </div>
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <span class="badge rounded-2 bg-secondary mx-3 me-5 px-4 py-2 fs-5 textLink">25min</span>
                  <span class="badge rounded-2 bg-secondary px-4 ms-4 py-2 fs-5 textLink">1 aula</span>
                </div>
                <button className="btn moreBtn">Ver curso</button>
              </div>
            </div>
          </div>
        </div>


      <Footer />
    </>
  );
};

export default Courses;
