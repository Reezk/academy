<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;


class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    protected $fillable = [
        'first_name',
        'last_name',
        'email',
        'password',
        'account_type',
        'email_verified',
        'email_token',
    ];

    protected $hidden = [
        'password',
        'remember_token',
        'email_token',
    ];
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    private static function find(int $int)
    {
    }

    public static function create(array $array)
    {
    }
}
