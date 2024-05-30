import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Style-Order/PlaceOrder.css';
import Swal from 'sweetalert2';

const PlaceOrder = () => {
    const navigate=useNavigate();
    const handlePlaceOrder=(()=>{
        localStorage.removeItem('address');
        localStorage.removeItem('deliveryAddress');
        localStorage.removeItem('onlinePayment');
        Swal.fire("Ordered successfully");            
        navigate('/');
    });
    useEffect(()=>{
        const address=localStorage.getItem('address');
        const deliveryAddress=localStorage.getItem('deliveryAddress');
        const onlinePayment=localStorage.getItem('onlinePayment');
        if(!address){
            navigate('/Navbar/Order/Address');
        }
        else if(!deliveryAddress){
            navigate('/Navbar/Order/DeliveryAddress');
        }
        else if(!onlinePayment){
            navigate('/Navbar/Order/Payment');
        }
    });

    return (
        <div className="container-fluid py-3 bg-transparent" style={{minHeight: "27rem"}}>
            <div className="container py-3 my-3 rounded-4 bg-transparent myPlaceOrderContainer">
                <div className="container w-100 my-3">
                    <div>
                        <legend className="text-left text-capitalize fs-5 fw-semibold myPlaceOrderText">show address</legend>
                        <div className="text-center text-white fs-6 fw-semibold myPlaceOrderText">address</div>
                    </div>
                    <div>
                        <legend className="text-left text-capitalize fs-5 fw-semibold myPlaceOrderText">show product details</legend>
                        <div className="text-center text-white fs-6 fw-semibold myPlaceOrderText">product</div>
                    </div>
                    <div>
                        <legend className="text-left text-capitalize fs-5 fw-semibold myPlaceOrderText">show payment mode</legend>
                        <div className="text-center text-white fs-6 fw-semibold myPlaceOrderText">payment</div>
                    </div>
                </div>
                <div className="container w-100 my-3">
                    <button type="button" className="btn btn-warning w-100 fs-5 fw-semibold" onClick={handlePlaceOrder}>Confirm&nbsp;your&nbsp;order</button>
                </div>
            </div>
        </div>
    )
}

export default PlaceOrder;
