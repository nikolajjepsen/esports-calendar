<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;


class GameController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Game Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles the creation of new games, and similar basic
    | CRUD operations.
    |
    */

    /**
     * Show all games
     * 
     * @return JSON Array
     */
    public function index() {
        $games = \App\Game::all();
        $user = Auth::user() ?? false;

        // Grab the subscribed games for the current user if authenticated
        if ($user) {
            $subscribedGames = $user->subscribedGames()->get();
        }

        // Loop through the games and attach a subscription status property
        // for the game if authenticated
        foreach ($games as $game) {
            if ($user) {
                if ($subscribedGames->contains('game_id', $game->id)) {
                    $game->user_is_subscribed = true;
                } else {
                    $game->user_is_subscribed = false;
                }
            }
        }
        
        // encode the games array to json and send it.
        return response()->json($games);
    }

    /**
     * Stores a game
     * Guarded by administrative privileges.
     * 
     * @param   Request $request
     * @return  JSON    Object
     */
    public function store(Request $request) {
        // TODO: Validation
        // TODO: Guard

        $game = App\Game::create([
            'name' => $request->name,
            'description' => $request->description,
            'logo_path' => $request->logo_path,
            'developer' => $request->developer
        ]);

        return response()->json($game);
    }

    /**
     * Show a single game
     * 
     * @param int id
     * @return JSON Object
     */
    public function show(int $id) {
        try {
            $game = \App\Game::findOrFail($id);
            return response()->json($game);
        } catch (Illuminate\Database\Eloquent\ModelNotFoundException $e) {
            return response()->json([
                'message' => 'Game not found'
            ], 404);
        }
    }

    /**
     * Update a game
     * Guarded by administrative privileges
     * 
     * @return JSON Object
     */
    public function update() {
        // TODO: Validation
        // TODO: Guard
    }
}
