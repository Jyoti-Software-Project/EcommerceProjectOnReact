import React from 'react';
import { useFormik } from 'formik';
import './Style-Footer/ContactUs.css';
import Swal from 'sweetalert2';

const validate =(values) =>{
    const errors = {};
    /* Validation for Username */
    if(!values.username){
        errors.username = '*Required*';
        document.getElementById("validUsername").style.fill="#FF0000";
    }
    else if(!isNaN(values.username)){
        errors.username = '*Write alphabet only*';
        document.getElementById("validUsername").style.fill="#FF0000";
    }
    else if(values.username.length<5){
        errors.username = '*Minimum 5 character needed*';
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
    /* Validation for Subject */
    if(!values.subject){
        errors.subject = '*Required*';
        document.getElementById("validSubject").style.fill="#FF0000";
    }
    else{
        document.getElementById("validSubject").style.fill="#008000";
    }
    /* Validation for Email */
    if(!values.query){
        errors.query = '*Required*';
        document.getElementById("validQuery").style.fill="#FF0000";
    }
    else{
        document.getElementById("validQuery").style.fill="#008000";
    }
    return errors;
}

const ContactUs = () => {
    const formik = useFormik({
        initialValues:{
            username:'',
            email:'',
            subject:'',
            query:'',
        },
        validate,
        onSubmit:(values)=>{
            console.log(values);
        },
        onReset:()=>{
            Swal.fire("Your contact form is clear");
        },
    })
    return (
        <div className="container-fluid myContainerContainer">
            <div className="container w-100 py-3">
                <div className="container position-relative" style={{clipPath: "polygon(32% 6%, 63% 6%, 100% 0, 100% 100%, 95% 96%, 5% 96%, 0 100%, 0 0)"}}>
                    <img src="../../DevPic/BG-ContactUs01.jpg" alt="Background About Us Page" className="w-100" />
                    <div className="container position-absolute top-0 start-0 z-3 py-5 px-4 d-flex flex-row">
                        <div className="container-md ms-5 mt-5 text-light">
                            <div className="rounded-4 p-4 mt-4 myContactAddress">
                                <table width="100rem">
                                    <tr>
                                        <td className="fs-5 fw-bold text-uppercase">Address</td>
                                        <td className="fs-5 fw-semibold text-uppercase">:</td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td rowSpan="4"></td>
                                        <td rowSpan="4"></td>
                                        <td className="fs-5 fw-semibold text-capitalize">afistracate&nbsp;-&nbsp;your&nbsp;second&nbsp;home</td>
                                    </tr>
                                    <tr>
                                        <td className="fs-5 fw-semibold text-capitalize">rajpur&nbsp;sonarpur&nbsp;road</td>
                                    </tr>
                                    <tr>
                                        <td className="fs-5 fw-semibold text-capitalize">kolkata&nbsp;700150</td>
                                    </tr>
                                    <tr>
                                        <td><br /><br /></td>
                                    </tr>
                                    <tr>
                                        <td className="fs-5 fw-bold text-uppercase">Number</td>
                                        <td className="fs-5 fw-semibold text-uppercase">:</td>
                                        <td className="fs-5 fw-semibold text-capitalize">+91&nbsp;8159058136</td>
                                    </tr>
                                    <tr>
                                        <td className="fs-5 fw-bold text-uppercase">Email</td>
                                        <td className="fs-5 fw-semibold text-uppercase">:</td>
                                        <td className="fs-5 fw-semibold text-lowercase">afistracate@gmail.com</td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                        <form onSubmit={formik.handleSubmit} onReset={formik.handleReset} className="container-md mx-5 rounded-4 myContactInputField">
                            <div className="my-3">
                                <div className="input-group">
                                    <span className="input-group-text fs-5 fw-semibold text-capitalize" id="basic-addon1">Name</span>
                                    <input type="text" className="form-control fs-6 fw-semibold" name="username" value={formik.values.username} onInput={formik.handleChange} aria-label="Username" aria-describedby="basic-addon1" />
                                    <span className="input-group-text rounded bg-light">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#FF0000" id="validUsername" className="bi bi-check-square-fill px-0" viewBox="0 0 16 16">
                                            <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm10.03 4.97a.75.75 0 0 1 .011 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.75.75 0 0 1 1.08-.022z"/>
                                        </svg>
                                    </span>
                                </div>
                                <span className="text-danger">{formik.errors.username ? <em>{formik.errors.username}</em> : null}</span>
                            </div>
                            <div className="my-3">
                                <div className="input-group">
                                    <span className="input-group-text fs-5 fw-semibold text-capitalize" id="basic-addon1">Email</span>
                                    <input type="text" className="form-control fs-6 fw-semibold" name="email" value={formik.values.email} onInput={formik.handleChange} aria-label="Username" aria-describedby="basic-addon1" />
                                    <span className="input-group-text rounded bg-light">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#FF0000" id="validEmail" className="bi bi-check-square-fill px-0" viewBox="0 0 16 16">
                                            <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm10.03 4.97a.75.75 0 0 1 .011 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.75.75 0 0 1 1.08-.022z"/>
                                        </svg>
                                    </span>
                                </div>
                                <span className="text-danger">{formik.errors.email ? <em>{formik.errors.email}</em> : null}</span>
                            </div>
                            <div className="my-3">
                                <div className="input-group">
                                    <span className="input-group-text fs-5 fw-semibold text-capitalize" id="basic-addon1">Subject</span>
                                    <input type="text" className="form-control fs-6 fw-semibold" name="subject" value={formik.values.subject} onInput={formik.handleChange} aria-label="Username" aria-describedby="basic-addon1" />
                                    <span className="input-group-text rounded bg-light">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#FF0000" id="validSubject" className="bi bi-check-square-fill px-0" viewBox="0 0 16 16">
                                            <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm10.03 4.97a.75.75 0 0 1 .011 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.75.75 0 0 1 1.08-.022z"/>
                                        </svg>
                                    </span>
                                </div>
                                <span className="text-danger">{formik.errors.subject ? <em>{formik.errors.subject}</em> : null}</span>
                            </div>
                            <div className="my-3">
                                    <div className="input-group">
                                    <span className="input-group-text fs-5 fw-semibold text-capitalize">Query</span>
                                    <textarea className="form-control fs-5 fw-semibold" name="query" value={formik.values.query} onInput={formik.handleChange} aria-label="With textarea"></textarea>
                                    <span className="input-group-text rounded bg-light">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#FF0000" id="validQuery" className="bi bi-check-square-fill px-0" viewBox="0 0 16 16">
                                            <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm10.03 4.97a.75.75 0 0 1 .011 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.75.75 0 0 1 1.08-.022z"/>
                                        </svg>
                                    </span>
                                </div>
                                <span className="text-danger">{formik.errors.query ? <em>{formik.errors.query}</em> : null}</span>
                            </div>
                            <div className="mb-3 bg-transparent text-center">
                                <button type="submit" className="btn btn-success mx-4 fs-5 fw-semibold myContactButton">Submit</button>
                                <button type="reset" className="btn btn-danger mx-4 fs-5 fw-semibold myContactButton">Reset</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUs;
