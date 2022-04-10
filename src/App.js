import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/landing-page/LandingPage";
import LoginPage from "./components/login-page/LoginPage";
import MainPage from "./components/main-page/MainPage";

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" exact element={<LandingPage />} />
          <Route path="/login" exact element={<LoginPage />} />
          <Route path="/main" exact element={<MainPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
