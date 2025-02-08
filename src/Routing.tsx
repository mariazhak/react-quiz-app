import { LoginPage } from "src/pages/LoginPage";
import { Navigate, Route, Routes } from "react-router-dom";
import { SignUpPage } from "./pages/SignUpPage";
import { QuizzesPage } from "./pages/QuizzesPage";

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
  </Routes>
  );
};

export default Routing;