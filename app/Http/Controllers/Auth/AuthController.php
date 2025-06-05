<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function Login(){
        return view('Auth.Login');
    }
    public function Register(){
        return view("Auth.Register");
    }
}
