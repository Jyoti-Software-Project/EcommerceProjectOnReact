import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './Style-Order/Address.css';
import { useFormik } from 'formik';
import Swal from 'sweetalert2';

const validate =(values) =>{
    const errors = {};
    /* Validation for Name */
    if(!values.username){
        errors.username = '*Required*';
        document.getElementById("validUsername").style.fill="#FF0000";
    }
    else if(/\d/.test(values.username)){
        errors.username = '*Write alphabet only*';
        document.getElementById("validUsername").style.fill="#FF0000";
    }
    else if(values.username.length<3){
        errors.username = '*Minimum 3 character needed*';
        document.getElementById("validUsername").style.fill="#FF0000";
    }
    else{
        document.getElementById("validUsername").style.fill="#008000";
    }
    /* Validation for Number */
    if(!values.number){
        errors.number = '*Required*';
        document.getElementById("validNumber").style.fill="#FF0000";
    }
    else if(isNaN(values.number)){
        errors.number = '*Write numbers only*';
        document.getElementById("validNumber").style.fill="#FF0000";
    }
    else if((values.number.length<10) || (values.number.length>10)){
        errors.number = '*Write 10 digit number only*';
        document.getElementById("validNumber").style.fill="#FF0000";
    }
    else{
        document.getElementById("validNumber").style.fill="#008000";
    }
    /* Validation for Town or Village */
    if(!values.townVillage){
        errors.townVillage = '*Required*';
        document.getElementById("validTownVillage").style.fill="#FF0000";
    }
    else if(/\d/.test(values.townVillage)){
        errors.townVillage = '*Write alphabet only*';
        document.getElementById("validTownVillage").style.fill="#FF0000";
    }
    else if(values.townVillage.length<3){
        errors.townVillage = '*Minimum 3 character needed*';
        document.getElementById("validTownVillage").style.fill="#FF0000";
    }
    else{
        document.getElementById("validTownVillage").style.fill="#008000";
    }
    /* Validation for Landmark */
    if(!values.landmark){
        errors.landmark = '*Required*';
        document.getElementById("validLandmark").style.fill="#FF0000";
    }
    else if(/\d/.test(values.landmark)){
        errors.landmark = '*Write alphabet only*';
        document.getElementById("validLandmark").style.fill="#FF0000";
    }
    else if(values.landmark.length<3){
        errors.landmark = '*Minimum 3 character needed*';
        document.getElementById("validLandmark").style.fill="#FF0000";
    }
    else{
        document.getElementById("validLandmark").style.fill="#008000";
    }
    /* Validation for Pincode */
    if(!values.pincode){
        errors.pincode = '*Required*';
        document.getElementById("validPincode").style.fill="#FF0000";
    }
    else if(isNaN(values.pincode)){
        errors.pincode = '*Write number only*';
        document.getElementById("validPincode").style.fill="#FF0000";
    }
    else if((values.pincode.length<7) || (values.pincode.length>7)){
        errors.pincode = '*Minimum 7 character needed*';
        document.getElementById("validPincode").style.fill="#FF0000";
    }
    else{
        document.getElementById("validPincode").style.fill="#008000";
    }
    /* Validation for District */
    if(!values.district){
        errors.district = '*Required*';
        document.getElementById("validDistrict").style.fill="#FF0000";
    }
    else if(/\d/.test(values.district)){
        errors.district = '*Write alphabet only*';
        document.getElementById("validDistrict").style.fill="#FF0000";
    }
    else if(values.district.length<3){
        errors.district = '*Minimum 3 character needed*';
        document.getElementById("validDistrict").style.fill="#FF0000";
    }
    else{
        document.getElementById("validDistrict").style.fill="#008000";
    }
    /* Validation for State */
    if(!values.state){
        errors.state = '*Required*';
        document.getElementById("validState").style.fill="#FF0000";
    }
    else{
        document.getElementById("validState").style.fill="#008000";
    }
    /* Validation for Country */
    if(!values.country){
        errors.country = '*Required*';
        document.getElementById("validCountry").style.fill="#FF0000";
    }
    else{
        document.getElementById("validCountry").style.fill="#008000";
    }
    return errors;
}

