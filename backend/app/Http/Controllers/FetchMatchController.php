<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use \App\Services\PandascoreApi;

class FetchMatchController extends Controller
{
    private $api;

    public function __construct(PandascoreApi $api) {
        $this->api = $api;
    }

    public function getUpcomingMatches(string $tense) {
        return response()->json($this->api->getCSGOMatches($tense));
    }

}
