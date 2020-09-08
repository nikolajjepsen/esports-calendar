<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class MatchController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Match Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles the listing of matches, and similar basic
    | CRUD operations.
    |
    */

    /**
     * Show all matches
     * 
     * @return JSON Array
     */
    public function index(int $gameId = NULL) {
        if ($gameId) {
            $matches = \Match::where('game_id', $gameId)->get();
        } else {
            $matches = \Match::all();
        }
        
        return response()->json($matches);
    }

    /**
     * Show a single match
     * 
     * @param int id
     * @return JSON Object
     */
    public function show(int $id) {
        try {
            $game = Game::where('id', $id)->firstOrFail();
            return response()->json($game);
        } catch (Illuminate\Database\Eloquent\ModelNotFoundException $e) {
            return response()->json([
                'message' => 'Match not found'
            ], 404);
        }
    }

}
