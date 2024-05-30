import React from 'react';
import './Style-Footer/AboutUs.css';

const AboutUs = () => {
    return (
        <div className="container-fluid myAboutContainer">
            <div className="container w-100 py-3">
                <div className="container myImageContainer">
                    <img src="/DevPic/BG-AboutUs01.jpg" alt="Background About Us Page" className="w-100" />
                </div>
                <div className="container rounded-5" style={{background: "linear-gradient(to right, #243f5A, #416480, #5D819B, #2C4A66, #3D627F)"}}>
                    <legend className="my-5 text-center fs-1 fw-bold text-dark text-uppercase myDeveloperHeading">Developers</legend>
                    <div className="px-5 pb-5 d-flex flex-row justify-content-evenly flex-nowrap">
                        <div className="" align="center">
                            <div className="rounded-pill devPic" style={{backgroundImage: `url("/DevPic/Jyoti.jpg")`}}></div>
                            <label className="d-block mt-3 fs-5 fw-semibold text-center text-primary bg-warning text-capitalize">&emsp;jyoti&nbsp;prakash&nbsp;mal&emsp;</label>
                        </div>
                        <div className="" align="center">
                            <div className="rounded-pill devPic" style={{backgroundImage: `url("/DevPic/Sayan.jpg")`}}></div>
                            <label className="d-block mt-3 fs-5 fw-semibold text-center text-primary bg-warning text-capitalize">&emsp;sayan&nbsp;dey&emsp;</label>
                        </div>
                        <div className="" align="center">
                            <div className="rounded-pill devPic" style={{backgroundImage: `url("/DevPic/Sangram.jpg")`}}></div>
                            <label className="d-block mt-3 fs-5 fw-semibold text-center text-primary bg-warning text-capitalize">&emsp;sangram&nbsp;deshmukh&emsp;</label>
                        </div>
                        <div className="" align="center">
                            <div className="rounded-pill devPic" style={{backgroundImage: `url("/DevPic/Bikita.jpg")`}}></div>
                            <label className="d-block mt-3 fs-5 fw-semibold text-center text-primary bg-warning text-capitalize">&emsp;bikita&nbsp;hait&emsp;</label>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
  )
}

export default AboutUs;
