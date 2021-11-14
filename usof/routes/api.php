<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\RatingController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Users
Route::post('registration', [AuthController::class, 'registerNewUser']);
Route::post('login', [AuthController::class, 'loginUser']);
Route::get('/users/{User}', [UserController::class, 'showUserProfile']);
Route::middleware('auth')->get('/profile', [UserController::class, 'showCurrentUserProfile']);
Route::middleware('auth')->get('/users', [UserController::class, 'showAllUsers']);
Route::middleware('auth')->post('/users', [UserController::class, 'giveAdminPermisions']);
Route::middleware('auth')->delete('/users', [UserController::class, 'deleteUser']);

// Posts
Route::middleware('auth')->post('/posts', [PostController::class, 'createNewPost']);
Route::get('/posts', [PostController::class, 'showAllPosts']);
Route::get('/posts/{Post}', [PostController::class, 'showCurrentPost']);

//Comments
Route::middleware('auth')->post('/comments', [CommentController::class, 'createNewComment']);
Route::get('/comments', [CommentController::class, 'loadCurrentPostComments']);

//Likes
Route::middleware('auth')->post('/posts/{id}/rating', [RatingController::class, 'updateRating']);
Route::get('/posts/{id}/rating', [RatingController::class, 'getCalculatedPostRating']);