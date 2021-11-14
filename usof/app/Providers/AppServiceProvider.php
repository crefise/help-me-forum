<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Blade;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\UserController;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        Blade::if('authJwt', function () {
            return !AuthController::checkToken();
        });
        Blade::if('admin', function () {
            return UserController::isAdmin();
        });
    }
}
