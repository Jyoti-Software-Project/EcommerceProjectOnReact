import React from 'react';
import './Style-Home/SlideAdv.css';

const SlideAdv = () => {
    return (
        <div id="carouselExample" className="carousel slide">
            <div className="carousel-inner">
                <div className="carousel-item position-relative active">
                    <img className="d-block w-100 my-pic-bottom-blur" src="BG-Adv/BG-Adv01.jpg" width="auto" height="auto" alt="First Slide show" />
                    <span className="position-absolute fs-4 fw-bold text-capitalize lh-lg myText-1">Experience luxury and style with our exquisite range of premium fabrics</span>
                </div>
                <div className="carousel-item position-relative">
                    <img className="d-block w-100 my-pic-bottom-blur" src="BG-Adv/BG-Adv02.jpg" width="auto" height="auto" alt="Second Slide show" />
                    <span className="position-absolute fs-4 fw-bold text-capitalize lh-lg myText-2">Experience the ultimate in luxury and style with the Flip - the high-end mobile device that is sure to impress.</span>
                </div>
                <div className="carousel-item position-relative">
                    <img className="d-block w-100 my-pic-bottom-blur" src="BG-Adv/BG-Adv03.jpg" width="auto" height="auto" alt="Third Slide show" />
                    <span className="position-absolute fs-4 fw-bold text-capitalize lh-lg myText-3 text-white">Effortlessly enhance your daily productivity and connectivity with our top-of-the-line keyboard, mouse, and Bluetooth watch products.</span>
                </div>
                <div className="carousel-item position-relative">
                    <img className="d-block w-100 my-pic-bottom-blur" src="BG-Adv/BG-Adv04.jpg" width="auto" height="auto" alt="Fourth Slide show" />
                </div>
                <div className="carousel-item position-relative">
                    <img className="d-block w-100 my-pic-bottom-blur" src="BG-Adv/BG-Adv05.jpg" width="auto" height="auto" alt="Second Slide show" />
                    <span className="position-absolute fs-4 fw-bold text-capitalize lh-lg myText-4">Stay ahead of the curve with our diverse range of cutting-edge smartphones, designed to cater to every need and budget.</span>
                </div>
                <div className="carousel-item position-relative">
                    <img className="d-block w-100 my-pic-bottom-blur" src="BG-Adv/BG-Adv06.jpg" width="auto" height="auto" alt="Third Slide show" />
                </div>
                <div className="carousel-item position-relative">
                    <img className="d-block w-100 my-pic-bottom-blur" src="BG-Adv/BG-Adv07.jpg" width="auto" height="auto" alt="Fourth Slide show" />
                    <span className="position-absolute fs-4 fw-bold text-capitalize lh-lg myText-5 text-white">Make a statement with our trendy and versatile collection of boys' shirts, perfect for any occasion</span>
                </div>
                <div className="carousel-item position-relative">
                    <img className="d-block w-100 my-pic-bottom-blur" src="BG-Adv/BG-Adv08.jpg" width="auto" height="auto" alt="Fourth Slide show" />
                    <span className="position-absolute fs-4 fw-bold text-capitalize lh-lg myText-6">Boost your garden's growth and vitality with the nutrient-rich and organic properties of cow manure.</span>
                </div>
            </div>
            <button className="carousel-control-prev" style={{width: "100px", height: "300px"}} type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span className="carousel-control-prev-icon bg-transparent my-slide-btn" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" style={{width: "100px", height: "300px"}} type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span className="carousel-control-next-icon bg-transparent my-slide-btn" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default SlideAdv;
