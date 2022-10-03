(function () {
    'use strict';

    angular.module('app.core').config(config);

    /** @ngInject */
    function config($ariaProvider, $logProvider) {
        $logProvider.debugEnabled(true);
        /*eslint-disable */
        $ariaProvider.config({
            tabindex: false
        });
        /*eslint-enable */
    }
})();