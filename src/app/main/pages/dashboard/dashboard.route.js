(function () {
    
    'use strict';

    angular
        .module('app.pages.dashboard')
        .config(config);

    /** @ngInject */
    function config($stateProvider) {
        $stateProvider.state('app.pages_dashboard', {
            url      : '/dashboard?{name}',
            views    : {
                'content@app': {
                    templateUrl: 'app/main/pages/dashboard/dashboard.html',
                    controller : 'DashboardController as vm'
                }
            },
            resolve  : {
                data: function($q, $stateParams) {
                    var deferred = $q.defer();
                    var checkParam = $stateParams.name || 'User';
                    deferred.resolve({name: checkParam});
                    return deferred.promise;
                }
            }
        });
    }

})();