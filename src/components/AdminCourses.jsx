import React, { useState } from "react";
import {
  cursos as cursosData,
  profissionais as profissionaisData,
} from "../data/Courses";

const AdminCourses = () => {
  const [cursos, setCursos] = useState(cursosData);
  const [profissionais] = useState(profissionaisData);
  const [novoCurso, setNovoCurso] = useState({
    nome: "",
    imagem: "",
    link: "",
    descricao: "",
  });

  const handleChange = (e) => {
    setNovoCurso({ ...novoCurso, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!novoCurso.imagem || !novoCurso.link || !novoCurso.descricao) return;
    setCursos([...cursos, novoCurso]);
    setNovoCurso({ nome: "", imagem: "", link: "", descricao: "" });
  };

  return (
    <div className="container">
      <h1 className="textLink text-start fw-bold">Edite os cursos</h1>

      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-5 g-4 mt-3">
        {cursos.map((curso, idx) => (
          <div className="col" key={idx}>
            <div
              className="editCourse d-flex flex-column align-items-center justify-content-center rounded-4 p-2"
              role="button"
              onClick={() => (location.href = `/admin/cursos${curso.link}`)}
            >
              <img src={curso.imagem} alt={curso.nome} className="h-50" />
              <span className="textLink fs-4">{curso.nome}</span>
            </div>
          </div>
        ))}

        {profissionais.map((profissional, idx) => (
          <div className="col" key={`prof-${idx}`}>
            <div
              className="editCourse d-flex flex-column align-items-center justify-content-center rounded-4 p-2"
              role="button"
              onClick={() =>
                (location.href = `/admin/cursos${profissional.link}`)
              }
            >
              <img
                src={profissional.imagem}
                alt={profissional.nome}
                className="h-50"
              />
              <span className="textLink fs-4">{profissional.nome}</span>
            </div>
          </div>
        ))}
        <div className="col">
          <div
            className="editCourse d-flex flex-column align-items-center justify-content-center"
            role="button"
            onClick={() => console.log("Abrir modal ou redirecionar")}
          >
            <span className="text-white textLink">
              Adicionar novo
              <br />
              Curso
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminCourses;
