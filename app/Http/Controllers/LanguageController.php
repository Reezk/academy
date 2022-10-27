<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use MongoDB\Driver\Session;

class LanguageController extends Controller
{
    public function setLanguage(Request $request){

        $request->validate([
            'language'=>'required'

        ]);
        \Illuminate\Support\Facades\Session::put('locale',$request->language);
        return redirect()->back();

    }
}

