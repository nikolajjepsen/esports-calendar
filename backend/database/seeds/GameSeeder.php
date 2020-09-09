<?php

use Illuminate\Database\Seeder;

class GameSeeder extends Seeder
{
    
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \App\Game::create([
            'name' => 'Counter-Strike: Global Offensive',
            'description' => 'Rerum architecto explicabo ut et. Sint doloremque dolor reprehenderit cupiditate debitis ipsam. 
                    Quo in aut suscipit est occaecati tempora esse. Qui quaerat temporibus laboriosam dolorem assumenda ea. 
                    Eos laboriosam dolorem at quisquam unde. Est iste voluptatem non.',
            'developer' => 'Valve Inc.',
            'logo_path' => 'https://esportsjunkie.com/wp-content/uploads/2019/05/CSGO-Banner-24-3-2019.jpg'
        ]);

        \App\Game::create([
            'name' => 'League of Legends',
            'description' => 'Rerum architecto explicabo ut et. Sint doloremque dolor reprehenderit cupiditate debitis ipsam. 
                    Quo in aut suscipit est occaecati tempora esse. Qui quaerat temporibus laboriosam dolorem assumenda ea. 
                    Eos laboriosam dolorem at quisquam unde. Est iste voluptatem non.',
            'developer' => 'Riot Games Inc.',
            'logo_path' => 'https://nexus.leagueoflegends.com/wp-content/uploads/2019/06/Banner_T2_Image_tnp3w61gzna8r2n3rojp.jpg'
        ]);

    }
}
