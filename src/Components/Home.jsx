import React from "react";
import { NavLink } from "react-router-dom";
import './Style/Home.css';
import SlideAdv from "./Body/SlideAdv";

const Home = ()=>{
    const productShow = (event) => {
        localStorage.setItem('product', event.target.value);
    };
    return(
        <div className="container-fluid p-0 position-relative z-1 bg-body-secondary w-100">
            <SlideAdv />
            <div className="px-0 w-100 z-1 position-relative myContainer">
                <div className="d-flex flex-row flex-wrap justify-content-evenly px-0 position-relative z-1 bg-transparent">
                    <div className="mt-3 mb-5 p-4 bg-white text-black position-relative product-ref">
                        <p className="fs-5 fw-semibold text-uppercase myCatagoryName" align="center">watches</p>
                        <img src="../Products/Watch/Watch02.jpg" className="w-100" alt="Smart Watch Product" />
                        <NavLink to="/Body/ProductShow" className="text-decoration-none d-block" align="right">
                            <button className="bg-transparent border-0 text-primary mt-3 fs-6 fw-semibold myCatagoryLink" value="Watch" onClick={productShow}>See&nbsp;more</button>
                        </NavLink>
                    </div>
                    <div className="mt-3 mb-5 p-4 bg-white text-black position-relative product-ref">
                        <p className="fs-5 fw-semibold text-uppercase myCatagoryName" align="center">sports</p>
                        <img src="Products/Sport/Sport01.jpg" className="w-100" alt="Watch Product" />
                        <NavLink to="/Body/ProductShow" className="text-decoration-none d-block" align="right">
                            <button className="bg-transparent border-0 text-primary mt-3 fs-6 fw-semibold myCatagoryLink" value="Sport" onClick={productShow}>See&nbsp;more</button>
                        </NavLink>
                    </div>
                    <div className="mt-3 mb-5 p-4 bg-white text-black position-relative product-ref">
                        <p className="fs-5 fw-semibold text-uppercase myCatagoryName" align="center">Computers</p>
                        <img src="Products/Computer/Computer01.jpg" className="w-100" alt="Gaming Laptop Product" />
                        <NavLink to="/Body/ProductShow" className="text-decoration-none d-block" align="right">
                            <button className="bg-transparent border-0 text-primary mt-3 fs-6 fw-semibold myCatagoryLink" value="Computer" onClick={productShow}>See&nbsp;more</button>
                        </NavLink>
                    </div>
                    <div className="mt-3 mb-5 p-4 bg-white text-black position-relative product-ref">
                        <p className="fs-5 fw-semibold text-uppercase myCatagoryName" align="center">Smart Phones</p>
                        <img src="Products/Mobile/Mobile01.jpg" className="w-100" alt="Mobile Product" />
                        <NavLink to="/Body/ProductShow" className="text-decoration-none d-block" align="right">
                            <button className="bg-transparent border-0 text-primary mt-3 fs-6 fw-semibold myCatagoryLink" value="Mobile" onClick={productShow}>See&nbsp;more</button>
                        </NavLink>
                    </div>
                    <div className="mt-3 mb-5 p-4 bg-white text-black position-relative product-ref">
                        <p className="fs-5 fw-semibold text-uppercase myCatagoryName" align="center">Gym</p>
                        <img src="Products/Gym/Gym01.jpg" className="w-100" alt="Laptop Product" />
                        <NavLink to="/Body/ProductShow" className="text-decoration-none d-block" align="right">
                            <button className="bg-transparent border-0 text-primary mt-3 fs-6 fw-semibold myCatagoryLink" value="Gym" onClick={productShow}>See&nbsp;more</button>
                        </NavLink>
                    </div>
                    <div className="mt-3 mb-5 p-4 bg-white text-black position-relative product-ref">
                        <p className="fs-5 fw-semibold text-uppercase myCatagoryName" align="center">Cloth Fashion</p>
                        <img src="Products/Cloth/Cloth01.jpg" className="w-100" alt="Cloth Product" />
                        <NavLink to="/Body/ProductShow" className="text-decoration-none d-block" align="right">
                            <button className="bg-transparent border-0 text-primary mt-3 fs-6 fw-semibold myCatagoryLink" value="Cloth" onClick={productShow}>See&nbsp;more</button>
                        </NavLink>
                    </div>
                    <div className="mt-3 mb-5 p-4 bg-white text-black position-relative product-ref">
                        <p className="fs-5 fw-semibold text-uppercase myCatagoryName" align="center">Bags & Luggage</p>
                        <img src="Products/Bag&Luggage/Bag&Luggage01.jpg" className="w-100" alt="Bag & Luggage Product" />
                        <NavLink to="/Body/ProductShow" className="text-decoration-none d-block" align="right">
                            <button className="bg-transparent border-0 text-primary mt-3 fs-6 fw-semibold myCatagoryLink" value="Bag&Luggage" onClick={productShow}>See&nbsp;more</button>
                        </NavLink>
                    </div>
                    <div className="mt-3 mb-5 p-4 bg-white text-black position-relative product-ref">
                        <p className="fs-5 fw-semibold text-uppercase myCatagoryName" align="center">Footware Fashion</p>
                        <img src="Products/Footware/Footware01.jpg" className="w-100" alt=" Footware Product" />
                        <NavLink to="/Body/ProductShow" className="text-decoration-none d-block" align="right">
                            <button className="bg-transparent border-0 text-primary mt-3 fs-6 fw-semibold myCatagoryLink" value="Footware" onClick={productShow}>See&nbsp;more</button>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;