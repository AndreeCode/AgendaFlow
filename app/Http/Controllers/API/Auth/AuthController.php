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

        
        return response()->json([
            'user'=>$user,
            'token'=>$user->createToken('appToken')->plainTextToken,
        ],200);    
    }
    
    public function login(LoginRequest $request){
       
        
       if (Auth::attempt([
            'email' => $request->email,
            'password' => $request->password,
        ])) {
            
            $user = auth()->user();

            $response = [
                'user' => $user,
                'success' => true,
                'token' => $user->createToken('appToken')->plainTextToken
            ];

            return response()->json($response, 200);
        }

        return response()->json([
            'message' => 'Credenciales incorrectas',
            'success' => false,
        ], 401);
    }

    public function logout(Request $request){
        $request->user()->cusrrentAccesToken()->delete();
        return response()->json([
            'msg'=>"logout",
        ],200 );
    }
}
