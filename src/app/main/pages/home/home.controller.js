(function () {
    
    'use strict';

    angular
        .module('app.pages.home')
        .controller('HomeController', HomeController);

    /** @ngInject */
    function HomeController(data) {
        var vm = this;

        // Data
        vm.data = data;

        // Methods

        //////////
    }

})();
