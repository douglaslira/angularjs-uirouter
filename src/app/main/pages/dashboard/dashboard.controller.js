(function () {
    
    'use strict';

    angular
        .module('app.pages.dashboard')
        .controller('DashboardController', DashboardController);

    /** @ngInject */
    function DashboardController(data, $state) {
        var vm = this;

        // Data
        vm.data = data;
        vm.namebyquery = $state.params.name;

        // Methods

        //////////
    }

})();
