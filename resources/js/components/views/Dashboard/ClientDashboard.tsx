
import AuthUser from '@/Auth/AuthUser';
import React,{useEffect} from 'react';
import { Outlet, useNavigate } from 'react-router-dom';


export default function ClientDashboard(){
    const {getRole}=AuthUser();
        const navigate=useNavigate();
    
        useEffect(()=>{
            if(getRole()!="client"){
                navigate("/login");
            }
        },[]);
    return (
        <div>
            <h1>client</h1>
            <Outlet/>
        </div>
    );
}