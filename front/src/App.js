import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import NavBar from './components/NavBar';
import Curriculums from './components/Curriculums';
import Modules from './components/Modules';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        {/*               <Route path="/home" element={<Dashboard />} /> */}
        <Route path="/curriculums" element={<Curriculums />} />
        <Route path="/modules" element={<Modules />} />
        {/* <Route path="/curriculums/:id" element={<ProtectedRoute element={<SubjectPage />} />} /> */}
        {/*               <Route path="/modules" element={<ProtectedRoute element={<Subjects />} />} />
              <Route path="/subjects/:id/add-assignment" element={<ProtectedRoute element={<AddAssignmentPage />} />} /> */}
      </Routes>
    </Router >
  );
};

export default App;
