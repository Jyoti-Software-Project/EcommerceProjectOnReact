import React from 'react';
import './Style-Footer/Privacy.css';

const Privacy = () => {
    return (
        <div className="container-fluid" style={{backgroundImage: `url("../../BG-Adv/BG-Body01.jpg")`, backgroundSize: "cover", backgroundRepeat: "no-repeat"}}>
            <div className="container bg-transparent p-5">
                <span className="fs-6 fw-semibold fst-italic text-dark">Updated <span className="text-primary">May 2nd, 2023</span></span>
                <div className="container">
                    <p className="fs-3 text-primary text-center"><ins><strong>Privacy policy</strong></ins></p>
                    <p className="fs-5 fw-semibold text-dark">We take the privacy of our users very seriously and are committed to protecting their personal information. This privacy policy outlines the types of information we collect, how we use it, and how we protect it.</p>
                    <dl>
                        <dt className="fs-5 fw-semibold text-primary"><ins><em>Information we collect&nbsp;:</em></ins></dt>
                        <dd className="fs-6 fw-semibold text-dark">We collect personal information such as name, email address, shipping and billing address, phone number, and payment information when users make a purchase or create an account on our website.</dd>
                        
                        <dt className="fs-5 fw-semibold text-primary"><ins><em>How we use the information&nbsp;:</em></ins></dt>
                        <dd className="fs-6 fw-semibold text-dark">We use the information collected to process orders, provide customer support, and improve the user experience. We may also use the information to send promotional offers and updates about our products and services.</dd>
                        
                        <dt className="fs-5 fw-semibold text-primary"><ins><em>Sharing information&nbsp;:</em></ins></dt>
                        <dd className="fs-6 fw-semibold text-dark">We do not share user information with third-party organizations unless necessary for fulfilling orders, providing customer support, or legal reasons.</dd>
                        
                        <dt className="fs-5 fw-semibold text-primary"><ins><em>Security measures&nbsp;:</em></ins></dt>
                        <dd className="fs-6 fw-semibold text-dark">We use various security measures to protect user information, such as SSL encryption, firewalls, and secure servers. We also regularly update our systems and review our policies to ensure they are up-to-date.</dd>
                        
                        <dt className="fs-5 fw-semibold text-primary"><ins><em>Cookies&nbsp;:</em></ins></dt>
                        <dd className="fs-6 fw-semibold text-dark">We use cookies to improve the user experience, personalize content, and track website usage. Users can choose to disable cookies in their browser settings.</dd>
                        
                        <dt className="fs-5 fw-semibold text-primary"><ins><em>Changes to privacy policy&nbsp;:</em></ins></dt>
                        <dd className="fs-6 fw-semibold text-dark">We may update our privacy policy from time to time. Users will be notified of any changes and can review the updated policy on our website.</dd>
                    </dl>
                </div>
            </div>
        </div>
    )
}

export default Privacy;
