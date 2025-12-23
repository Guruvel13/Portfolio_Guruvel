import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Work from './pages/Work';
import ProjectDetail from './pages/ProjectDetail';
import Contact from './pages/Contact';

import About from './pages/About';

// Wrapper to allow useLocation inside App (if App was wrapped by Router, but here we wrap content)
const AnimatedRoutes = () => {
  const location = useLocation();
  
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <AnimatePresence mode="wait">
         <Routes location={location} key={location.pathname}>
           <Route path="/" element={<Home />} />
           <Route path="/work" element={<Work />} />
           <Route path="/work/:id" element={<ProjectDetail />} />
           <Route path="/contact" element={<Contact />} />
           <Route path="/about" element={<About />} />
           <Route path="/services" element={<div className="pt-32 text-center">Services Page Coming Soon</div>} />
         </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <Router>
      <div className="bg-background min-h-screen text-white selection:bg-primary selection:text-white flex flex-col">
        <Header />
        <AnimatedRoutes />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
