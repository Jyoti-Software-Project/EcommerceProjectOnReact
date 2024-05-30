import React, { useEffect, useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './Style-Navbar/Order.css';

const Order = ({props}) => {
    const [address, setAddress] = useState(false);
    const [deliveryAddress, setDeliveryAddress] = useState(false);
    const [payment, setPayment] = useState(false);
    // const [placeOrder, setPlaceOrder] = useState(false)
        
    useEffect(()=>{
        const address=localStorage.getItem('address');
        if(address){
            setAddress(true);
        }
        const deliveryAddress=localStorage.getItem('deliveryAddress');
        if(deliveryAddress){
            setDeliveryAddress(true);
        }
        const onlinePayment=localStorage.getItem('onlinePayment');
        if(onlinePayment){
            setPayment(true);
        }
        // const placeOrder=localStorage.getItem('placeOrder');
        // if(placeOrder){
        //     setPlaceOrder(true);
        // }
    });

    return (
        <div className="container-fluid py-3 myOrderContainer">
            <div className="container my-3 bg-transparent">
                <div className="d-flex flex-row justify-content-evenly">
                    {address && 
                        <NavLink to="Address">
                            <button className="btn btn-light text-uppercase fs-6 fw-semibold">address</button>
                        </NavLink>
                    }
                    {address && 
                        <NavLink to="DeliveryAddress">
                            <button className="btn btn-light text-uppercase fs-6 fw-semibold">delivery&nbsp;address</button>
                        </NavLink>
                    }
                    {deliveryAddress && 
                        <NavLink to="Payment">
                            <button className="btn btn-light text-uppercase fs-6 fw-semibold">payment</button>
                        </NavLink>
                    }
                    {payment && 
                        <NavLink to="PlaceOrder">
                            <button className="btn btn-light text-uppercase fs-6 fw-semibold">place&nbsp;order</button>
                        </NavLink>
                    }
                </div>
            </div>
            <Outlet />
        </div>
    )
}

export default Order;
