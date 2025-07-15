import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Cards from "./components/cards";
import StudentList from "./pages/StudentList";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Cards />

        <main className="main-content">
          <Routes>
            <Route path="/" element={<StudentList />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
