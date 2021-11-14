<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use Tymon\JWTAuth\Facades\JWTAuth;

class AuthController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth.jwt')->except('loginUser', 'registerNewUser');
    }
    public function loginUser(Request $request)
    {

        $credentails = $request->only(['email', 'password']);

        $token = auth()->attempt($credentails);
        if (!$token) {
            return response()->json([
                'status' => false,
                'description' => 'Bad credentails'
            ]);
        }

        return response()->json([
            'status' => true,
            'description' => 'Save your JWT token, and get access to private data',
            'jwt_token' => $token,
            'url' => route('index')
        ]);


        return $token;
    }

    public function registerNewUser(Request $request)
    {

        try {
            $data = $request->all();
            $data['password'] = Hash::make($data['password']);
            $user = User::create($data);

            return response()->json([
                'status' => true,
                'url' => route('login'),
                'description' => 'User was created',
                'user' => $user
            ]);
        } catch (\Exception $err) {
            return response()->json([
                'status' => false,
                'description' => 'Something is wrong'
            ]);
        }
    }

    public static function checkToken()
    {
        try {
            $token = $_COOKIE["jwt-token"];
            $user = JWTAuth::setToken($token)->toUser();

            if ($user) {
                return true;
            } else {
                return false;
            }
        } catch (\Exception $err) {
            setcookie('jwt-token', "", 0);
            return false;
        }
    }

    public static function logout() {
        JWTAuth::invalidate($_COOKIE["jwt-token"]);
        return redirect()->route('index');
    }
}
