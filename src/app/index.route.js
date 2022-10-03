(function () {
    'use strict';

    angular.module('onelan').config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider, $urlRouterProvider, $locationProvider) {

        $locationProvider.html5Mode(true);
        $urlRouterProvider.otherwise('/home');

        var layoutStyle = 'verticalNavigation';

        var layouts = {
            verticalNavigation  : {
                main      : 'app/core/layouts/main.html',
                navigation: 'app/core/layouts/navigation.html'
            }
        };
        
        $stateProvider.state('app', {
            abstract: true,
            views   : {
                'main@'         : {
                    templateUrl: layouts[layoutStyle].main,
                    controller : 'MainController as vm'
                },
                'navigation@app': {
                    templateUrl: layouts[layoutStyle].navigation,
                    controller : 'NavigationController as vm'
                }
            }
        });
    }

})();