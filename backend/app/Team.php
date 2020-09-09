<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Team extends Model
{
    /**
     * The attributes that aren't mass assignable - making the rest mass assignable.
     *
     * @var array
     */
    protected $guarded = [];

    public function matches() {
        return $this->hasMany('App\Match');
    }

    public function game() {
        return $this->belongsTo('App\Game');
    }
    
}
