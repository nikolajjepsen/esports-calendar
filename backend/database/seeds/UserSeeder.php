<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(App\User::class, 10)->create();

        \App\User::create([
            'name' => 'Nikolaj Jepsen',
            'email' => 'nj@codefighter.dk',
            'password' => Hash::make('j5h4wwa'),
        ]);
    }
}
