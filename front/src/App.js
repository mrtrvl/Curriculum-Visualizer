import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Curriculums from './components/Curriculums';
import Modules from './components/Modules';
import Subjects from './components/Subjects';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        {/*               <Route path="/home" element={<Dashboard />} /> */}
        <Route path="/curriculums" element={<Curriculums />} />
        <Route path="/modules" element={<Modules />} />
        <Route path="/subjects" element={<Subjects />} />
      </Routes>
    </Router >
  );
};

export default App;
