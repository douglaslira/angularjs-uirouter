(function () {
    
    'use strict';

    angular
        .module('app.pages.home')
        .config(config);

    /** @ngInject */
    function config($stateProvider) {
        $stateProvider.state('app.pages_home', {
            url      : '/home',
            views    : {
                'content@app': {
                    templateUrl: 'app/main/pages/home/home.html',
                    controller : 'HomeController as vm'
                },
                'test@app.pages_home': {
                    templateUrl: 'app/main/pages/home/test.html'
                }
            },
            resolve  : {
                data: function($q) {
                    var deferred = $q.defer();
                    deferred.resolve({page: 'Home'});
                    return deferred.promise;
                }
            }
        })
        .state('app.pages_home.other', {
            url      : '/other',
            views    : {
                'other@app.pages_home': {
                    templateUrl: 'app/main/pages/home/other.html',
                    controller : 'OtherController as vm'
                }
            },
            resolve  : {
                data: function($q) {
                    var deferred = $q.defer();
                    deferred.resolve({page: 'Other template'});
                    return deferred.promise;
                }
            }
        });
    }

})();