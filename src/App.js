import React from 'react';
import About from './About';
import Home from './Home';
import Skill from './Skill';
import Header from './Header';
import Contact from './Contact';
import Footer from './Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <div> 
      <div className="conatiner-fluid">
        <div className="row mt-2"><Header /></div>
      </div>
        

        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-lg-3">
            <Home />
             
            </div>
            <div className="col-12 col-lg-9">
              <Routes>
                <Route path="/" element={<About />} />
                <Route path="/skill" element={<Skill />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </div>
          </div>
        </div>

     
      </div>
    </BrowserRouter>
  );
};

export default App;
