import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import StudentList from "./pages/StudentList";
import "./App.css";
import Gallery from "./components/Gallery";

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Gallery />
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
