import React from "react";
import { useParams } from "react-router";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Quiz from "../../components/Quiz";

const QuizPage = () => {
  const { quizId } = useParams();
  return (
    <>
    <Header />
      <Quiz quizId={quizId} />
      <Footer />
    </>
  );
};

export default QuizPage;
