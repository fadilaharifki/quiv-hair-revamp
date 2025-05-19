import QuizPageModules from "@/modules/quiz";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Quiz",
};
const QuizPage = () => {
  return <QuizPageModules />;
};

export default QuizPage;
