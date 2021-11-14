<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\UserController;

class ViewController extends Controller
{
    public function welcomeView() {
        return view('welcome');
    }
    public function authLoginView() {
        return view('Auth.login');
    }
    public function authRegistrationView() {
        return view('Auth.registration');
    }
    public function userPageView() {
        return view('userPage');
    }
    public function profileView() {
        return view('profile');
    }
    public function usersView() {
        return view('users');
    }
    public function postsView() {
        return view('posts');
    }
    public function postPageView() {
        return view('postPage');
    }
}
