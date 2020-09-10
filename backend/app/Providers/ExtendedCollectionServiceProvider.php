<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Collection;

class ExtendedCollectionServiceProvider extends ServiceProvider
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
     * Register new Collection macros here.
     *
     * @return void
     */
    public function boot(Collection $collection)
    {
        /**
         * sortByDate
         * Sorts a collection column by date in direction. 
         */
        $collection->macro('sortByDate',
            function ($column = 'created_at', $order = SORT_DESC) {
                // @var $this Collection
                return $this->sortBy(function ($collection) use ($column) {
                    return strtotime($collection->$column);
                });
            }
        );
    }
}
