(function () {

    'use strict';

    angular.module('onelan').controller('MainController', MainController);

    /** @ngInject */
    function MainController($scope, $rootScope) {

        console.log(":: MAIN ::");

        // Data

        //////////

        // Remove the splash screen
        $scope.$on('$viewContentAnimationEnded', function (event) {
            if ( event.targetScope.$id === $scope.$id ) {
                console.log(":: REMOVE LOADING ::")
            }
        });
    }
    
})();