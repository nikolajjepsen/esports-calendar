<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | User Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles methods regarding the current authenticated user.
    |
    */

    /**
     * Show current authenticated user
     * 
     * @return JSON Array
     */
    public function current() {
        return response()->json(auth()->user()->toJson());
        
    }

    public function logout() {
        Auth::guard('web')->logout();
        return response()->json(null, 204);
    }
}
