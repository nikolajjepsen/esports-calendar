<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use \App\Services\PandascoreApi;

class PandascoreApiServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        // var_dump(new PandascoreApi(config('pandascore.access_key')));
        $this->app->singleton(PandascoreApi::class, function () {
            return new PandascoreApi(config('pandascore.access_key'));
        });
    }
}
