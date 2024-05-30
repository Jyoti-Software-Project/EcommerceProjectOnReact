import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ProtectedRoute = (props) => {
    const navigate = useNavigate();
    const {Comp} = props;
    useEffect(()=>{
        const login = localStorage.getItem('login');
        if(!login){
            navigate('/Navbar/Login');
        }
    },[navigate]);
    return (
        <div>
            <Comp />
        </div>
    )
}

export default ProtectedRoute;
