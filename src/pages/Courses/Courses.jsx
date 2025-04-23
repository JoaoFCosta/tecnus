import styles from "./Courses.module.css";
import Caminho from "../../assets/CaminhoEntreOsCursos.png";
import Drive from "../../assets/Drive.png";
import Docs from "../../assets/Docx.png";
import Gmail from "../../assets/Gmail.png";
import Planilhas from "../../assets/Planilhas.png";
import Apresentacao from "../../assets/Apresentações.png";
import Classroom from "../../assets/Classroom.png";
import Seguranca from "../../assets/Segurança.png";
import Excel from "../../assets/Excel.png";
import DireitosConsumidor from "../../assets/Direitos do consumidor.png";
import BancoDados from "../../assets/Banco de Dados.png";

import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

const Courses = () => {
  return (
    <>
      <Header />
      <h1 className="text-header-color fw-bold fs-1 text-center">
        Cursos oferecidos
      </h1>

      <div className="container col-5 d-flex flex-column justify-content-center align-items-center text-white">
        <p className={`mb-5 ${styles.text}`}>
          Os cursos tem o objetivo de trazer o letramento digital e a
          capacitação profissional, bastando inscrever-se gratuitamente e
          assistir as aulas gravadas no tempo necessário. A maioria dos cursos
          tem um quiz para ajudar a fixação do conteúdo.
        </p>
      </div>

      <h1 className="text-more-color fw-bold text-center mt-5">
        Noções básicas
      </h1>

      <div className="d-flex flex-row justify-content-center align-items-center mt-5 mb-5 py-5">
        <div>
          <img src={Caminho} alt="" className="py-5" />
        </div>
      </div>

      <div className="container-fluid d-flex flex-row align-items-center position-absolute mt-5 ms-5 top-50">
        <div className={styles.ItemStyle}>
          <img src={Drive} alt="Google Drive" />
          <p className={styles.textStyle}>Google Drive</p>
        </div>
        <p className={`col-3 text-start ${styles.text}`}>
          O Google Drive é uma plataforma de armazenamento em nuvem,
          compartilhamento e também colaboração de arquivos, sendo documentos,
          planilhas e apresentações.
        </p>
      </div>

      <Footer />
    </>
  );
};

export default Courses;
