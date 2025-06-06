import React from 'react';

import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import {createRoot} from 'react-dom/client';


import Main from '@/components/views/Principal';
import Login from '@/components/views/Auth/LoginPage'
import Register from '@/components/views/Auth/RegisterPage'
import Dashboard from '@/components/views/Dashboard/DashboardRoot';


export default function App(){
    const [loading, setLoading] =useState(null);

    if (loading) return <div>Cargando...</div>
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Main/>} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/home" element={<Dashboard />} />
            
            <Route path="*" element={<h1>404</h1>} />
        </Routes>
        </BrowserRouter>
    )
}

if(document.getElementById('App')){
  createRoot(document.getElementById('App')).render(<App/>);
}