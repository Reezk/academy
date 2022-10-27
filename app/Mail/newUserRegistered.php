<?php

namespace App\Mail;

use App\Models\User;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\App;
use Illuminate\Contracts\Auth\Authenticatable;

class newUserRegistered extends Mailable
{
    use Queueable, SerializesModels;

    protected $user;

    public function __construct(User $user)
    {
        $this->user = $user;
    }

    public function build()
    {
        if (session()->has('locale')) {
            App::setLocale(session()->get('locale'));
        }

        return $this->markdown('emails/account/new-account')->with([
            'user' => $this->user,
        ]);
    }
}
