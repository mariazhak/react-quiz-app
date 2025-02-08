import { LoginPage } from "src/pages/LoginPage";
import { Navigate, Route, Routes } from "react-router-dom";
import { SignUpPage } from "./pages/SignUpPage";
import { QuizzesPage } from "./pages/QuizzesPage";
import { CreateQuizPage } from "./pages/CreateQuizPage";
import { CreateQuestionsPage } from "./pages/CreateQuestionPage";

const Routing = () => {
  return (
    <Routes>
    <Route path="/" element={<Navigate to={`/Login`} replace />} />
    <Route
      path={`/login`}
      element={<LoginPage />}
    />
    <Route
      path={`/signup`}
      element={<SignUpPage />}
    />
    <Route
        path={`/quizzes`}
        element={<QuizzesPage />}
      />
      <Route
        path={`/create-quiz`}
        element={<CreateQuizPage />}
      />
      <Route
        path={`/create-quiz/questions`}
        element={<CreateQuestionsPage />}
      />
  </Routes>
  );
};

export default Routing;