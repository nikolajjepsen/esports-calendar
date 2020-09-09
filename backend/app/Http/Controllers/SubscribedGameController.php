<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;
use \App\SubscribedGame;

class SubscribedGameController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Subscribed Game Controller
    |--------------------------------------------------------------------------
    | This controller handles subscription to and from games.
    |
    */

    /**
     * Initiates the controller.
     * Validatates the authentication using Sanctum.
     * 
     * @return void
     */
    public function __construct() {
        $this->middleware('auth:sanctum');
    }
    /**
     * Creates a new game subscription
     * 
     * @return null
     */
    public function store(Request $request) {
        $rules = [
            'game_id' => 'required|numeric' 
        ];
        $validator = Validator::make($request->all(), $rules);

        $subscribedGame = new SubscribedGame;
        $subscribedGame->game_id = $request->input('game_id');
        $subscribedGame->user_id = Auth::id();
        $subscribedGame->save();

        return response()->json(null, 201);
    }
    /**
     * Removes a game subscription
     * 
     * @return null
     */
    public function destroy($id) {
        $subscribedGame = SubscribedGame::where('game_id', $id)->where('user_id', Auth::id())->firstOrFail();
        $subscribedGame->delete();

        return response()->json(null, 204);
    }
}
