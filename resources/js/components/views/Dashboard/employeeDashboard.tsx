
import AuthUser from '@/Auth/AuthUser';
import React,{useEffect} from 'react';
import { Outlet, useNavigate } from 'react-router-dom';


export default function EmployeeDashboard(){
    const {getRole}=AuthUser();
    const navigate=useNavigate();

    useEffect(()=>{
        if(getRole()!="employee"){
            navigate("/login");
        }
    },[]);
    return (
        <div>
            <h1>employee</h1>
            <Outlet/>
        </div>
    );
}