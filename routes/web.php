<?php

use App\Http\Controllers\EmailConfirmationController;
use App\Http\Controllers\LanguageController;
use App\Mail\newUserRegistered;
use App\Models\User;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;



Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('confirm/{token}', [EmailConfirmationController::class, 'confirm'])->name('email_confirmation');

Route::get('/home', [HomeController::class, 'index'])->name('home');

Route::post('language', [LanguageController::class, 'setLanguage'])->name('language');

Route::get('/test', function () {

    $user = User::find(1);

    return new newUserRegistered($user);
});
