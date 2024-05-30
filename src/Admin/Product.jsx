import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Swal from 'sweetalert2';
import './Style-Admin/Product.css';
import { useNavigate } from 'react-router-dom';

const validate =(values) =>{
    const errors = {};
    /* Validation for ProductName */
    if(!values.productName){
        errors.productName = '*Required*';
        document.getElementById("validProductName").style.fill="#FF0000";
    }
    else{
        document.getElementById("validProductName").style.fill="#008000";
    }
    /* Validation for Name input field */
    if(!values.name){
        errors.name = '*Required*';
    }
    /* Validation for Cost input field */
    if(!values.cost){
        errors.cost = '*Required*';
    }
    /* Validation for Color input field */
    if(!values.color){
        errors.color = '*Required*';
    }
    /* Validation for Material input field */
    if(!values.material){
        errors.material = '*Required*';
    }
    /* Validation for Weight input field */
    if(!values.weight){
        errors.weight = '*Required*';
    }
    /* Validation for Ram input field */
    if(!values.ram){
        errors.ram = '*Required*';
    }
    /* Validation for Ram input field */
    if(!values.rom){
        errors.rom = '*Required*';
    }
    /* Validation for Ram input field */
    if(!values.battery){
        errors.battery = '*Required*';
    }
    /* Validation for Ram input field */
    if(!values.operatingSystem){
        errors.operatingSystem = '*Required*';
    }
    /* Validation for Ram input field */
    if(!values.waterResistant){
        errors.waterResistant = '*Required*';
    }
    /* Validation for Ram input field */
    if(!values.caseShape){
        errors.caseShape = '*Required*';
    }
    return errors;
}
/* Validation for Image */
const validationSchema = Yup.object().shape({
    file: Yup.mixed()
      .required('*Required*')
      .test('fileFormat', '*File format must be JPG or JPEG*', (value) =>
        value ? ['image/jpeg', 'image/Jpeg', 'image/JPEG', 'image/jpg', 'image/Jpg', 'image/JPG'].includes(value.type) : false
      ),
  });

