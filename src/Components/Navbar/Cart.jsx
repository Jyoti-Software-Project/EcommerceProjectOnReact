import React, { useEffect, useState } from 'react';
import './Style-Navbar/Cart.css';

const Cart = () => {
    const [cartCount, setCartCount]=useState(0);
    useEffect(()=>{
        // Function to count tables and update localStorage
        const updateCartCountLocalStorage=()=>{
            const count=document.getElementsByClassName("myCartTable").length;
            setCartCount(count.toString());
            localStorage.setItem('cart', count);
        };
        // Initial count on component mount
        updateCartCountLocalStorage();
        // Update count on subsequent runs
        window.addEventListener('load', updateCartCountLocalStorage);
        return()=>{
            window.removeEventListener('load', updateCartCountLocalStorage);
        };
    }, [cartCount]);

    return (
        <div className="container-fluid myCartContainer">
            <div className="container py-5 px-5 d-flex flex-column">
                <button type="button" className="btn btn-dark d-block w-100 text-light fs-5 fw-semibold text-capitalize myPurchaseButton">Proceed&nbsp;to&nbsp;buy&nbsp;({cartCount})</button>
                
                <div className="container mt-4 p-3 rounded-4 d-flex flex-row justify-content-evenly myCartTable">
                    <div className="container-md text-center">
                        <img src="../../Products/Gym/Gym01.jpg" width="260px" alt="product icon" />
                    </div>
                    <div className="container-md text-center d-flex flex-column">
                        <div className="text-center d-flex flex-column" style={{minHeight: "80%"}}>
                            <p className="fs-5 fw-semibold">Product name</p>
                            <p className="fs-5 fw-semibold text-primary">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-currency-rupee" viewBox="0 0 16 16">
                                    <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4v1.06Z"/>
                                </svg>
                                <span>499</span>
                            </p>
                            <p className="fs-6 fw-semibold">Product details</p>
                        </div>
                        <div className="container-md m-0 d-flex flex-row">
                            <button type="submit" className="btn btn-success container-sm mx-2 fs-5 fw-semibold text-capitalize">purchase</button>
                            <button type="reset" className="btn btn-danger container-sm mx-2 fs-5 fw-semibold text-capitalize">Delete</button>
                        </div>
                    </div>
                </div>
                
                <div className="container mt-4 p-3 rounded-4 d-flex flex-row justify-content-evenly myCartTable">
                    <div className="container-md text-center">
                        <img src="../../Products/Gym/Gym01.jpg" width="260px" alt="product icon" />
                    </div>
                    <div className="container-md text-center d-flex flex-column">
                        <div className="text-center d-flex flex-column" style={{minHeight: "80%"}}>
                            <p className="fs-5 fw-semibold">Product name</p>
                            <p className="fs-5 fw-semibold text-primary">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-currency-rupee" viewBox="0 0 16 16">
                                    <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4v1.06Z"/>
                                </svg>
                                <span>499</span>
                            </p>
                            <p className="fs-6 fw-semibold">Product details</p>
                        </div>
                        <div className="container-md m-0 d-flex flex-row">
                            <button type="submit" className="btn btn-success container-sm mx-2 fs-5 fw-semibold text-capitalize">purchase</button>
                            <button type="reset" className="btn btn-danger container-sm mx-2 fs-5 fw-semibold text-capitalize">Delete</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Cart;