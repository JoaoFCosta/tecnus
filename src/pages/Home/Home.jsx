import React from "react";
import TecnusLogo from "../../assets/LOGOVETO.svg";
import Carousel from "../../components/Carousel";
import { Link, useNavigate } from "react-router";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

export const Home = () => {
  const navigate = useNavigate();

  const handleVerMais = () => {
    const authToken = localStorage.getItem("authToken"); 
    
    if (authToken) {
      navigate("/courses");
    } else {
      navigate("/login");
    }
  };

  return (
    <>
      <div>
        <Header />
        {/* Seção "Quem Somos Nós" */}
        <div className="container d-flex flex-column justify-content-center align-items-center mt-5 text-white">
          <div className="row align-items-center">
            {/* Texto */}
            <div className="col-md-6 px-5">
              <h1 className="text-header-color fw-bold fs-1 text-center">
                Quem somos nós?
              </h1>
              <p className="mt-4 fs-2 text-justify textLink">
                Projeto social da Enactus FACAMP, que promove o letramento
                digital e capacitação profissional para jovens e adultos da rede
                pública de ensino e de instituições vulneráveis através de
                cursos gratuitos
              </p>
            </div>

            {/* Imagem */}
            <div className="col-md-6 text-center">
              <img src={TecnusLogo} alt="Logo" className="w-25" />
            </div>
            <div className="container col-8">
              <Link to="/about">
                <button className="aboutBtn textLink text-black fw-bolder text-decoration-none border-0 rounded-2">Saiba mais</button>
              </Link>
            </div>
          </div>

          <h1 className="mt-5 mb-5 text-header-color fw-bold">
            Quais cursos oferecemos?
          </h1>
        </div>

        <div className="row d-flex flex-row">
          <div className="col-1"></div>
          <div className="col-3 d-flex flex-column text-light align-items-end justify-content-center">
            <h2 className="text-end textLink">
              Cursos básicos e profissionalizantes de tecnologia e
              empreendedorismo
            </h2>
            <button className="moreBtn textLink border-0 text-decoration-none text-black rounded-2" onClick={handleVerMais}>
              Ver mais detalhes
            </button>
          </div>
          <div className="col-8">
            <Carousel />
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Home;
