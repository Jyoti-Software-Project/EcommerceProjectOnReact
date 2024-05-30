import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Style-Order/Payment.css';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Swal from 'sweetalert2';

const validate =(values) =>{
    const errors = {};
    /* Validation for Username */
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
    /* Validation for Email */
    if(!values.email){
        errors.email = '*Required*';
        document.getElementById("validEmail").style.fill="#FF0000";
    }
    else if(values.email.indexOf('@')<=0){
        errors.email = '*Invalid position of @*';
        document.getElementById("validEmail").style.fill="#FF0000";
    }
    else if(values.email.charAt(values.email.length-4)!=='.' && values.email.charAt(values.email.length-3)!=='.'){
        errors.email = '*Invalid position of .*';
        document.getElementById("validEmail").style.fill="#FF0000";
    }
    else{
        document.getElementById("validEmail").style.fill="#008000";
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
    /* Validation for Reference */
    if(!values.reference){
        errors.reference = '*Required*';
        document.getElementById("validReference").style.fill="#FF0000";
    }
    else if(values.reference.search(/^[a-z/A-Z/0-9]+$/)===-1){
        errors.reference = '*Write letter, number combination only*';
        document.getElementById("validReference").style.fill="#FF0000";
    }
    else if(values.reference.length<6){
        errors.reference = '*Minimum 6 character needed*';
        document.getElementById("validReference").style.fill="#FF0000";
    }
    else{
        document.getElementById("validReference").style.fill="#008000";
    }
    /* Validation for Amount */
    if(!values.amount){
        errors.amount = '*Required*';
        document.getElementById("validAmount").style.fill="#FF0000";
    }
    else if(isNaN(values.amount)){
        errors.amount = '*Write numbers only*';
        document.getElementById("validAmount").style.fill="#FF0000";
    }
    else{
        document.getElementById("validAmount").style.fill="#008000";
    }
    return errors;
}
/* Validation for Image */
const validationSchema = Yup.object().shape({
    file: Yup.mixed().test('fileFormat', '*File format must be JPG or JPEG*', (value) => {
        if (value) {
            if(['image/jpeg', 'image/jpg'].includes(value.type)){
                document.getElementById("validFile").style.fill = "#008000";
                return true;
            }
            else{
                document.getElementById("validFile").style.fill = "#FF0000";
                return false;
            }
        }
        else{
            document.getElementById("validFile").style.fill = "#FF0000";
            return false;
        }
    }).required('*Required*', (requiredValue) =>{
        if(!requiredValue){
            document.getElementById("validFile").style.fill = "#FF0000";
            return false;
        }
        else{
            document.getElementById("validFile").style.fill = "#008000";
            return true;
        }
    }),
});

const Payment = () => {
    const formik = useFormik({
        initialValues:{
            username:'',
            email:'',
            number:'',
            reference:'',
            amount:'',
            file: null,
        },
        validate,
        validationSchema,
        onSubmit:(values)=>{
            console.log(values);
        },
        onReset:()=>{
            Swal.fire("Your payment form is clear");
        },
    });
    
    const navigate=useNavigate();
    const handleOnlinePayment=()=>{
        const file = document.getElementById("file").files[0];
        if(formik.values.username && formik.values.email && formik.values.number && formik.values.reference && formik.values.amount && file){
            const extention=file.name.split(".");
            if (extention[1].toLowerCase()==="jpg" || extention[1].toLowerCase()==="jpeg") {
                localStorage.setItem('onlinePayment', true);
                navigate('/Navbar/Order/PlaceOrder');
            }
        }
    }

    useEffect(()=>{
        const address=localStorage.getItem('address');
        const deliveryAddress=localStorage.getItem('deliveryAddress');
        if(!address){
            navigate('/Navbar/Order/Address');
        }
        else if(!deliveryAddress){
            navigate('/Navbar/Order/DeliveryAddress');
        }
    });

    return (
        <div className="container-fluid py-3 bg-transparent" style={{minHeight: "27rem"}}>
            <div className="container p-3 bg-transparent rounded-4 myPaymentContainer">
                <div className="container mt-3 d-flex flex-row justify-content-evenly">
                    <div className="container-md text-center">
                        <img src="/PaymentQR/PaytmBusiness.jpg" className="rounded-4" alt="Paytm Business" width="250px" />
                        <span className="d-block text-center text-uppercase mt-4 fs-5 fw-bold">Jyoti&nbsp;prakash&nbsp;mal</span>
                    </div>
                    <form onSubmit={formik.handleSubmit} onReset={formik.handleReset}>
                        <div className="container-md text-center" style={{width: "55rem"}}>
                            <div className="mb-3">
                                <div className="input-group">
                                    <label htmlFor="username" className="input-group-text fs-5 fw-semibold text-capitalize myName" id="basic-addon1">Name<span className="text-danger">*</span></label>
                                    <input type="text" id="userame" name="username" value={formik.values.username} onInput={formik.handleChange} className="form-control fs-6 fw-semibold" aria-label="Username" aria-describedby="Username" placeholder="Enter your Name" />
                                    <span className="input-group-text rounded bg-light">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#FF0000" id="validUsername" className="bi bi-check-square-fill px-0" viewBox="0 0 16 16">
                                            <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm10.03 4.97a.75.75 0 0 1 .011 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.75.75 0 0 1 1.08-.022z"/>
                                        </svg>
                                    </span>
                                </div>
                                <span className="d-block text-start text-danger">{formik.errors.username ? <em>{formik.errors.username}</em> : null}</span>
                            </div>
                            <div className="mb-3">
                                <div className="input-group">
                                    <label htmlFor="email" className="input-group-text fs-5 fw-semibold text-capitalize myEmail">Email<span className="text-danger">*</span></label>
                                    <input type="text" id="email" name="email" value={formik.values.email} onInput={formik.handleChange} className="form-control fs-6 fw-semibold" aria-label="Email" aria-describedby="Email" placeholder="Enter your Email Id" />
                                    <span className="input-group-text rounded bg-light">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#FF0000" id="validEmail" className="bi bi-check-square-fill px-0" viewBox="0 0 16 16">
                                            <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm10.03 4.97a.75.75 0 0 1 .011 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.75.75 0 0 1 1.08-.022z"/>
                                        </svg>
                                    </span>
                                </div>
                                <span className="d-block text-start text-danger">{formik.errors.email ? <em>{formik.errors.email}</em> : null}</span>
                            </div>
                            <div className="mb-3">
                                <div className="input-group">
                                    <label htmlFor="number" className="input-group-text fs-5 fw-semibold text-capitalize myNumber">Number<span className="text-danger">*</span></label>
                                    <input type="number" id="number" name="number" value={formik.values.number} onInput={formik.handleChange} className="form-control fs-6 fw-semibold" aria-label="Number" aria-describedby="Number" placeholder="Enter your Number" />
                                    <span className="input-group-text rounded bg-light">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#FF0000" id="validNumber" className="bi bi-check-square-fill px-0" viewBox="0 0 16 16">
                                            <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm10.03 4.97a.75.75 0 0 1 .011 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.75.75 0 0 1 1.08-.022z"/>
                                        </svg>
                                    </span>
                                </div>
                                <span className="d-block text-start text-danger">{formik.errors.number ? <em>{formik.errors.number}</em> : null}</span>
                            </div>
                            <div className="mb-3">
                                <div className="input-group">
                                    <label htmlFor="reference" className="input-group-text fs-5 fw-semibold text-capitalize myReference">Reference<span className="text-danger">*</span></label>
                                    <input type="text" id="reference" name="reference" value={formik.values.reference} onInput={formik.handleChange} className="form-control fs-6 fw-semibold" aria-label="Reference" aria-describedby="Reference" placeholder="Enter your Reference No" />
                                    <span className="input-group-text rounded bg-light">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#FF0000" id="validReference" className="bi bi-check-square-fill px-0" viewBox="0 0 16 16">
                                            <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm10.03 4.97a.75.75 0 0 1 .011 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.75.75 0 0 1 1.08-.022z"/>
                                        </svg>
                                    </span>
                                </div>
                                <span className="d-block text-start text-danger">{formik.errors.reference ? <em>{formik.errors.reference}</em> : null}</span>
                            </div>
                            <div className="mb-3">
                                <div className="input-group">
                                    <label htmlFor="amount" className="input-group-text fs-5 fw-semibold text-capitalize myAmount">Amount<span className="text-danger">*</span></label>
                                    <input type="number" id="amount" name="amount" value={formik.values.amount} onInput={formik.handleChange} className="form-control fs-6 fw-semibold" aria-label="Amount" aria-describedby="Amount" placeholder="Enter your payment amount" />
                                    <span className="input-group-text rounded bg-light">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#FF0000" id="validAmount" className="bi bi-check-square-fill px-0" viewBox="0 0 16 16">
                                            <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm10.03 4.97a.75.75 0 0 1 .011 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.75.75 0 0 1 1.08-.022z"/>
                                        </svg>
                                    </span>
                                </div>
                                <span className="d-block text-start text-danger">{formik.errors.amount ? <em>{formik.errors.amount}</em> : null}</span>
                            </div>
                            <div className="mb-3">
                                <div className="input-group">
                                    <label htmlFor="image" className="input-group-text fs-5 fw-semibold text-capitalize myFile">Choose&nbsp;file<span className="text-danger">*</span></label>
                                    <input type="file" className="form-control fs-6 fw-semibold text-capitalize text-secondary" id="file" name="file"  onInput={(event) => { formik.setFieldValue('file', event.currentTarget.files[0]); }} />
                                    <span className="input-group-text rounded bg-light">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#FF0000" id="validFile" className="bi bi-check-square-fill px-0" viewBox="0 0 16 16">
                                            <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm10.03 4.97a.75.75 0 0 1 .011 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.75.75 0 0 1 1.08-.022z"/>
                                        </svg>
                                    </span>
                                </div>
                                <span className="d-block text-start text-danger">{formik.errors.file ? <em>{formik.errors.file}</em> : null}</span>
                            </div>
                            <div className="mb-3">
                                <div className="input-group">
                                    <label htmlFor="description" className="input-group-text fs-5 fw-semibold text-capitalize myDescription">Description</label>
                                    <textarea className="form-control fs-6 fw-semibold mytextarea" id="description" rows="1" aria-label="With textarea" aria-describedby="With textarea" placeholder="Enter your Description"></textarea>
                                    <span className="input-group-text rounded bg-light">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#008000" id="validDescription" className="bi bi-check-square-fill px-0" viewBox="0 0 16 16">
                                            <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm10.03 4.97a.75.75 0 0 1 .011 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.75.75 0 0 1 1.08-.022z"/>
                                        </svg>
                                    </span>
                                </div>
                            </div>
                            <div className="text-center mb-3" role="group">
                                <button type="submit" className="btn btn-success mx-3 fs-5 fw-semibold" onClick={handleOnlinePayment}>Submit</button>
                                <button type="reset" className="btn btn-danger mx-3 fs-5 fw-semibold">Reset</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Payment;