<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ViewController;
use App\Models\User;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

/* Index page */
Route::get('/', [ViewController::class, 'welcomeView'])->name('index');

/* Auth */
Route::middleware('guest')->get('/login', [ViewController::class, 'authLoginView'])->name('login');
Route::middleware('guest')->get('/registration',  [ViewController::class, 'authRegistrationView']);
Route::middleware('auth.jwt')->get('/logout', [AuthController::class, 'logout']);






Route::get('users/{id}', [ViewController::class,'userPageView']);
Route::get('/posts',  [ViewController::class, 'postsView']);
Route::get('/posts/{id}',  [ViewController::class, 'postPageView']);
//Private routes
Route::get('/profile', [ViewController::class, 'profileView'])->middleware('auth.jwt');

Route::get('/users',  [ViewController::class, 'usersView'])->middleware('admin');





