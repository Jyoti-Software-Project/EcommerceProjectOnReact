import React from 'react';
import PropTypes from "prop-types";
import './Style-Home/ProductShow.css';

const ProductShow = (props) => {
    const fetchData=localStorage.getItem('product');

    return (
        <div className="container-fluid myProductShowContainer">
            <div className="container bg-transparent">
                <legend className="d-block fs-3 fw-semibold text-center text-white text-uppercase" style={{textShadow: "2px 2px 3px #0000FF"}}>{props.title}</legend>
                <div className="d-flex flex-column" style={{minHeight: "30rem",}}>
                    <div className="d-flex flex-row justify-content-evenly flex-nowrap p-3 my-3 rounded-4 myProductShowTable">
                        <div className="container-md d-flex flex-row justify-content-evenly">
                            <img src="/Products/Mobile/Mobile01.jpg" alt="Products" width="160rem" />
                            <img src="/Products/Mobile/Mobile01.jpg" alt="Products" width="160rem" />
                        </div>
                        <div className="container-md d-flex flex-column">
                            <p className="text-center">Product name : {fetchData}</p>
                            <p className="text-center">Product cost</p>
                            <p className="text-center">Product details</p>
                            <div className="container-md m-0 d-flex flex-row">
                                <button type="button" className="btn btn-success container-sm mx-2 fs-6 fw-semibold text-capitalize">Buy&nbsp;now</button>
                                <button type="button" className="btn btn-danger container-sm mx-2 fs-6 fw-semibold text-capitalize">Add&nbsp;to&nbsp;cart</button>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex flex-row justify-content-evenly flex-nowrap p-3 my-3 rounded-4 myProductShowTable">
                        <div className="container-md d-flex flex-row justify-content-evenly">
                            <img src="/Products/Mobile/Mobile01.jpg" alt="Products" width="160rem" />
                            <img src="/Products/Mobile/Mobile01.jpg" alt="Products" width="160rem" />
                        </div>
                        <div className="container-md d-flex flex-column">
                            <p className="text-center">Product name : {fetchData}</p>
                            <p className="text-center">Product cost</p>
                            <p className="text-center">Product details</p>
                            <div className="container-md m-0 d-flex flex-row">
                                <button type="button" className="btn btn-success container-sm mx-2 fs-6 fw-semibold text-capitalize">Buy&nbsp;now</button>
                                <button type="button" className="btn btn-danger container-sm mx-2 fs-6 fw-semibold text-capitalize">Add&nbsp;to&nbsp;cart</button>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex flex-row justify-content-evenly flex-nowrap p-3 my-3 rounded-4 myProductShowTable">
                        <div className="container-md d-flex flex-row justify-content-evenly">
                            <img src="/Products/Mobile/Mobile01.jpg" alt="Products" width="160rem" />
                            <img src="/Products/Mobile/Mobile01.jpg" alt="Products" width="160rem" />
                        </div>
                        <div className="container-md d-flex flex-column">
                            <p className="text-center">Product name : {fetchData}</p>
                            <p className="text-center">Product cost</p>
                            <p className="text-center">Product details</p>
                            <div className="container-md m-0 d-flex flex-row">
                                <button type="button" className="btn btn-success container-sm mx-2 fs-6 fw-semibold text-capitalize">Buy&nbsp;now</button>
                                <button type="button" className="btn btn-danger container-sm mx-2 fs-6 fw-semibold text-capitalize">Add&nbsp;to&nbsp;cart</button>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex flex-row justify-content-evenly flex-nowrap p-3 my-3 rounded-4 myProductShowTable">
                        <div className="container-md d-flex flex-row justify-content-evenly">
                            <img src="/Products/Mobile/Mobile01.jpg" alt="Products" width="160rem" />
                            <img src="/Products/Mobile/Mobile01.jpg" alt="Products" width="160rem" />
                        </div>
                        <div className="container-md d-flex flex-column">
                            <p className="text-center">Product name : {fetchData}</p>
                            <p className="text-center">Product cost</p>
                            <p className="text-center">Product details</p>
                            <div className="container-md m-0 d-flex flex-row">
                                <button type="button" className="btn btn-success container-sm mx-2 fs-6 fw-semibold text-capitalize">Buy&nbsp;now</button>
                                <button type="button" className="btn btn-danger container-sm mx-2 fs-6 fw-semibold text-capitalize">Add&nbsp;to&nbsp;cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

ProductShow.propTypes = {
    title: PropTypes.string.isRequired,
}

ProductShow.defaultProps = {
    title: "Product Name",
}

export default ProductShow;