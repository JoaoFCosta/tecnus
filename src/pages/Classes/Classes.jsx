import React from "react";
import { useParams, useLocation } from "react-router";

const courseNames = {
  "google-drive": "Google Drive",
  "google-docs": "Google Docs",
  "google-gmail": "Google Gmail",
  "google-planilhas": "Google Planilhas",
  "google-apresentacao": "Google Apresentação",
  "google-classroom": "Google Classroom",
  "seguranca": "Segurança",
  "excel-iniciante": "Excel Iniciante",
  "excel-intermediario": "Excel Intermediário",
  "direitos-consumidor": "Direitos do Consumidor",
  "banco-dados": "Banco de Dados",
};

export default function Classes() {
  const { id } = useParams();
  const location = useLocation();

  // Extrai o nome do curso da URL
  const match = location.pathname.match(/(?:curso|class)\/([^/]+)\/aula/);
  const courseKey = match ? match[1] : null;
  const courseTitle = courseNames[courseKey] || courseKey || "Curso desconhecido";

  return (
    <div>
      <h1>{courseTitle}</h1>
      <h2>Aula {id}</h2>
      {/* Aqui você pode renderizar o conteúdo da aula conforme necessário */}
      <p>Conteúdo da aula {id} do curso {courseTitle}.</p>
    </div>
  );
}