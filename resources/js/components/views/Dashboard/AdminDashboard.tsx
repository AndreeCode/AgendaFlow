
import AuthUser from '@/Auth/AuthUser';
import React,{useEffect} from 'react';
import { Outlet, useNavigate } from 'react-router-dom';


export default function AdminDashboard(){
    const {getRole}=AuthUser();
    const navigate=useNavigate();

    useEffect(()=>{
        if(getRole()!="admin"){
            navigate("/login");
        }
    },[]);
    return (
        <div>
            <Outlet/>
        </div>
    );
}