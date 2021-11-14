<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Tymon\JWTAuth\Facades\JWTAuth;
use  Illuminate\Support\Facades\Mail;
use Illuminate\Support\Str;


class UserController extends Controller
{
    public function showCurrentUserProfile()
    {

        try {
            $user = JWTAuth::user();

            return response()->json([
                'status' => true,
                'description' => 'Getting current user data',
                'user' => $user
            ]);
        } catch (\Exception $err) {
            return response()->json([
                'status' => false,
                'description' => 'Something is wrong'
            ]);
        }
    }

    public function showAllUsers()
    {

        try {
            if (!$this->isAdmin()) {
                return response()->json([
                    'status' => false,
                    'description' => 'Permision denied'
                ]);
            }

            $users = User::all();

            return response()->json([
                'status' => true,
                'description' => 'Getting list of all users',
                'users' => $users
            ]);
        } catch (\Exception $err) {
            return response()->json([
                'status' => false,
                'description' => 'Something is wrong'
            ]);
        }
    }

    public static function isAdmin()
    {
        if (AuthController::checkToken()) {
            $token = $_COOKIE["jwt-token"];
            $user = JWTAuth::setToken($token)->toUser();

            if ($user['role'] === 'admin') {
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    }

    public function giveAdminPermisions(Request $request)
    {
        try {
            if (UserController::isAdmin()) {
                $user_id = $request->only(['id'])['id'];
                $user = User::find($user_id);

                $user->update(['role' => 'admin']);

                return response()->json([
                    'status' => true,
                    'description' => 'New admin was crated'
                ]);
            } else {
                return response()->json([
                    'status' => false,
                    'description' => 'Permisions denied'
                ]);
            }
        } catch (\Exception $err) {
            return response()->json([
                'status' => false,
                'description' => 'Something is wrong'
            ]);
        }
    }
    public function deleteUser(Request $request)
    {

        try {
            if (UserController::isAdmin()) {
                $id = $request->only('id')['id'];
                User::destroy($id);
                return response()->json([
                    'status' => true,
                    'description' => 'User was deleted'
                ]);
            } else {
                return response()->json([
                    'status' => false,
                    'description' => 'Permisions denied'
                ]);
            }
        } catch (\Exception $err) {
            return response()->json([
                'status' => false,
                'description' => 'Something is wrong'
            ]);
        }
    }


    public function showUserProfile(Request $request, $id)
    {
        try {

            $user = User::find($id);

            if ($user) {
                return response()->json([
                    'status' => true,
                    'description' => 'All okay',
                    'user' => $user
                ]);
            } else {
                return response()->json([
                    'status' => false,
                    'description' => 'User dont exist'
                ]);
            }
        } catch (\Exception $err) {
            return response()->json([
                'status' => false,
                'description' => 'Something is wrong'
            ]);
        }
    }








    /*


    public function reset_password(Request $request)
    {
        $token = Str::random(10);
        $user = User::where('email', '=', $request->only(['email']));
        $user->update(['remember_token' => $token]);
        $user = $user->first();
        $data = [
            'email' => $user->email,
            'data' => 'Password reminder',
            'token' => $token
        ];
        Mail::send('mail', $data, function ($messages)  use ($user) {
            $messages->to($user->email);
            $messages->subject('Password reminder');
        });
        return 1;
    }

    public function change_password(Request $request, $token)
    {
        $user = User::where("remember_token", '=', $token);
        $pass = $request->all()['password'];
        $user->update([
            'password' => Hash::make($pass),
            'remember_token' => NULL
        ]);
    }

    public function logout(Request $request)
    {
        JWTAuth::invalidate(JWTAuth::getToken());
        return "logout okay";
    }




    public function update(Request $request, $id)
    {
        if ($this->isAdmin()) {
            $user = User::find($id);
            $user->update($request->all());
            return $user;
        } else {
            return "User is not admin";
        }
    }









    public function upload_avatar(Request $request)
    {
        if ($request->hasFile('image')) {
            $filename = auth()->user()->getKey() . '_' . $request->image->getClientOriginalName();
            $request->image->storeAs('images',  $filename, 'public');
            auth()->user()->update(['avatar' => $filename]);
            return auth()->user();
        } else {
            return "No has image file";
        }
    }
    */
}
