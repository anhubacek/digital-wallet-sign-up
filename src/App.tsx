import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./containers/Home";
import SignUp from "./containers/SignUp";

function App() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
