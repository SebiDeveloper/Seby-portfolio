import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import Sidebar from './components/sidebar/Sidebar';
import SectionTitle from './components/sectionTitle/SectionTitle';
import Navbar from './components/navbar/Navbar';
import HamburgerMenu from './components/hamburger/HamburgerMenu';
import Footer from './components/footer/Footer';

// Pages
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Portfolio from './pages/portfolio/Portfolio';
import ProjectDetails from './pages/projectDetails/ProjectDetails';
import Resume from './pages/resume/Resume';

import './App.css'
import "./components/content/Content.scss";
import "./assets/styles/_fonts.scss";

const App: React.FC = () => {
  return (
    <Router>
      <div className="app">
        <Sidebar/>
        <div className="content">
          <div className="content__header">
            <SectionTitle/>
            <Navbar/>
            <HamburgerMenu/>
          </div>
          <div className="content__main">
            <Routes>
              <Route path='/' element={<About />}/>
              <Route path='/about' element={<About />}/>
              <Route path='/resume' element={<Resume />}/>
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/project/:slug" element={<ProjectDetails />}/>
              <Route path='/contact' element={<Contact />}/>
            </Routes>
            <Footer />
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;