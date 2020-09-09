<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/games', 'GameController@index');

Route::middleware('auth:sanctum')->get('/games/subscription/matches', 'MatchController@getMatchesFromSubscribedGames');
Route::get('/matches', 'MatchController@index');


// Authenticated in SubscribedGameController@__construct 
Route::delete('/games/{id}/subscription', 'SubscribedGameController@destroy');
Route::post('/games/subscription', 'SubscribedGameController@store');