const Address = () => {
    const formik = useFormik({
        initialValues:{
            username:'',
            number:'',
            townVillage:'',
            landmark:'',
            pincode:'',
            district:'',
            state:'',
            country:'',
        },
        validate,
        onSubmit:(values)=>{
            console.log(values);
        },
        onReset:()=>{
            Swal.fire("Your address form is clear");
        },
    });

    const navigate=useNavigate();
    const handleAddress=()=>{
        if(formik.values.username && formik.values.number && formik.values.townVillage && formik.values.landmark && formik.values.pincode && formik.values.district && formik.values.state && formik.values.country){
            localStorage.setItem('address', true);
            navigate('/Navbar/Order/DeliveryAddress');
        }
    }

    return (
        <div className="container-fluid my-4 bg-transparent" style={{minHeight: "27rem"}}>
            <form onSubmit={formik.handleSubmit} onReset={formik.handleReset}>
                <div className="container px-5 py-3 bg-transparent rounded-4 myAddressContainer">
                    {/* <legend className="text-center text-dark fs-4 fw-semibold text-uppercase">Address</legend> */}
                    <div className="my-2">
                        <label htmlFor="name" className="form-label fs-6 fw-semibold">Full&nbsp;Name</label>
                        <div className="input-group col-sm-10">
                            <input type="text" className="form-control text-capitalize fs-6 fw-semibold" id="name" name="username" value={formik.values.username} onInput={formik.handleChange} placeholder="Enter name" autoFocus />
                            <span className="input-group-text rounded bg-light">
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#FF0000" id="validUsername" className="bi bi-check-square-fill px-0" viewBox="0 0 16 16">
                                    <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm10.03 4.97a.75.75 0 0 1 .011 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.75.75 0 0 1 1.08-.022z"/>
                                </svg>
                            </span>
                        </div>
                        <span className="text-danger">{formik.errors.username ? <em>{formik.errors.username}</em> : null}</span>
                    </div>
                    <div className="my-2">
                        <label htmlFor="number" className="form-label fs-6 fw-semibold">Number</label>
                        <div className="input-group col-sm-10">
                            <input type="text" className="form-control text-capitalize fs-6 fw-semibold" id="number" name="number" value={formik.values.number} onInput={formik.handleChange}  placeholder="Enter number" />
                            <span className="input-group-text rounded bg-light">
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#FF0000" id="validNumber" className="bi bi-check-square-fill px-0" viewBox="0 0 16 16">
                                    <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm10.03 4.97a.75.75 0 0 1 .011 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.75.75 0 0 1 1.08-.022z"/>
                                </svg>
                            </span>
                        </div>
                        <span className="text-danger">{formik.errors.number ? <em>{formik.errors.number}</em> : null}</span>
                    </div>
                    <div className="my-2">
                        <label htmlFor="townVillage" className="form-label fs-6 fw-semibold">Town&nbsp;/&nbsp;Village</label>
                        <div className="input-group col-sm-10">
                            <input type="text" className="form-control text-capitalize fs-6 fw-semibold" id="townVillage" name="townVillage" value={formik.values.townVillage} onInput={formik.handleChange}  placeholder="Enter town or village" />
                            <span className="input-group-text rounded bg-light">
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#FF0000" id="validTownVillage" className="bi bi-check-square-fill px-0" viewBox="0 0 16 16">
                                    <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm10.03 4.97a.75.75 0 0 1 .011 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.75.75 0 0 1 1.08-.022z"/>
                                </svg>
                            </span>
                        </div>
                        <span className="text-danger">{formik.errors.townVillage ? <em>{formik.errors.townVillage}</em> : null}</span>
                    </div>
                    <div className="my-2">
                        <label htmlFor="landmark" className="form-label fs-6 fw-semibold">Landmark</label>
                        <div className="input-group col-sm-10">
                            <input type="text" className="form-control text-capitalize fs-6 fw-semibold" id="landmark" name="landmark" value={formik.values.landmark} onInput={formik.handleChange}  placeholder="Enter landmark" />
                            <span className="input-group-text rounded bg-light">
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#FF0000" id="validLandmark" className="bi bi-check-square-fill px-0" viewBox="0 0 16 16">
                                    <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm10.03 4.97a.75.75 0 0 1 .011 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.75.75 0 0 1 1.08-.022z"/>
                                </svg>
                            </span>
                        </div>
                        <span className="text-danger">{formik.errors.landmark ? <em>{formik.errors.landmark}</em> : null}</span>
                    </div>
                    <div className="my-2">
                        <label htmlFor="pincode" className="form-label fs-6 fw-semibold">Pincode</label>
                        <div className="input-group col-sm-10">
                            <input type="text" className="form-control text-capitalize fs-6 fw-semibold" id="pincode" name="pincode" value={formik.values.pincode} onInput={formik.handleChange}  placeholder="Enter Pincode" />
                            <span className="input-group-text rounded bg-light">
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#FF0000" id="validPincode" className="bi bi-check-square-fill px-0" viewBox="0 0 16 16">
                                    <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm10.03 4.97a.75.75 0 0 1 .011 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.75.75 0 0 1 1.08-.022z"/>
                                </svg>
                            </span>
                        </div>
                        <span className="text-danger">{formik.errors.pincode ? <em>{formik.errors.pincode}</em> : null}</span>
                    </div>
                    <div className="my-2">
                        <label htmlFor="District" className="form-label fs-6 fw-semibold">District</label>
                        <div className="input-group col-sm-10">
                            <input type="text" className="form-control text-capitalize fs-6 fw-semibold" id="district" name="district" value={formik.values.district} onInput={formik.handleChange}  placeholder="Enter District" />
                            <span className="input-group-text rounded bg-light">
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#FF0000" id="validDistrict" className="bi bi-check-square-fill px-0" viewBox="0 0 16 16">
                                    <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm10.03 4.97a.75.75 0 0 1 .011 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.75.75 0 0 1 1.08-.022z"/>
                                </svg>
                            </span>
                        </div>
                        <span className="text-danger">{formik.errors.district ? <em>{formik.errors.district}</em> : null}</span>
                    </div>
                    <div className="my-2">
                        <label htmlFor="state" className="form-label fs-6 fw-semibold">State</label>
                        <div className="input-group col-sm-10">
                            <select className="form-select text-capitalize fs-6 fw-semibold" id="state" name="state" value={formik.values.state} onInput={formik.handleChange} aria-label="Select menu bar">
                                <option className="text-capitalize fs-6 fw-semibold text-primary" value="">Select&nbsp;State</option>
                                <option className="text-uppercase fs-6 fw-semibold" value="andaman & nicobar island">andaman&nbsp;&&nbsp;nicobar&nbsp;island</option>
                                <option className="text-uppercase fs-6 fw-semibold" value="andhra pradesh">andhra&nbsp;pradesh</option>
                                <option className="text-uppercase fs-6 fw-semibold" value="arunacha pradesh">arunachal&nbsp;pradesh</option>
                                <option className="text-uppercase fs-6 fw-semibold" value="assam">assam</option>
                                <option className="text-uppercase fs-6 fw-semibold" value="bihar">bihar</option>
                                <option className="text-uppercase fs-6 fw-semibold" value="chandigarh">chandigarh</option>
                                <option className="text-uppercase fs-6 fw-semibold" value="chhattisgarh">chhattisgarh</option>
                                <option className="text-uppercase fs-6 fw-semibold" value="dadra nagar haveli anddaman and diu">dadra&nbsp;nagar&nbsp;haveli&nbsp;anddaman&nbsp;and&nbsp;diu</option>
                                <option className="text-uppercase fs-6 fw-semibold" value="delhi">delhi</option>
                                <option className="text-uppercase fs-6 fw-semibold" value="goa">goa</option>
                                <option className="text-uppercase fs-6 fw-semibold" value="gujarat">gujarat</option>
                                <option className="text-uppercase fs-6 fw-semibold" value="haryana">haryana</option>
                                <option className="text-uppercase fs-6 fw-semibold" value="himachal pradesh">himachal&nbsp;pradesh</option>
                                <option className="text-uppercase fs-6 fw-semibold" value="jammu & kashmir">jammu&nbsp;&&nbsp;kashmir</option>
                                <option className="text-uppercase fs-6 fw-semibold" value="jharkhand">jharkhand</option>
                                <option className="text-uppercase fs-6 fw-semibold" value="karnataka">karnataka</option>
                                <option className="text-uppercase fs-6 fw-semibold" value="kerala">kerala</option>
                                <option className="text-uppercase fs-6 fw-semibold" value="ladakh">ladakh</option>
                                <option className="text-uppercase fs-6 fw-semibold" value="lakshadweep">lakshadweep</option>
                                <option className="text-uppercase fs-6 fw-semibold" value="madhya pradesh">madhya&nbsp;pradesh</option>
                                <option className="text-uppercase fs-6 fw-semibold" value="maharashtra">maharashtra</option>
                                <option className="text-uppercase fs-6 fw-semibold" value="manipur">manipur</option>
                                <option className="text-uppercase fs-6 fw-semibold" value="meghalaya">meghalaya</option>
                                <option className="text-uppercase fs-6 fw-semibold" value="mizoram">mizoram</option>
                                <option className="text-uppercase fs-6 fw-semibold" value="nagaland">nagaland</option>
                                <option className="text-uppercase fs-6 fw-semibold" value="odisha">odisha</option>
                                <option className="text-uppercase fs-6 fw-semibold" value="puducherry">puducherry</option>
                                <option className="text-uppercase fs-6 fw-semibold" value="punjab">punjab</option>
                                <option className="text-uppercase fs-6 fw-semibold" value="rajasthan">rajasthan</option>
                                <option className="text-uppercase fs-6 fw-semibold" value="sikkim">Sikkim</option>
                                <option className="text-uppercase fs-6 fw-semibold" value="tamil nadu">tamil&nbsp;nadu</option>
                                <option className="text-uppercase fs-6 fw-semibold" value="telangana">telangana</option>
                                <option className="text-uppercase fs-6 fw-semibold" value="tripura">tripura</option>
                                <option className="text-uppercase fs-6 fw-semibold" value="uttar pradesh">uttar&nbsp;pradesh</option>
                                <option className="text-uppercase fs-6 fw-semibold" value="West bengal">West&nbsp;Bengal</option>
                            </select>
                            <span className="input-group-text rounded bg-light">
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#FF0000" id="validState" className="bi bi-check-square-fill px-0" viewBox="0 0 16 16">
                                    <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm10.03 4.97a.75.75 0 0 1 .011 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.75.75 0 0 1 1.08-.022z"/>
                                </svg>
                            </span>
                        </div>
                        <span className="text-danger">{formik.errors.state ? <em>{formik.errors.state}</em> : null}</span>
                    </div>
                    <div className="my-2">
                        <label htmlFor="country" className="form-label fs-6 fw-semibold">Country</label>
                        <div className="input-group col-sm-10">
                            <input type="text" className="form-control text-capitalize fs-6 fw-semibold" id="country" name="country" value={formik.values.country="India"} onInput={formik.handleChange} title="Only available in India" placeholder="Enter country" />
                            <span className="input-group-text rounded bg-light">
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#FF0000" id="validCountry" className="bi bi-check-square-fill px-0" viewBox="0 0 16 16">
                                    <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm10.03 4.97a.75.75 0 0 1 .011 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.75.75 0 0 1 1.08-.022z"/>
                                </svg>
                            </span>
                        </div>
                        <span className="text-danger">{formik.errors.country ? <em>{formik.errors.country}</em> : null}</span>
                    </div>
                    <div className="mt-4 mb-2 text-center">
                        <button type="submit" className="btn btn-primary mx-3 fs-5 fw-semibold" onClick={handleAddress}>Add&nbsp;address</button>
                        <button type="reset" className="btn btn-danger mx-3 fs-5 fw-semibold">Reset</button>
                    </div>
                </div>
            </form>
            <div className='text-center mt-5 px-2'>
                <label htmlFor="deliveryAddress" className="fs-5 fw-semibold text-light">Already&nbsp;add&nbsp;any&nbsp;address&nbsp;?&nbsp;</label>
                <NavLink to="/Navbar/Order/DeliveryAddress" className="fs-5 fw-semibold text-decoration-none text-primary">Go to Delivery-address</NavLink>
            </div>
        </div>
     )
}

export default Address;