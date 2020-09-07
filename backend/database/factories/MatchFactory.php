<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Match;
use Faker\Generator as Faker;

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| This directory should contain each of the model factory definitions for
| your application. Factories provide a convenient way to generate new
| model instances for testing / seeding your application's database.
|
*/

$factory->define(Match::class, function (Faker $faker) {
    return [
        'game_id' => factory(App\Game::class),
        'team_one_id' => factory(App\Team::class),
        'team_two_id' => factory(App\Team::class),
        'starts_at' => $faker->datetime,
    ];
});
