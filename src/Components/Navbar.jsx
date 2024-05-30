import $ from 'jquery';
import './Style/Navbar.css';
import React, { useEffect, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Navbar = ()=>{
    const myLocation=()=>{
        if (navigator.geolocation){
            navigator.geolocation.getCurrentPosition(function(position) {
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;
                const url = "https://api.opencagedata.com/geocode/v1/json?q=" + latitude + "+" + longitude + "&key=083a8ba9e4ce4ae7af7ebc75b8c79a1b";
                $.getJSON(url, function(data){
                    if (data.results.length > 0){
                        const location = data.results[0].components;
                        const city = location.city || location.town || location.village || '';
                        const pinCode = location.postcode || '';
                        document.getElementById("Position").innerHTML = city + ' ' + pinCode;
                    }
                });
            });
        }
        else{
            Swal.fire("Geolocation is not supported by this browser");
        }
    };

    const [cartCountValue, setCartCountValue]=useState(0);
    useEffect(()=>{
        // Function to fetch and update value in navbar
        const updateCartValue=()=>{
            const countValue=localStorage.getItem('cart');
            if(countValue){
                setCartCountValue(countValue.toString().padStart(2, 0));
            }
        };
        // Initial fetch and update value to mount
        updateCartValue();
        // Update fetch and update value to runs
        window.addEventListener('load', updateCartValue);
        window.addEventListener('change', updateCartValue);
        return()=>{
            window.removeEventListener('load', updateCartValue);
            window.removeEventListener('change', updateCartValue);
        };
    }, []);
    
    const navigate=useNavigate();
    const handleLogout=()=>{
        localStorage.removeItem("login");
        localStorage.removeItem('address');
        localStorage.removeItem('deliveryAddress');
        localStorage.removeItem('onlinePayment');
        navigate("/Navbar/Login");
    }

    return(
        <div className="position-relative z-2 user-select-none">
            <nav className="navbar navbar-expand-lg px-4 py-0 myNavbarContainer">
                <div className="container-fluid">
                    <NavLink className="navbar-brand fs-3 fw-bold" to="/">
                        <div className="position-sticky z-3">
                            <svg className="position-relative top-0 start-0 myLogoIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" fill="rgba(255, 250, 196, 0.9)" height="50" width="100" transform="scale(-1, 1)">
                                <path d="M423.3 440.7c0 25.3-20.3 45.6-45.6 45.6s-45.8-20.3-45.8-45.6 20.6-45.8 45.8-45.8c25.4 0 45.6 20.5 45.6 45.8zm-253.9-45.8c-25.3 0-45.6 20.6-45.6 45.8s20.3 45.6 45.6 45.6 45.8-20.3 45.8-45.6-20.5-45.8-45.8-45.8zm291.7-270C158.9 124.9 81.9 112.1 0 25.7c34.4 51.7 53.3 148.9 373.1 144.2 333.3-5 130 86.1 70.8 188.9 186.7-166.7 319.4-233.9 17.2-233.9z" id="mainIconPathAttribute"></path>
                            </svg>
                            <span className="fs-5 fw-semibold fst-italic myLogoName position-relative top-0">Afistracate</span>
                        </div>
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <form className="container-sm navbar-nav me-auto mb-2 mb-lg-0 w-100 d-flex flex-row flex-nowrap" role="search">
                            <input type="search" className="form-control fs-5 fw-semibold bg-white text-secondary" placeholder="Search your product" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                            {/* <button type="button" className="btn btn-light input-group-text">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="25" height="25" fill="transparent" stroke="#808080" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                                    <circle cx="11" cy="11" r="8" />
                                    <line x1="29" y1="29" x2="16.65" y2="16.65" />
                                </svg>
                            </button> */}
                        </form>
                        <ul className="container-sm d-flex flex-row justify-content-evenly flex-nowrap my-0" type="none">
                            <li className="nav-item">
                                <button className="nav-link fs-5 fw-semibold text-black d-flex flex-row flex-nowrap" onClick={myLocation} href="/">
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#FFFFFF" className="bi bi-geo-alt-fill mx-1" viewBox="0 0 16 16">
                                            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                                        </svg>
                                    </div>
                                    <div className="fs-5 fw-semibold text-white text-start overflow-y-scroll" id="Position">Location</div>
                                </button>
                            </li>
                            <li className="nav-item dropdown text-white">
                                <Link className="nav-link dropdown-toggle fs-5 fw-semibold text-white" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#FFFFFF" className="bi bi-person-fill" viewBox="0 0 16 16">
                                        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
                                    </svg>
                                </Link>
                                <ul className="dropdown-menu" type="none">
                                    <li><Link className="dropdown-item fs-6 fw-semibold" to="/Navbar/Login">Login&nbsp;Here</Link></li>
                                    <li><Link className="dropdown-item fs-6 fw-semibold" to="/Navbar/Register">Register&nbsp;Here</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link fs-5 fw-semibold text-white" to="/Navbar/Order/Address">Order</Link>
                            </li>
                            <li className="nav-item position-relative">
                                <Link className="nav-link fs-5 fw-semibold text-black d-flex flex-row flex-nowrap" to="/Navbar/Cart">
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#FFFFFF" className="bi bi-cart" viewBox="0 0 16 16" transform="scale(-1, 1)">
                                            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" id="mainIconPathAttribute"></path>
                                        </svg>
                                        <span className="text-white">&nbsp;Cart</span>
                                    </span>
                                    <span className="position-absolute myCartValueBox" align="center">
                                        <div className="text-warning fs-6 fw-bold myCartValueCount">{ cartCountValue }</div>
                                    </span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <button type='button' className="btn btn-transparent fw-semibold text-light myLogoutBtn" onClick={handleLogout}>Logout</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;