<?php

namespace App\Http\Controllers\API\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use App\Http\Requests\Auth\RegisterRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function register(RegisterRequest $request)
    {
        $fields=$request->validated();
        
        $user=new User($fields);

        $user->password=bcrypt($user->password);
        $user->save();
        return response()->json([
            'user'=>$user,
            'token'=>$user->createToken('appToken')->plainTextToken,
        ],200);    
    }
    
    public function login(LoginRequest $request){
        $fields=$request->validated();
        $user=User::where('email',$fields['email'])->first();
        if(!Hash::check($fields['password'],$user->password)){
            return response()->json([
                'msg'=>'Bad Credential',
            ],401);
        }
        return response()->json([
            'user'=>$user,
            'token'=>$user->createToken('appToken')->plainTextToken
        ],200);
    }

    public function logout(Request $request){
        $request->user()->cusrrentAccesToken()->delete();
        return response()->json([
            'msg'=>"logout",
        ],200 );
    }
}
