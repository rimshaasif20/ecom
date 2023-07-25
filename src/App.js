import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Pages/Login';
import Services from './Pages/Services';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Home from './Pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
   
  );
}

export default App;
