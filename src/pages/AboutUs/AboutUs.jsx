import React from "react";
import Principios from "../../assets/Group58.png";
import MemberCarousel from "../../components/MemberCarousel";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

const AboutUs = () => {
  return (
    <>
    <Header />
      <div className="container">
        <h1 className="text-header-color fw-bold text-center">
          Quem somos nós?
        </h1>

        <h1 className="fw-bold text-more-color mt-5">Nosso principios:</h1>

        <div className="d-flex justify-content-center user-select-none pointer-event-none">
          <img src={Principios} alt="" className="col-7 img-fluid" />
        </div>

        <div className="d-flex justify-content-center">
          <p
            className="text-light w-75 mt-5 mb-5 d-flex text-center fs-4 textLink"
          >
            Tecnus vem da junção das palavras: Tecnologia + us ( nós - em
            inglês), ou seja tecnus significa a tecnologia que nos une. Saturn
            vem do planeta Saturno, o qual seus anéis representam conectividade
            e união
          </p>
        </div>
        <MemberCarousel />

        <h1 className="fw-bold text-more-color mt-5">Trajetória do projeto:</h1>
        <div className="d-flex justify-content-center mb-5">
          <p
            className="text-light w-75 mt-4 mb-5 d-flex text-light fs-4 textLink"
          >
            O projeto Tecnus Saturn, criado em 2021 e reformulado em 2024, visa
            contornar uma realidade de desafios educacionais, que têm
            implicações diretas no desemprego, uma vez que a falta de uma
            educação de qualidade em escolas públicas e comunidades vulneráveis
            compromete a preparação e as oportunidades da população.
            <br />
            <br />
            Atuando por meio da promoção do letramento digital, o projeto busca
            conectar jovens estudantes e adultos ao mercado de trabalho de uma
            maneira inclusiva e capacitadora, democratizando o acesso à
            educação, superando as lacunas educacionais identificadas e
            proporcionando as habilidades necessárias para enfrentar os desafios
            tecnológicos contemporâneos.
            <br />
            <br />
            Sua frente de atuação é voltada para estudantes da rede de ensino
            pública ou de instituições vulneráveis, que carecem de aulas de
            tecnologia (essenciais para o desenvolvimento individual e
            profissional na sociedade moderna contemporânea atual).
            <br />
            <br />O projeto beneficia também as próprias instituições parceiras
            através de capacitações para os professores, além de realizar
            arrecadações de lixo eletrônico que, posteriormente, são trocadas
            por computadores para que sejam montadas salas de informática nas
            escolas/instituições parceiras do projeto.
          </p>
        </div>

        <div className="mb-5 d-flex justify-content-center">
          <img src="https://placehold.co/413x201" alt="" className="mt-2" />

          <img
            src="https://placehold.co/413x201"
            alt=""
            className="mx-3 mt-5"
          />

          <img
            src="https://placehold.co/413x201"
            alt=""
            className="mx-1 mt-1"
          />
        </div>

        <h1 className="fw-bold text-more-color mt-5">
          Importância da Tecnus Saturn:
        </h1>
        <div className="d-flex justify-content-center text-center mb-5">
          <p
            className="text-light w-75 mt-4 mb-5 d-flex text-light fs-4 textLink"
          >
            Atualmente, o Brasil enfrenta uma realidade em que muitos jovens se
            encontram desencorajados, sem oportunidades, e afastados tanto do
            estudo quanto do trabalho - os chamados “NEM NEM”. O fato de que 60%
            desses jovens em situação de vulnerabilidade fazem parte desse grupo
            é uma alarmante demonstração das desigualdades sociais e
            educacionais presentes em nossa nação. <br /> <br /> Dessa forma, o
            Tecnus busca democratizar a alfabetização tecnológica e transformar
            vidas! O projeto consiste no desenvolvimento e divulgação de uma
            plataforma de letramento digital inovadora no cenário educacional
            brasileiro. <br />
            <br />O Tecnus Saturn impacta e faz a diferença na vida de mais de
            390 alunos, atualmente.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
