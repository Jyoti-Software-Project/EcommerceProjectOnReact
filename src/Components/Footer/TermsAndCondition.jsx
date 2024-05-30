import React from 'react';
import './Style-Footer/TermsAndCondition.css';

const TermsAndCondition = () => {
    return (
        <div className="container-fluid" style={{backgroundImage: `url("../../BG-Adv/BG-Body01.jpg")`, backgroundSize: "cover", backgroundRepeat: "no-repeat"}}>
            <div className="container bg-transparent p-5">
                <span className="fs-6 fw-semibold fst-italic text-dark">Updated <span className="text-primary">May 2nd, 2023</span></span>
                <div className="container">
                      <p className="fs-3 text-primary text-center"><ins><strong>Terms&nbsp;&&nbsp;Conditions</strong></ins></p>
                      <dl>
                          <dt className="fs-5 fw-semibold text-primary"><ins><em>Website&nbsp;usage&nbsp;:</em></ins></dt>
                          <dd className="fs-6 fw-semibold text-dark">This section outlines the terms and conditions for accessing and using the e-commerce website.</dd>
                          
                          <dt className="fs-5 fw-semibold text-primary"><ins><em>Products&nbsp;and&nbsp;services&nbsp;:</em></ins></dt>
                          <dd className="fs-6 fw-semibold text-dark">This section covers the terms and conditions for purchasing products and services through the website. It includes details such as pricing, payment methods, delivery, returns, refunds, and exchanges.</dd>
                          
                          <dt className="fs-5 fw-semibold text-primary"><ins><em>User&nbsp;account&nbsp;:</em></ins></dt>
                          <dd className="fs-6 fw-semibold text-dark">This section outlines the terms and conditions for creating and using a user account on the e-commerce website, including security, password protection, and user responsibilities.</dd>
                          
                          <dt className="fs-5 fw-semibold text-primary"><ins><em>Intellectual&nbsp;property&nbsp;:</em></ins></dt>
                          <dd className="fs-6 fw-semibold text-dark">This section explains the ownership and usage rights of the website's intellectual property, including copyrights, trademarks, and patents.</dd>
                          
                          <dt className="fs-5 fw-semibold text-primary"><ins><em>Liability&nbsp;:</em></ins></dt>
                          <dd className="fs-6 fw-semibold text-dark">This section outlines the e-commerce website's liability limitations and disclaimers, including those related to product defects, delivery delays, and other issues.</dd>
                          
                          <dt className="fs-5 fw-semibold text-primary"><ins><em>Privacy&nbsp;policy&nbsp;:</em></ins></dt>
                          <dd className="fs-6 fw-semibold text-dark">This section explains how the e-commerce website collects, uses, and protects user data, including personal information and payment details.</dd>
                          
                          <dt className="fs-5 fw-semibold text-primary"><ins><em>Governing&nbsp;law&nbsp;and&nbsp;jurisdiction&nbsp;:</em></ins></dt>
                          <dd className="fs-6 fw-semibold text-dark">This section outlines the legal jurisdiction and governing law that applies to the e-commerce website and any disputes that may arise.</dd>
                          
                          <dt className="fs-5 fw-semibold text-primary"><ins><em>Changes&nbsp;to&nbsp;terms&nbsp;and&nbsp;conditions&nbsp;:</em></ins></dt>
                          <dd className="fs-6 fw-semibold text-dark">This section explains how and when the e-commerce website may change its terms and conditions and how users will be notified.</dd>
                      </dl>
                </div>
            </div>
        </div>
    )
}

export default TermsAndCondition;
