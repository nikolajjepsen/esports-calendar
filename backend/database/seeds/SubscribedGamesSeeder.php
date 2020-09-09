<?php

use Illuminate\Database\Seeder;

class SubscribedGamesSeeder extends Seeder
{
    
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \App\SubscribedGame::create([
            'game_id' => 1,
            'user_id' => 11
        ]);
        \App\SubscribedGame::create([
            'game_id' => 2,
            'user_id' => 11
        ]);
    }
}
