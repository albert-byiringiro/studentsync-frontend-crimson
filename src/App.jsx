import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Cards from "./components/cards";
import StudentList from "./pages/StudentList";
import StudentTable from "./components/StudentTable";
import AddStudent from "./components/AddStudent";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <AddStudent />

        <main className="main-content">
          <Routes>
            <Route path="/" element={<StudentList />} />
            <Route path="/table" element={<StudentTable />} />
            <Route path="/add" element={<AddStudent />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
