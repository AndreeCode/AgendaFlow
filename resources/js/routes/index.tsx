import React from 'react';

import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import {createRoot} from 'react-dom/client';


import Main from '@/components/views/Principal';
import Login from '@/components/views/Auth/LoginPage'
import Register from '@/components/views/Auth/RegisterPage'
import ProtectedRoutes from '@/Auth/ProtectedRoutes';
import AdminDashboard from '@/components/views/Dashboard/AdminDashboard';
import HomePage from '@/components/views/Dashboard/Dashboard/HomePage';
import EmployeeDashboard from '@/components/views/Dashboard/employeeDashboard';
import ClientDashboard from '@/components/views/Dashboard/ClientDashboard';
import AdminPage from '@/components/views/Dashboard/Dashboard/AdminPage';

export default function App(){
    const [loading, setLoading] =useState(null);

    if (loading) return <div>Cargando...</div>
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main/>} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />


                <Route element={<ProtectedRoutes/>}>
                    <Route path='/admin' element={<AdminDashboard/>}>
                        <Route index element={<AdminPage/>}></Route>
                    </Route>
                    <Route path='/client' element={<ClientDashboard/>}>
                        <Route index element={<HomePage/>}></Route>
                    </Route>
                    <Route path='/employee' element={<EmployeeDashboard/>}>
                        <Route index element={<HomePage/>}></Route>
                    </Route>
                </Route>
                
                <Route path="*" element={<h1>404</h1>} />
            </Routes>
        </BrowserRouter>
    )
}

if(document.getElementById('App')){
  createRoot(document.getElementById('App')).render(<App/>);
}