import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import Home from "./containers/Home";
import SignUp from "./containers/SignUp";

function App() {
  return (
    <div className="">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sign-up" element={<SignUp />} />
          </Routes>
        </Router>
      </LocalizationProvider>
    </div>
  );
}

export default App;
