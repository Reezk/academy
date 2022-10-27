<?php

namespace App\Http\Controllers;


use Illuminate\Http\Request;
use App\Models\User;

class EmailConfirmationController extends Controller
{
    public function confirm($token)
    {
        $user =  User::where([
            'email_token' => $token,
        ])->first();
        if ($user) {
            $user->email_verified = true;
            $user->email_token = null;
            $user->save();
        }
        return redirect('/');
    }
}
