import React from 'react'
import './Project.css';
import blog1 from './images/blog1.jpg';
import movie1 from './images/movie1.jpg';
import sih1 from  './images/sih1.jpg';
import port1 from './images/port1.png'

import Slider from "react-slick";
const Skill = () => {
  var settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const logo=[
    {
      id:"1",
      logo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYTXI4rf05Ox9qlD-5Tq1bD1tBWkoJ1MKnctOTFzfPUw&s"
    },
    {
      id:"2",
      logo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCF8m8E7jERfXaNkAokqVOPWc4BPMI2xNwtMgRHvCvQA&s"
    },
    {
      id:"3",
      logo:"https://static.vecteezy.com/system/resources/previews/027/127/463/original/javascript-logo-javascript-icon-transparent-free-png.png"
    },
    {
      id:"4",
      logo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGR4sCHkZfAPH1dcVRo_kuCVm_669uiS9YP7MvQV_pXw&s"
    },
    {
      id:"5",
      logo:"https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
    },
    {
      id:"6",
      logo:"https://miro.medium.com/v2/resize:fit:374/1*Yhe1R94CIotr2se7Wf6TQQ.png"
    },           
  ]
  return (
    <div>
    
    <div className="container about">
  <div className="row pro mt-2  ">
  <h3 className="mt-3"> <img width="50" height="50" src="https://img.icons8.com/ios/50/22C3E6/development-skill.png" alt="development-skill"/> Skills <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/22C3E6/horizontal-line.png" alt="horizontal-line"/></h3>
     <h4 className="my-3">Web Developement</h4>
 {logo &&
      logo.map((log) => (
        <div key={log.id} className="col logo">
          <div className="logo py-4">
            <img src={log.logo} alt="" width="100px" className="rounded" height="100px" />
          </div>
        </div>
      ))}
      <h3 className="">
          <img width="50" height="50" src="https://img.icons8.com/ios/50/22C3E6/project.png" alt="project"/> Projects 
          <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/22C3E6/horizontal-line.png" alt="horizontal-line"/>
        </h3>
        <div className="row">
          <div className="col d-flex justify-content-center">
            <h5>Slide To See More</h5>
          </div>
        </div>
<Slider {...settings}>
        <div className="col-12 col-md-6  cards d-flex justify-content-center">
          <div className="card">
            <header className="card__thumb">
              <a href="#"><img src={blog1} alt="blog1"/></a>
            </header>
            
            <div className="card__body">
                <h2 className="card__title">
                Candle Stick pattern web Application</h2>
                <p className="card__description">
                This web application provides a comprehensive reference for 35 types of candlestick patterns
                 commonly used in technical analysis for financial markets.. Built using cutting-edge web technologies such as HTML, CSS, and React, our intuitive interface allows users to seamlessly navigate through each pattern's description, formation criteria, interpretation, and trading strategies. With a responsive design optimized for various devices, including desktops, tablets, and smartphones.</p>
            </div>
            <footer className="card__footer">
            <div className="row">
            <div className="col-6 d-flex justify-content-start">         
               <img width="42" height="42" src="https://img.icons8.com/ios/50/22C3E6/github--v1.png" alt="github--v1"/>
</div>
            <div className="col-6 d-flex justify-content-end">        
                <button className="btn "> Website</button>
</div>
 </div>

            </footer>
          </div>
        </div>
        
        <div className="col-12 col-md-6 mt-1 d-flex justify-content-center">
          <div className="card">
            <header className="card__thumb">
              <a href="#"><img src={movie1} alt="movie1"/></a>
            </header>
            
            <div className="card__body">
                <h2 className="card__title">Movie  web Application Interface</h2>
                <p className="card__description">
                Experience the world of movies through our responsive web application interface. Powered by the Movie Database API and built with HTML, CSS, Bootstrap, and React.js, our user-friendly platform lets you explore a vast collection of films effortlessly, whether you're on your desktop, tablet, or smartphone.                </p>
            </div>
            <footer className="card__footer">
            <div className="row">
            <div className="col-6 d-flex justify-content-start">         
               <img width="42" height="42" src="https://img.icons8.com/ios/50/22C3E6/github--v1.png" alt="github--v1"/>
</div>
            <div className="col-6 d-flex justify-content-end">        
                <button className="btn "> Website</button>
</div>
 </div>
            </footer>
          </div>
        </div>
        <div className="col-12 col-md-6 mt-2 d-flex justify-content-center">
          <div className="card">
            <header className="card__thumb">
              <a href="#"><img src={sih1} alt="movie1"/></a>
            </header>
            
            <div className="card__body">
                <h2 className="card__title">Education Website</h2>
                <p className="card__description">
                Interactive learning through our responsive education website, developed for the Smart India Hackathon. Designed with HTML, CSS, and JavaScript, our platform offers a diverse array of educational resources, including quizzes, simple games, and study materials. Whether you're a student, educator, or lifelong learner, our user-friendly interface provides seamless access to enriching content tailored to your needs. Join us in revolutionizing education and empowering minds for a brighter tomorrow.          
            </p>  </div>
            <footer className="card__footer">
            <div className="row">
            <div className="col-6 d-flex justify-content-start">         
               <img width="42" height="42" src="https://img.icons8.com/ios/50/22C3E6/github--v1.png" alt="github--v1"/>
</div>
            <div className="col-6 d-flex justify-content-end">        
                <button className="btn "> Website</button>
</div>
 </div>
            </footer>
          </div>
        </div>
        <div className="col-12 col-md-6 mt-2 d-flex justify-content-center">
          <div className="card">
            <header className="card__thumb">
              <a href="#"><img src={port1} alt="movie1"/></a>
            </header>
            
            <div className="card__body">
                <h2 className="card__title">Portfolio website</h2>
                <p className="card__description">
                This website serves as a showcase of my skills, experiences, and projects in the field of Web Developement. Crafted with a blend of HTML, CSS, Bootstrap, and powered by ReactJS, this website offers an interactive and seamless user experience across various devices.
                </p>
            </div>
            <footer className="card__footer">
            <div className="row">
            <div className="col-6 d-flex justify-content-start">         
               <img width="42" height="42" src="https://img.icons8.com/ios/50/22C3E6/github--v1.png" alt="github--v1"/>
</div>
            <div className="col-6 d-flex justify-content-end">        
                <button className="btn "> Website</button>
</div>
 </div>
            </footer>
          </div>
        </div>
     </Slider> </div>
    </div>

 </div>

  )
}

export default Skill