(function ()
{
    'use strict';

    angular.module('app.pages', [
        'app.pages.home',
        'app.pages.dashboard'
    ])
    .config(config);

    /** @ngInject */
    function config() {
    }

})();