<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class TeamController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Team Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles the listing of all teams for a game.
    |
    */

    /**
     * Show all teams
     * 
     * @return JSON Array
     */
    public function index(int $gameId = NULL) {

        if (!$gameId) {
            $team = Team::all();
        } else {
            $team = App\Team::where('game_id', $gameId);
        }        
        return response()->json($team);
        
    }

    /**
     * Show a single team
     * 
     * @param int id
     * @return JSON Object
     */
    public function show(int $id) {
        try {
            $team = Team::where('id', $id)->firstOrFail();
            return response()->json($team);
        } catch (Illuminate\Database\Eloquent\ModelNotFoundException $e) {
            return response()->json([
                'message' => 'Team not found'
            ], 404);
        }

    }
}
