<?php

use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\Dashboard\DashboardController;
use App\Http\Controllers\HomeController;
use Illuminate\Support\Facades\Route;

Route::get('/', [HomeController::class,"index"]);

Route::get('/Login',[AuthController::class,'Login']);
Route::get('/Register',[AuthController::class,'Register']);

Route::get('Dashboard',[DashboardController::class,'index']);