import React from "react";
import { cursos, profissionais } from "../data/Courses";

const AdminCourses = () => {
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
              <img src={curso.imagem} alt={curso.nome} />
              <span className="textLink fs-4">{curso.nome}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminCourses;
