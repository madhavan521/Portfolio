import React from 'react' 
import {Link} from 'react-router-dom'

const About = () => {
  return (
    <div>
        <div className="container-fluid ">
          <div className="row mt-2  pro ">
            <div className="col mb-3 ">
            <h3 className="mt-3" ><img width="48" height="48" src="https://img.icons8.com/pulsar-line/48/22C3E6/info-squared.png" alt="info-squared"/> About <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/22C3E6/horizontal-line.png" alt="horizontal-line"/> </h3>
                <p className="fadeIn">
                I'm Madhavan C, a web developer skilled in front-end and back-end technologies.
                 With a degree in Computer and Communication Engineering, I'm passionate about crafting 
                 user-friendly websites. I thrive in collaborative environments, stay updated with industry trends, and continuously improve my skills. I believe in the positive impact of technology and aim to
                 exceed expectations with every project. Let's collaborate and bring your ideas to life!</p>            </div>
            <div className="row d-flex justify-content-center mb-2">
            <div className="col-auto mb-2 ">
             <Link to="/contact"> <button className=" btn-info contactbutton "> <h5>Contact</h5></button></Link></div>
            </div>


              <hr />
              <div className="row mt-2">        
                      <h3>  <img width="50" height="50" src="https://img.icons8.com/ios/50/22C3E6/education.png" alt="education"/> Education <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/22C3E6/horizontal-line.png" alt="horizontal-line"/></h3>          
                <div className="col-12 col-md-6 col-lg-6 mt-3 d-flex justify-content-center">
                <div className="personal ps-3 mt-2 pt-2 pb-2">
                  <span>
                   <strong>SSLC-2019</strong> 
                   <h5>Bharathidassan Matric hr sec school, <br />
                   kanchipuram</h5>
                   <strong>Percentage:92.00 </strong>
                  </span>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-6 d-flex mt-3 mb-4 justify-content-center">
                <div className="personal ps-3 mt-2 pt-2 pb-2 ">
                  <span>
                   <strong>HSC-2021</strong> 
                   <h5>Bharathidassan Matric hr sec school, <br />
                   kanchipuram</h5>
                   <strong>Percentage:92.83 </strong>
                  </span>
                </div>
              </div></div>
              <div className="row d-flex justify-content-center mb-4">
                <div className="col-12 col-md-6 col-lg-6 ">
                <div className="personal ps-3 mt-3 pt-2 ">
                  <span>
                   <strong>B.E Computer and Communication Enginnering (2021-2025)</strong> 
                   <h5>Rajalakshmi Institute Of Technology, <br />
                   Chennai</h5>
                   <strong>CGPA:8.34 </strong>
                  </span>
              </div></div>
              </div>
  </div>      </div>
    </div>
  )
}

export default About