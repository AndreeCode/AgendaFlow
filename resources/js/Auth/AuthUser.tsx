

import React from 'react';
import { useState } from 'react';


import { useNavigate } from 'react-router-dom';

export default function AuthUser(){
    const navigate=useNavigate();
    const getToken=()=>{
        const tokenString=sessionStorage.getItem('token');
        const token=JSON.parse(tokenString);
        return token;
    }
    const getUser=()=>{
        const tokenString=sessionStorage.getItem('user');
        const token=JSON.parse(tokenString);
        return token;
    }
    const getRole=()=>{
        const tokenString=sessionStorage.getItem('rol');
        const token=JSON.parse(tokenString);
        return token;
    }
 
    const [token,setToken]=useState(getToken());
    const [user,setUser]=useState(getUser());
    const [rol,setRole]=useState(getRole());

    const saveToken=(user, token,rol)=>{
        sessionStorage.setItem('user',JSON.stringify(user));
        sessionStorage.setItem('token',JSON.stringify(token));
        sessionStorage.setItem('rol',JSON.stringify(rol));

        setUser(user);
        setToken(token);
        setRole(rol);

        if(getRole()=="admin"){
            navigate("/admin");
        }
        if(getRole()=="employee"){
            navigate("/employee");
        }
        if(getRole()=="client"){
            navigate("/client");
        }

    }
    const getLogout=()=>{
        sessionStorage.clear();
        navigate("/login");
    }

    return {
        setToken:saveToken,
        token,
        user,
        rol,
        getToken,getRole,getUser,getLogout
    };
}