import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Projects from './Pages/Projects';
import ProjectsPessoal from './Pages/ProjectsPessoal';

const Navigation = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/project" element={<Projects />} />
                <Route path="/project-pessoal" element={<ProjectsPessoal />} />
            </Routes>
        </Router>
    );
}

export default Navigation;