(function () {
    
    'use strict';

    angular
        .module('app.pages.home')
        .controller('OtherController', OtherController);

    /** @ngInject */
    function OtherController(data) {
        var vm = this;

        // Data
        vm.data = data.page;

        // Methods

        //////////
    }

})();
