import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Style-Order/DeliveryAddress.css';

const DeliveryAddress = () => {
    const navigate=useNavigate();
    const handleDeliveryAddress = () => {
        const addressRadios = document.getElementsByName("addressRadio");
        let i = 0;
        while (i < addressRadios.length) {
            if (addressRadios[i].checked) {
                document.getElementById("selectDeliveryAddress").innerHTML="Use&nbsp;this&nbsp;address&nbsp;for&nbsp;delivery";
                localStorage.setItem("deliveryAddress", true);
                navigate("/Navbar/Order/Payment");
                break; // Exit the loop after finding the checked radio button
            }
            else{
                document.getElementById("selectDeliveryAddress").innerHTML="Please&nbsp;select&nbsp;any&nbsp;address";
            }
            i++;
        }
    };
    useEffect(()=>{
        const address=localStorage.getItem('address');
        if(!address){
            navigate('/Navbar/Order/Address');
        }
    });

    let arr=["jyoti prakash mal", "8159058136", "kamarhati", "milan sangha", "713421", "burdwan", "west bengal", "india"];

    return (
        <div className="container-fluid bg-transparent" style={{minHeight: "27rem"}}>
            <div className="container d-flex flex-column">
                <div className="container-fluid my-4 position-relative">
                    <button type="submit" className="btn btn-warning w-100 fs-5 fw-semibold" id="selectDeliveryAddress" onClick={handleDeliveryAddress}>Use&nbsp;this&nbsp;address&nbsp;for&nbsp;delivery</button>
                </div>
                <div className="container-fluid d-flex flex-row position-relative py-3 ps-5 bg-transparent rounded-4 myDeliveryAddressContainer">
                    <div className="form-check">
                        <input className="form-check-input me-3 border border-2 border-primary d-block" type="radio" name="addressRadio" />
                    </div>
                    <table width="87%" style={{minHeight: "1rem", maxHeight: "15rem"}}>
                        <tbody>
                            <tr>
                                <td><label htmlFor="name" className="form-label fs-5 fw-bold">Full&nbsp;Name</label></td>
                                <td className="fs-5 fw-bold px-3">:</td>
                                <td><input type="text" value={arr[0]} className="text-capitalize fw-semibold bg-transparent border-0" readOnly /></td>
                            </tr>
                            <tr>
                                <td><label htmlFor="number" className="form-label fs-5 fw-bold">Number</label></td>
                                <td className="fs-5 fw-bold px-3">:</td>
                                <td><input type="text" value={arr[1]} className="text-capitalize fw-semibold bg-transparent border-0" readOnly /></td>
                            </tr>
                            <tr>
                                <td><label htmlFor="areaVillage" className="form-label fs-5 fw-bold">Town&nbsp;/&nbsp;City</label></td>
                                <td className="fs-5 fw-bold px-3">:</td>
                                <td><input type="text" value={arr[2]} className="text-capitalize fw-semibold bg-transparent border-0" readOnly /></td>
                            </tr>
                            <tr>
                                <td><label htmlFor="landmark" className="form-label fs-5 fw-bold">Landmark</label></td>
                                <td className="fs-5 fw-bold px-3">:</td>
                                <td><input type="text" value={arr[3]} className="text-capitalize fw-semibold bg-transparent border-0" readOnly /></td>
                            </tr>
                            <tr>
                                <td><label htmlFor="pincode" className="form-label fs-5 fw-bold">Pincode</label></td>
                                <td className="fs-5 fw-bold px-3">:</td>
                                <td><input type="text" value={arr[4]} className="text-capitalize fw-semibold bg-transparent border-0" readOnly /></td>
                            </tr>
                            <tr>
                                <td><label htmlFor="townCity" className="form-label fs-5 fw-bold">District</label></td>
                                <td className="fs-5 fw-bold px-3">:</td>
                                <td><input type="text" value={arr[5]} className="text-capitalize fw-semibold bg-transparent border-0" readOnly /></td>
                            </tr>
                            <tr>
                                <td><label htmlFor="state" className="form-label fs-5 fw-bold">State</label></td>
                                <td className="fs-5 fw-bold px-3">:</td>
                                <td><input type="text" value={arr[6]} className="text-capitalize fw-semibold bg-transparent border-0" readOnly /></td>
                            </tr>
                            <tr>
                                <td><label htmlFor="country" className="form-label fs-5 fw-bold">Country</label></td>
                                <td className="fs-5 fw-bold px-3">:</td>
                                <td><input type="text" value={arr[7]} className="text-capitalize fw-semibold bg-transparent border-0" readOnly /></td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="position-absolute top-0 end-0">
                        <button type="button" className="btn border-0 m-2 fs-5 fw-semibold">
                            <i className="fa-regular fa-circle-xmark fa-shake fa-2xl text-danger"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DeliveryAddress;
