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
        factory(App\SubscribedGame::class, 4)->create();
    }
}
