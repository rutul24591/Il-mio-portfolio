import React, { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import './App.scss';
import Footer from './components/Footer';
import Header from './components/Header';
import Loader from './components/Preload';
import { Route, Routes, Navigate } from 'react-router-dom';
import { ScrollToTop } from './helper';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import WorkEx from './components/WorkEx';
import Projects from './components/Projects';

const App = () => {
  const [loaded, setLoaded] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Loader loader={loaded} />
      <div className="App" id={loaded ? "no-scroll" : "scroll"}>
        <Header />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/workex" element={<WorkEx/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
        <Footer />
      </div>   
    </>
  );
}

export default App;
