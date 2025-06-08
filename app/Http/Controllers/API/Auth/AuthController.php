<?php

namespace App\Http\Controllers\API\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use App\Http\Requests\Auth\RegisterRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function register(RegisterRequest $request)
    {
        $input=$request->validated();

        $input['password']=Hash::make( $input['password']);
        
        $user=User::create($input);
        $user->assignRole('client');

        
        return response()->json([
            "message"=>"Cuenta creada correctamente"
        ],200);    
    }
    
    public function login(LoginRequest $request){
       
        
       if (Auth::attempt([
            'email' => $request->email,
            'password' => $request->password,
        ])) {
            
            $user = auth()->user();

            $response = [
                'success' => true,
                'user' => $user,
                'roles'=>$user->getRoleNames(),
                'token' => $user->createToken('appToken')->plainTextToken
            ];

            return response()->json($response, 200);
        }

        return response()->json([
            'message' => 'Credenciales incorrectas',
            'success' => false,
        ], 401);
    }

    public function logout(){
        $response=['succes'=>false];
        auth()->user()->currentAccessToken()->delete();
        $response=[
            'succes'=>true,
            "message"=>"Sesion cerrada"
        ];
        return response()->json($response,200 );
    }
}
