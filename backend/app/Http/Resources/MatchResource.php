<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class MatchResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'match_id' => $this->id,
            'team_one' => TeamResource::make($this->teamOne),
            'team_two' => TeamResource::make($this->teamTwo),
            'game' => GameResource::make($this->game),
            'starts_at' => $this->starts_at,
        ];
    }
}
