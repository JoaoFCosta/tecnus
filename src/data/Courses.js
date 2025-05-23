import Drive from "../assets/Drive.png";
import Docs from "../assets/Docx.png";
import Gmail from "../assets/Gmail.png";
import Planilhas from "../assets/Planilhas.png";
import Apresentacao from "../assets/Apresentações.png";
import Classroom from "../assets/Classroom.png";
import Seguranca from "../assets/Segurança.png";
import Excel from "../assets/Excel.png";
import DireitosConsumidor from "../assets/Direitos do consumidor.png";
import BancoDados from "../assets/Banco de dados.png";

export const cursos = [
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

export const profissionais = [
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
    nome: "Tecnologia e Banco de Dados",
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