const Product = () => {
    const navigate=useNavigate();
    useEffect(()=>{
        const adminLogin=localStorage.getItem('admin-login');
        if(!adminLogin){
            navigate('/Admin/AdminLogin');
        }
        else{
            navigate('/Admin/Product');
        }
    });
    const handleAdminLogout=()=>{
        localStorage.removeItem('admin-login');
    }

    const formik = useFormik({
        initialValues:{
            productName:'',
            name:'',
            cost:'',
            color:'',
            material:'',
            weight:'',
            ram:'',
            rom:'',
            battery:'',
            operatingSystem:'',
            waterResistant:'',
            caseShape:'',
            Image:'',
        },
        validate,
        validationSchema,
        onSubmit:(values)=>{
            console.log(values);
            // Swal.fire(JSON.stringify(values.productName));
        },
        onReset:()=>{
            Swal.fire("Your product details form is clear");
        },
    });

    const handleAddItem=()=>{
        const file = document.getElementById("file").files[0];
        if(formik.values.name && formik.values.cost && formik.values.color && file){
            const extention=file.name.split(".");
            if(extention[1].toLowerCase()==="jpg" || extention[1].toLowerCase()==="jpeg"){
                switch(formik.values.productName){
                    case "Bags_luggage":
                        if(formik.values.weight && formik.values.waterResistant){
                            Swal.fire("Your luggage product is added");
                        }
                        break;
                    case "Cloth":
                        if(formik.values.material && formik.values.weight){
                            Swal.fire("Your cloth product is added");
                        }
                        break;
                    case "Computer":
                        if(formik.values.ram && formik.values.rom && formik.values.battery && formik.values.operatingSystem){
                            Swal.fire("Your computer product is added");
                        }
                        break;
                    case "Footware":
                        if(formik.values.weight){
                            Swal.fire("Your footware product is added");
                        }
                        break;
                    case "Gym":
                        if(formik.values.material && formik.values.weight){
                            Swal.fire("Your gym product is added");
                        }
                        break;
                    case "Mobile":
                        if(formik.values.ram && formik.values.rom && formik.values.battery && formik.values.operatingSystem){
                            Swal.fire("Your mobile product is added");
                        }
                        break;
                    case "Sport":
                        if(formik.values.material){
                            Swal.fire("Your sport product is added");
                        }
                        break;
                    case "Watch":
                        if(formik.values.material && formik.values.caseShape){
                            Swal.fire("Your watch product is added");
                        }
                        break;
                    default:
                        break;
                }
            }
        }
    }

    const [bags_luggage, setBags_luggage]=useState(false);
    const [cloth, setCloth]=useState(false);
    const [computer, setComputer]=useState(false);
    const [footware, setFootware]=useState(false);
    const [gym, setGym]=useState(false);
    const [mobile, setMobile]=useState(false);
    const [sport, setSport]=useState(false);
    const [watch, setWatch]=useState(false);
    useEffect(()=>{
        if(formik.values.productName==="Bags_luggage"){
            setBags_luggage(true);
        }
        else{
            setBags_luggage(false);
        }
        if(formik.values.productName==="Cloth"){
            setCloth(true);
        }
        else{
            setCloth(false);
        }
        if(formik.values.productName==="Computer"){
            setComputer(true);
        }
        else{
            setComputer(false);
        }
        if(formik.values.productName==="Footware"){
            setFootware(true);
        }
        else{
            setFootware(false);
        }
        if(formik.values.productName==="Gym"){
            setGym(true);
        }
        else{
            setGym(false);
        }
        if(formik.values.productName==="Mobile"){
            setMobile(true);
        }
        else{
            setMobile(false);
        }
        if(formik.values.productName==="Sport"){
            setSport(true);
        }
        else{
            setSport(false);
        }
        if(formik.values.productName==="Watch"){
            setWatch(true);
        }
        else{
            setWatch(false);
        }
    });

    const myLable={
        minWidth: "5rem",
    }

    return (
        <div className="container-fluid py-4 bg-transparentmy myProductContainer">
            <form onSubmit={formik.handleSubmit} onReset={formik.handleReset}>
                <div className="container p-5 rounded-4 mySecondProductContainer">
                    <div className="" align="right">
                        <button className="btn btn-danger mx-2" onClick={handleAdminLogout}>Admin&nbsp;Logout</button>
                    </div>
                    <div className="py-2">
                        <label htmlFor="productName" className="form-label text-white text-uppercase fs-6 fw-semibold">Select&nbsp;Your&nbsp;Product&nbsp;Catagory</label>
                        <div className="input-group col-sm-10">
                            <select className="form-select text-capitalize fs-6 fw-semibold" id="productName" name="productName" value={formik.values.productName} onInput={formik.handleChange} aria-label="Select menu bar">
                                <option className="text-capitalize fs-6 fw-semibold text-primary" value="">Select&nbsp;Product&nbsp;Name</option>
                                <option className="text-uppercase fs-6 fw-semibold" value="Bags_luggage">Bags_luggage</option>
                                <option className="text-uppercase fs-6 fw-semibold" value="Cloth">Cloth</option>
                                <option className="text-uppercase fs-6 fw-semibold" value="Computer">Computer</option>
                                <option className="text-uppercase fs-6 fw-semibold" value="Footware">Footware</option>
                                <option className="text-uppercase fs-6 fw-semibold" value="Gym">Gym</option>
                                <option className="text-uppercase fs-6 fw-semibold" value="Mobile">Mobile</option>
                                <option className="text-uppercase fs-6 fw-semibold" value="Sport">Sport</option>
                                <option className="text-uppercase fs-6 fw-semibold" value="Watch">Watch</option>
                            </select>
                            <span className="input-group-text rounded bg-light">
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#FF0000" id="validProductName" className="bi bi-check-square-fill px-0" viewBox="0 0 16 16">
                                    <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm10.03 4.97a.75.75 0 0 1 .011 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.75.75 0 0 1 1.08-.022z"/>
                                </svg>
                            </span>
                        </div>
                        <span className="text-warning">{formik.errors.productName ? <em>{formik.errors.productName}</em> : null}</span>
                    </div>
                    <div className="container">
                        <legend className="text-center text-uppercase text-white my-4 fs-5 fw-bold"><ins>{formik.values.productName ? `add ${formik.values.productName} product` : null}</ins></legend>
                        { (bags_luggage || cloth || computer || footware || gym || mobile || sport || watch) && 
                            <div className="mb-3">
                                <div className="input-group">
                                    <span className="input-group-text fs-6 fw-semibold" style={myLable} id="basic-addonName">{formik.values.productName}&nbsp;Name</span>
                                    <input type="text" className="form-control fs-6 fw-semibold" name="name" value={formik.values.name} onInput={formik.handleChange} placeholder="Enter product name" aria-label="Name" aria-describedby="basic-addonName" />
                                </div>
                                <span className="text-warning">{formik.errors.name ? <em>{formik.errors.name}</em> : null}</span>
                            </div>
                        }
                        { (bags_luggage || cloth || computer || footware || gym || mobile || sport || watch) && 
                            <div className="mb-3">
                                <div className="input-group">
                                    <span className="input-group-text fs-6 fw-semibold" style={myLable} id="basic-addonCost">{formik.values.productName}&nbsp;Cost</span>
                                    <input type="text" className="form-control fs-6 fw-semibold" name="cost" value={formik.values.cost} onInput={formik.handleChange} placeholder="Enter product cost" aria-label="Cost" aria-describedby="basic-addonCost" />
                                </div>
                                <span className="text-warning">{formik.errors.cost ? <em>{formik.errors.cost}</em> : null}</span>
                            </div>
                        }
                        { (bags_luggage || cloth || computer || footware || gym || mobile || sport || watch) && 
                            <div className="mb-3">
                                <div className="input-group" id="Color">
                                    <span className="input-group-text fs-6 fw-semibold" style={myLable} id="basic-addonColor">{formik.values.productName}&nbsp;Color</span>
                                    <input type="text" className="form-control fs-6 fw-semibold" name="color" value={formik.values.color} onInput={formik.handleChange} placeholder="Enter Product color" aria-label="Color" aria-describedby="basic-addonColor" />
                                </div>
                                <span className="text-warning">{formik.errors.color ? <em>{formik.errors.color}</em> : null}</span>
                            </div>
                        }
                        { (cloth || gym || sport || watch) && 
                            <div className="mb-3">
                                <div className="input-group" id="Material">
                                    <span className="input-group-text fs-6 fw-semibold" style={myLable} id="basic-addonMaterial">{formik.values.productName}&nbsp;Material</span>
                                    <input type="text" className="form-control fs-6 fw-semibold" name="material" value={formik.values.material} onInput={formik.handleChange} placeholder="Enter Product type" aria-label="Material" aria-describedby="basic-addonMaterial" />
                                </div>
                                <span className="text-warning">{formik.errors.material ? <em>{formik.errors.material}</em> : null}</span>
                            </div>
                        }
                        { (bags_luggage || cloth || footware || gym) && 
                            <div className="mb-3">
                                <div className="input-group" id="Weight">
                                    <span className="input-group-text fs-6 fw-semibold" style={myLable} id="basic-addonWeight">{formik.values.productName}&nbsp;Weight</span>
                                    <input type="text" className="form-control fs-6 fw-semibold" name="weight" value={formik.values.weight} onInput={formik.handleChange} placeholder="Enter display type" aria-label="Weight" aria-describedby="basic-addonWeight" />
                                </div>
                                <span className="text-warning">{formik.errors.weight ? <em>{formik.errors.weight}</em> : null}</span>
                            </div>
                        }
                        { (computer || mobile) && 
                            <div className="mb-3">
                                <div className="input-group" id="Ram">
                                    <span className="input-group-text fs-6 fw-semibold" style={myLable} id="basic-addonRam">{formik.values.productName}&nbsp;Ram</span>
                                    <input type="text" className="form-control fs-6 fw-semibold" name="ram" value={formik.values.ram} onInput={formik.handleChange} placeholder="Enter product shape" aria-label="Ram" aria-describedby="basic-addonRam" />
                                </div>
                                <span className="text-warning">{formik.errors.ram ? <em>{formik.errors.ram}</em> : null}</span>
                            </div>
                        }
                        { (computer || mobile) && 
                            <div className="mb-3">
                                <div className="input-group" id="Rom">
                                    <span className="input-group-text fs-6 fw-semibold" style={myLable} id="basic-addonRom">{formik.values.productName}&nbsp;Rom</span>
                                    <input type="text" className="form-control fs-6 fw-semibold" name="rom" value={formik.values.rom} onInput={formik.handleChange} placeholder="Enter product shape" aria-label="Rom" aria-describedby="basic-addonRom" />
                                </div>
                                <span className="text-warning">{formik.errors.rom ? <em>{formik.errors.rom}</em> : null}</span>
                            </div>
                        }
                        { (computer || mobile) && 
                            <div className="mb-3">
                                <div className="input-group" id="Battery">
                                    <span className="input-group-text fs-6 fw-semibold" style={myLable} id="basic-addonBattery">{formik.values.productName}&nbsp;Battery</span>
                                    <input type="text" className="form-control fs-6 fw-semibold" name="battery" value={formik.values.battery} onInput={formik.handleChange} placeholder="Enter product shape" aria-label="Battery" aria-describedby="basic-addonBattery" />
                                </div>
                                <span className="text-warning">{formik.errors.battery ? <em>{formik.errors.battery}</em> : null}</span>
                            </div>
                        }
                        { (computer || mobile) && 
                            <div className="mb-3">
                                <div className="input-group" id="Operating_System">
                                    <span className="input-group-text fs-6 fw-semibold" style={myLable} id="basic-addonOperatingSystem">{formik.values.productName}&nbsp;Operating&nbsp;System</span>
                                    <input type="text" className="form-control fs-6 fw-semibold" name="operatingSystem" value={formik.values.operatingSystem} onInput={formik.handleChange} placeholder="Enter product shape" aria-label="OperatingSystem" aria-describedby="basic-addonOperatingSystem" />
                                </div>
                                <span className="text-warning">{formik.errors.operatingSystem ? <em>{formik.errors.operatingSystem}</em> : null}</span>
                            </div>
                        }
                        { (bags_luggage) && 
                            <div className="mb-3">
                                <div className="input-group" id="Water_Resistant">
                                    <span className="input-group-text fs-6 fw-semibold" style={myLable} id="basic-addonWaterResistant">{formik.values.productName}&nbsp;Water&nbsp;Resistant</span>
                                    <input type="text" className="form-control fs-6 fw-semibold" name="waterResistant" value={formik.values.waterResistant} onInput={formik.handleChange} placeholder="Enter product shape" aria-label="WaterResistant" aria-describedby="basic-addonWaterResistant" />
                                </div>
                                <span className="text-warning">{formik.errors.waterResistant ? <em>{formik.errors.waterResistant}</em> : null}</span>
                            </div>
                        }
                        { (watch) && 
                            <div className="mb-3">
                                <div className="input-group" id="Case_Shape">
                                    <span className="input-group-text fs-6 fw-semibold" style={myLable} id="basic-addonCaseShape">{formik.values.productName}&nbsp;Case&nbsp;Shape</span>
                                    <input type="text" className="form-control fs-6 fw-semibold" name="caseShape" value={formik.values.caseShape} onInput={formik.handleChange} placeholder="Enter product shape" aria-label="CaseShape" aria-describedby="basic-addonCaseShape" />
                                </div>
                                <span className="text-warning">{formik.errors.caseShape ? <em>{formik.errors.caseShape}</em> : null}</span>
                            </div>
                        }
                        { (bags_luggage || cloth || computer || footware || gym || mobile || sport || watch) && 
                            <div className="mb-3">
                                <div className="input-group">
                                    <span className="input-group-text fs-6 fw-semibold" style={myLable} id="basic-addonImage">{formik.values.productName}&nbsp;Image</span>
                                    <input type="file" className="form-control fs-6 fw-semibold" id="file" onChange={(event) => { formik.setFieldValue('file', event.currentTarget.files[0]);}} aria-label="Image" aria-describedby="basic-addonImage" />
                                </div>
                                <span className="text-warning">{formik.errors.file ? <em>{formik.errors.file}</em> : null}</span>
                            </div>
                        }
                    </div>
                    { (bags_luggage || cloth || computer || footware || gym || mobile || sport || watch) && 
                        <div className="container d-flex flex-row justify-content-evenly">
                            <button type="submit" className="btn btn-success mx-3 fs-6 fw-semibold text-uppercase" onClick={handleAddItem}>Add&nbsp;{formik.values.productName}</button>
                            <button type="reset" className="btn btn-danger mx-3 fs-6 fw-semibold text-uppercase">reset</button>
                        </div>
                    }
                </div>
            </form>
        </div>
     )
}

export default Product;