import { LoginPage } from "src/pages/LoginPage";
import { Navigate, Route, Routes } from "react-router-dom";
import { SignUpPage } from "./pages/SignUpPage";

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
  </Routes>
  );
};

export default Routing;