

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
        const userString=sessionStorage.getItem('user');
        const user=JSON.parse(userString);
        return user;
    }
    const getRole=()=>{
        const roleString=sessionStorage.getItem('role');
        const role=JSON.parse(roleString);
        return role;
    }
 
    const [token,setToken]=useState(getToken());
    const [user,setUser]=useState(getUser());
    const [role,setRole]=useState(getRole());

    

    const saveToken=(user, token,role)=>{
        sessionStorage.setItem('user',JSON.stringify(user));
        sessionStorage.setItem('token',JSON.stringify(token));
        sessionStorage.setItem('role',JSON.stringify(role));

        setUser(user);
        setToken(token);
        setRole(role);

        redirectRole(getRole());

    }

    const redirectRole=(role:String)=>{
        if(role==="admin"){

            navigate("/admin");
        }
        if(role==="employee"){
            navigate("/employee");
        }
        if(role==="client"){
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
        role,
        getToken,getRole,getUser,getLogout,
        redirectRole
    };
}