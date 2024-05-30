import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import "./Style-Navbar/Login.css";
import Swal from "sweetalert2";

const validate =(values) =>{
    const errors = {};
    /* Validation for Email */
    if(!values.email){
        errors.email = "*Required*";
        document.getElementById("validEmail").style.fill="#FF0000";
    }
    else if(values.email.indexOf("@")<=0){
        errors.email = "*Invalid position of @*";
        document.getElementById("validEmail").style.fill="#FF0000";
    }
    else if(values.email.charAt(values.email.length-4)!=="." && values.email.charAt(values.email.length-3)!=="."){
        errors.email = "*Invalid position of .*";
        document.getElementById("validEmail").style.fill="#FF0000";
    }
    else{
        document.getElementById("validEmail").style.fill="#008000";
    }
    /* Validation for Password */
    if(!values.password){
        errors.password = "*Required*";
        document.getElementById("validPassword").style.fill="#FF0000";
    }
    else if(values.password.search(/[0-9]/)===-1){
        errors.password = "*Minimum 1 numeric character needed*";
        document.getElementById("validPassword").style.fill="#FF0000";
    }
    else if(values.password.search(/[a-z]/)===-1){
        errors.password = "*Minimum 1 lower case charecte needed*";
        document.getElementById("validPassword").style.fill="#FF0000";
    }
    else if(values.password.search(/[A-Z]/)===-1){
        errors.password = "*Minimum 1 upper case character needed*";
        document.getElementById("validPassword").style.fill="#FF0000";
    }
    else if(values.password.search(/[~/!/@/#/$/%/^/&/*/+/-/_/?]/)===-1){
        errors.password = "*Minimum 1 special character needed*";
        document.getElementById("validPassword").style.fill="#FF0000";
    }
    else if(values.password.length<8){
        errors.password = "*Minimum 8 character needed*";
        document.getElementById("validPassword").style.fill="#FF0000";
    }
    else{
        document.getElementById("validPassword").style.fill="#008000";
    }
    return errors;
}

const Login = () => {
    const formik = useFormik({
        initialValues:{
            email:"",
            password:"",
        },
        validate,
        onSubmit:(values)=>{
            console.log(values);
        },
        onReset:()=>{
            Swal.fire("Your login form is clear");
        },
    });

    /* Toggle Pasword */
    const togglePassword =() => {
        let pwdField = document.getElementById("inputPassword");
        if (pwdField.type === "password") {
            pwdField.type = "text";
        }
        else {
            pwdField.type = "password";
        }
    }

    /* Value send to local storage */
    const navigate = useNavigate();
    const handleLogin=()=>{
        if(formik.values.email && formik.values.password){
            localStorage.setItem("login", true);
            navigate("/");
        }
    }

    return (
        <div className="container-fluid px-0 py-5 myCustomerLoginContainer user-select-none" style={{minHeight: "27rem"}}>
            <form onSubmit={formik.handleSubmit} onReset={formik.handleReset}>
                <table className="container bg-secondary-subtle rounded-4 mySecondCustomerLoginContainer">
                    <thead>
                        <tr>
                            <th colSpan="3" className="text-center pb-3 pt-5">
                                <div className="position-relative z-3 rounded-circle mx-auto" style={{width: "9rem", boxShadow: "0 0 20px #FFFFFF"}}>
                                    <svg className="position-relative top-0 myCustomerLoginIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" fill="rgba(246, 254, 2, 1)" height="75" width="125" transform="scale(-1, 1)">
                                        <path d="M423.3 440.7c0 25.3-20.3 45.6-45.6 45.6s-45.8-20.3-45.8-45.6 20.6-45.8 45.8-45.8c25.4 0 45.6 20.5 45.6 45.8zm-253.9-45.8c-25.3 0-45.6 20.6-45.6 45.8s20.3 45.6 45.6 45.6 45.8-20.3 45.8-45.6-20.5-45.8-45.8-45.8zm291.7-270C158.9 124.9 81.9 112.1 0 25.7c34.4 51.7 53.3 148.9 373.1 144.2 333.3-5 130 86.1 70.8 188.9 186.7-166.7 319.4-233.9 17.2-233.9z" id="mainIconPathAttribute"></path>
                                    </svg>
                                    <span className="fs-4 fw-semibold fst-italic myCustomerLoginName position-absolute">Afistracate</span>
                                </div>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style={{lineHeight: "9vh"}}><br /></td>
                        </tr>
                        <tr>
                            <td className="ps-5 py-4"><label htmlFor="staticEmail" className="col-sm-2 col-form-label fs-5 fw-semibold text-light">Email<span className="text-light">*</span></label></td>
                            <td className="fs-4 fw-semibold py-4 px-2 text-light">:</td>
                            <td className="pe-5 py-4">
                                <div className="input-group col-sm-10">
                                    <span className="input-group-text rounded bg-light">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#000000" className="bi bi-envelope-at-fill" viewBox="0 0 16 16">
                                            <path d="M2 2A2 2 0 0 0 .05 3.555L8 8.414l7.95-4.859A2 2 0 0 0 14 2H2Zm-2 9.8V4.698l5.803 3.546L0 11.801Zm6.761-2.97-6.57 4.026A2 2 0 0 0 2 14h6.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586l-1.239-.757ZM16 9.671V4.697l-5.803 3.546.338.208A4.482 4.482 0 0 1 12.5 8c1.414 0 2.675.652 3.5 1.671Z"/>
                                            <path d="M15.834 12.244c0 1.168-.577 2.025-1.587 2.025-.503 0-1.002-.228-1.12-.648h-.043c-.118.416-.543.643-1.015.643-.77 0-1.259-.542-1.259-1.434v-.529c0-.844.481-1.4 1.26-1.4.585 0 .87.333.953.63h.03v-.568h.905v2.19c0 .272.18.42.411.42.315 0 .639-.415.639-1.39v-.118c0-1.277-.95-2.326-2.484-2.326h-.04c-1.582 0-2.64 1.067-2.64 2.724v.157c0 1.867 1.237 2.654 2.57 2.654h.045c.507 0 .935-.07 1.18-.18v.731c-.219.1-.643.175-1.237.175h-.044C10.438 16 9 14.82 9 12.646v-.214C9 10.36 10.421 9 12.485 9h.035c2.12 0 3.314 1.43 3.314 3.034v.21Zm-4.04.21v.227c0 .586.227.8.581.8.31 0 .564-.17.564-.743v-.367c0-.516-.275-.708-.572-.708-.346 0-.573.245-.573.791Z"/>
                                        </svg>
                                    </span>
                                    <input type="text" className="form-control fs-6 fw-semibold" id="staticEmail" name="email" value={formik.values.email} onInput={formik.handleChange} aria-label="Email" autoFocus />
                                    <span className="input-group-text rounded bg-light">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#FF0000" id="validEmail" className="bi bi-check-square-fill px-0" viewBox="0 0 16 16">
                                            <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm10.03 4.97a.75.75 0 0 1 .011 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.75.75 0 0 1 1.08-.022z"/>
                                        </svg>
                                    </span>
                                </div>
                                <span className="text-warning">{formik.errors.email ? <em>{formik.errors.email}</em> : null}</span>
                            </td>
                        </tr>
                        <tr>
                            <td className="ps-5 py-4"><label htmlFor="inputPassword" className="col-sm-2 col-form-label fs-5 fw-semibold text-light">Password<span className="text-light">*</span></label></td>
                            <td className="fs-4 fw-semibold py-4 px-2 text-light">:</td>
                            <td className="pe-5 py-4">
                                <div className="input-group col-sm-10">
                                    
                                    <span className="input-group-text rounded bg-light">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#000000" className="bi bi-shield-lock-fill px-0" viewBox="0 0 16 16">
                                            <path fillRule="evenodd" d="M8 0c-.69 0-1.843.265-2.928.56-1.11.3-2.229.655-2.887.87a1.54 1.54 0 0 0-1.044 1.262c-.596 4.477.787 7.795 2.465 9.99a11.777 11.777 0 0 0 2.517 2.453c.386.273.744.482 1.048.625.28.132.581.24.829.24s.548-.108.829-.24a7.159 7.159 0 0 0 1.048-.625 11.775 11.775 0 0 0 2.517-2.453c1.678-2.195 3.061-5.513 2.465-9.99a1.541 1.541 0 0 0-1.044-1.263 62.467 62.467 0 0 0-2.887-.87C9.843.266 8.69 0 8 0zm0 5a1.5 1.5 0 0 1 .5 2.915l.385 1.99a.5.5 0 0 1-.491.595h-.788a.5.5 0 0 1-.49-.595l.384-1.99A1.5 1.5 0 0 1 8 5z"/>
                                        </svg>
                                    </span>
                                    <input type="password" className="form-control fs-6 fw-semibold" id="inputPassword" name="password" value={formik.values.password} onInput={formik.handleChange} aria-label="Password" />
                                    <span className="input-group-text rounded bg-light">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#FF0000" id="validPassword" className="bi bi-check-square-fill px-0" viewBox="0 0 16 16">
                                            <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm10.03 4.97a.75.75 0 0 1 .011 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.75.75 0 0 1 1.08-.022z"/>
                                        </svg>
                                    </span>
                                </div>
                                <span className="text-warning">{formik.errors.password ? <em>{formik.errors.password}</em> : null}</span>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="2" className="py-4 px-2"></td>
                            <td className="pe-5 py-4">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" onClick={togglePassword} />
                                    <label className="form-check-label fs-5 fw-semibold text-light" htmlFor="flexCheckChecked">Show&nbsp;password</label>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th colSpan="3" className="text-center py-3">
                                <button type="submit" className="btn btn-success mx-3 fs-5 fw-semibold" style={{boxShadow: "0 0 20px #FFFFFF"}} onClick={handleLogin}>Login</button>
                                <button type="reset" className="btn btn-danger mx-3 fs-5 fw-semibold" style={{boxShadow: "0 0 20px #FFFFFF"}}>Reset</button>
                            </th>
                        </tr>
                        <tr>
                            <th colSpan="3" className="text-center pt-3 pb-5">
                                <label htmlFor="CustomerRegistrationPage" className="fs-5 fw-semibold text-light">Don't&nbsp;Have&nbsp;an&nbsp;account&nbsp;?&nbsp;</label>
                                <NavLink to="/Navbar/Register" className="fs-5 fw-semibold text-decoration-none myCustomerRegisterLink" id="CustomerRegistrationPage">Register</NavLink>
                            </th>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    )
}

export default Login;
