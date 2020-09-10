<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\GameController;
use App\Http\Resources\MatchCollection;
use App\Http\Resources\MatchResource;
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
            $matches = Match::where('game_id', $gameId)->get();
        } else {
            $matches = new MatchResource(Match::all());
        }

        $matches->transform(function (Match $match) {
            return (new MatchResource($match));
        });
        return new MatchCollection($matches->take(3));
    }

    /**
     * Show a single match
     * 
     * @param int id
     * @return JSON Object
     */
    public function show(int $id) {
        try {
            $match = Game::where('id', $id)->firstOrFail();
            return new MatchResource($match);
        } catch (Illuminate\Database\Eloquent\ModelNotFoundException $e) {
            return response()->json([
                'message' => 'Match not found'
            ], 404);
        }
    }

    public function cateredMatches() {
        // Get subscribed games and pluck the ID.
        $subscribedGameIds = auth()
            ->user()
            ->subscribedGames
            ->pluck('game_id');

        if ($subscribedGameIds->count() > 0) {
            $matches = Match::whereIn('game_id', $subscribedGameIds->toArray())->get();
        } else {
            $matches = Match::all();
        }
        // Get the matches from games the authenticated user subscribed from

        // Transform each Match object, thus replacing the current object with the 
        // match resource.
        $matches->transform(function (Match $match) {
            return (new MatchResource($match));
        });

        return new MatchCollection($matches);
    }
}
