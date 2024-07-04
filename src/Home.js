import React from 'react'
import profile from "./images/profileimg.png"

const Home = () => {
  return (
    <div>
        <div className="container-fluid mt-2 ">
          <div className="row pro mt-2">
            <div className="col d-flex justify-content-center">
              <div className="mt-3">
              <div className="mx-4">             
              <img src={profile} alt="" className="image-fluid imgani " style={{ filter: 'grayscale(100%)',borderRadius:"15%" }} width="210px" height="180px" />

                   <h3 className="mt-2 ms-3">Madhvana C</h3>

              </div>
                   <div className="web mt-2 ">
                     <h5 className="justify-content-center d-flex mt-2">Web Developer</h5>
                   </div>
                   <div className="social d-inline-block mt-2 px-4 anileft">
                   <a href="https://www.facebook.com/madhavan.c.522"> <img width="48" height="48" src="https://img.icons8.com/fluency/48/facebook.png" alt="facebook"/></a>
                   <a href="https://www.instagram.com/c.madhavan_/"> <img width="48" height="48" src="https://img.icons8.com/fluency/48/instagram-new.png" alt="instagram-new"/></a>
                   <a href="https://twitter.com/cmadhavan521"> <img width="48" height="48" src="https://img.icons8.com/color/96/twitterx--v1.png" alt="twitterx--v1"/>                 </a>
                   <a href=""> <img width="48" height="48" src="https://img.icons8.com/color/48/linkedin.png" alt="linkedin"/></a>

                   </div>
                   <div className="personal mt-4 aniup">
                   <div className="d-inline-block ">
    <div className="row mt-2 ">
        <div className="col-auto ms-2">
        <img width="48" height="48" src="https://img.icons8.com/pulsar-line/48/22C3E6/apple-phone.png" alt="apple-phone"/>               </div>
        <div className="col">
            <span>
                <p>
                    <label htmlFor="">phone </label>
                    <h5>6374675659</h5>
                </p>
            </span>
        </div>
    </div>
</div>
 <div className="d-inline  ">
    <div className="row  ">
        <div className="col-auto ms-2">
        <img width="48" height="48" src="https://img.icons8.com/pulsar-line/48/22C3E6/mail.png" alt="mail"/>  
              </div>
        <div className="col">
            <span>
                <p>
                    <label htmlFor="">E-mail: </label>
                    <h5>cmadhavanofficial</h5>
                </p>
            </span>
        </div>
    </div>
</div>
<div className="d-inline ">
    <div className="row ">
        <div className="col-auto ms-2">
        <img width="48" height="48" src="https://img.icons8.com/pulsar-line/48/22C3E6/location.png" alt="location"/>              </div>
        <div className="col">
            <span>
                <p>
                    <label htmlFor="">Location </label>
                    <h5>Kanchipuram</h5>
                </p>
            </span>
        </div>
    </div>
</div>
<div className="d-inline ">
    <div className="row ">
        <div className="col-auto ms-2">
        <img width="48" height="48" src="https://img.icons8.com/pulsar-line/48/22C3E6/date-span.png" alt="date-span"/>            </div>
        <div className="col">
            <span>
                <p>
                    <label htmlFor="">Date of Birth </label>
<h5>27-08-2003</h5>                </p>
            </span>
        </div>
    </div>
</div>

                  
        
 </div>
<div className="mt-2 d-flex justify-content-center mb-4">
  <button className="btn btn-info">
    <h5>Download Cv <img width="24" height="24" src="https://img.icons8.com/material-two-tone/24/download--v1.png" alt="download--v1"/></h5>
  </button>
</div>
   </div></div>
 </div>   </div>
 </div>
  
  )
}

export default Home