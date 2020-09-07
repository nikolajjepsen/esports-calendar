<?php

use Illuminate\Database\Seeder;

class MatchesSeeder extends Seeder
{
    
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(App\Match::class, 5)->create();
    }
}
