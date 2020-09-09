<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Game extends Model
{
    /**
     * The attributes that aren't mass assignable.
     * 
     * @var array
     */
    protected $guarded = [];

    public function teams() {
        return $this->hasMany('App\Team');
    }

    public function matches() {
        return $this->hasMany('App\Match');
    }
}
