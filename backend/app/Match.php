<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Match extends Model
{
    public function game() {
        return $this->belongsTo('App\Game', 'game_id');
    }

    public function teamOne() {
        return $this->hasOne('App\Team', 'id', 'team_one_id');
    }

    public function teamTwo() {
        return $this->hasOne('App\Team', 'id', 'team_two_id');
    }
}
