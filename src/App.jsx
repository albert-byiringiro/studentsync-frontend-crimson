import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Home />
        <main className="main-content">
          <Routes>
            <Route path="/" />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
