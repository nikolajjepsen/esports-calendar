<?php

namespace App\Services;

use GuzzleHttp\Client;
use GuzzleHttp\Exception\ClientException;
use GuzzleHttp\Exception\GuzzleException;

class PandascoreApi {

    private $access_key;
    private $base_url;
    
    private $client;

    public function __construct($access_key) {
        $this->access_key = $access_key;
        // config() is a global helper using the dot syntax.
        $this->base_uri = config('pandascore.base_uri');

        $this->client = new Client();
    }

    protected function getBaseUri() {
        return $this->base_uri;
    }

    public function call(string $endpoint, array $params, string $method = 'GET') {
        $headers = [
            'Accept' => 'application/json',
            'Authorization' => 'Bearer ' . $this->access_key,
        ];
        try {
            $request = $this->client->request(
                $method, 
                $this->getBaseUri() . $endpoint . '?' . http_build_query($params), 
                [
                    'headers' => $headers
                ]
            );
            return json_decode($request->getBody()->getContents());
        } catch (ClientException $e) {
            echo $e->getMessage();
        } catch (GuzzleException $e) {
            return response()->json([
                'error' => $e->getMessage(),
                'trace' => $e->getTrace()
            ]);
        }
    }

    public function getCSGOMatches(string $tense = '', array $params = []) {
        $baseEndpoint = '/csgo/matches';
        switch($tense) {
            case 'upcoming':
            case 'live':
            case 'past':
                $endpoint = $baseEndpoint . '/' . $tense;
                break;
            default: 
                $endpoint = $baseEndpoint;
                break;
        }
        return $this->call($endpoint, $params);
    }

    public function getLOLMatches(array $params = []) {
        return $this->call('/lol/matches', $params);
    }

}