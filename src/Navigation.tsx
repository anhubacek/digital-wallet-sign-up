import { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

import Home from "./containers/Home";
import SignUp from "./containers/SignUp";
import Main from "./containers/Main";
import NotFound from "./containers/NotFound";

const Navigation = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("authToken");

  useEffect(() => {
    if (!token) {
      navigate("/");
    } else {
      navigate("/home");
    }
  }, [token]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/home" element={<Main />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default Navigation;
