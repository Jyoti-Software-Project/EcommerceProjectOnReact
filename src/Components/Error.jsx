import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className="bg-dark" style={{width: "100vw", height: "74.4vh",}}>
            <div style={{transform: `translate(0, 37.2vh)`,}}>
                <p className="fs-1 fw-semibold text-center text-light">404&nbsp;Page&nbsp;Not&nbsp;Found</p>
                <p className="fs-5 fw-semibold text-center text-light">Go&nbsp;to&nbsp;<Link to="/" className="text-decoration-none"><em>Home&nbsp;page</em></Link></p>
            </div>
        </div>
    )
}

export default Error;