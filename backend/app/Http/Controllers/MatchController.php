<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\GameController;
use App\Match;
use App\Game;

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
            $matches = Match::where('game_id', $gameId)->limit(3)->get();
        } else {
            $matches = Match::all()->limit(3);
        }
        
        return response()->json($matches, 200);
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

    public function getMatchesFromSubscribedGames() {

        /**
         * 1) Grab users' subscribed games
         * 2) Pluck the Game IDs
         * 3) Grab all matches where game_id = Selected Games ID.
         * 4) Attach info regarding the teams using the hasOne relationships using with
         * 5) Build the collection, and return the json encoded collection.
         */

        $subscribedGameIds = auth()
            ->user()
            ->subscribedGames
            ->pluck('game_id');

        $matches = Match::whereIn('game_id', $subscribedGameIds->toArray())
            ->with(
                [
                    'game', 
                    'teamOne', 
                    'teamTwo'
                ]
            )
            ->get();

        return response()->json($matches, 200);
    }
}
