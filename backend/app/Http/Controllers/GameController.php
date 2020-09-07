<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

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
            $game = \App\Game::where('id', $id)->firstOrFail();
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

    public function matches(int $id) {
        try {
            $game = \App\Game::where('id', $id)->firstOrFail();
        } catch (Illuminate\Database\Eloquent\ModelNotFoundException $e) {
            return response()->json([
                'message' => 'Game not found'
            ], 404);
        }
        
        return response()->json($game->matches);
    }
}
