(function () {

    'use strict';

    angular.module('onelan').run(runBlock);

    /** @ngInject */
    function runBlock($rootScope, $timeout, $state, $log)
    {

        var stateChangeStartEvent = $rootScope.$on('$stateChangeStart', function () {
            $rootScope.loadingProgress = true;
        });

        var stateChangeSuccessEvent = $rootScope.$on('$stateChangeSuccess', function () {
            $timeout(function () {
                $rootScope.loadingProgress = false;
            });
        });
        $rootScope.state = $state;

        $rootScope.$on('$destroy', function () {
            stateChangeStartEvent();
            stateChangeSuccessEvent();
        });

        // EVENTS

        var viewContentLoaded = $rootScope.$on('$viewContentLoaded', function () {
            $log.info('$viewContentLoaded');
        });

        /*var stateChangeStart = $rootScope.$on('$stateChangeStart', function (event, toState, toParams) {
            $log.info('$stateChangeStart to ' + formatToState(toState), {toParams: toParams});
            if (!toState.skipAuthorization && !AuthService.validateToken()) {
                $log.info("Has no auth, redirecting to login");

                var name = toState.name;
                var params = toParams;
                if (name === 'login') {
                    name = 'home';
                    params = {};
                }

                event.preventDefault();

                var stateParams = {returnState: name, returnParams: params};
                $log.info("No auth saving state params", stateParams);
                $state.go("app.pages_auth_login-v2", stateParams);
            }

        });*/

        var stateChangeSuccess = $rootScope.$on('$stateChangeSuccess', function (event, toState) {
            $log.info('$stateChangeSuccess to ' + formatToState(toState));
            $rootScope.state = $state;
        });

        var stateChangeError = $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
            $log.error('$stateChangeError', {
                event: event,
                toState: toState,
                toParams: toParams,
                fromState: fromState,
                fromParams: fromParams,
                error: error
            });
            if (error === 'Unauthorized') {
                $state.go('app.forbidden');
            }
        });

        var stateNotFound = $rootScope.$on('$stateNotFound', function (event, unfoundState, fromState, fromParams) {
            $log.warn('$stateNotFound ' + unfoundState.to, unfoundState, fromState, fromParams);
        });

        $rootScope.$on('$destroy', viewContentLoaded);
        //$rootScope.$on('$destroy', stateChangeStart);
        $rootScope.$on('$destroy', stateChangeSuccess);
        $rootScope.$on('$destroy', stateChangeError);
        $rootScope.$on('$destroy', stateNotFound);

        function formatToState(toState) {
            var state = ensureState(toState);

            if (state.controller === 'noController' && state.template === 'noTemplate') {
                var controllerTemplate = extractControllerTemplate(toState);
                if (controllerTemplate) {
                    state.controller = controllerTemplate.controller;
                    state.template = controllerTemplate.template;
                }
            }

            return toState.name + ' ("' + state.url + '" -> ' + state.controller + '::' + state.template + ')';
        }

        function ensureState(toState) {
            return {
                controller: toState.controller || 'noController',
                template: toState.templateUrl || 'noTemplate',
                url: toState.url || 'internalUrl'
            };
        }

        function extractControllerTemplate(toState) {
            if (!hasViewContent(toState)) {
                return null;
            }

            var contentApp = toState.views['content@app'];
            return {
                controller: contentApp.controller || 'noController',
                template: contentApp.templateUrl || 'noTemplate'
            };
        }

        function hasViewContent(toState) {
            return toState.views && toState.views['content@app'];
        }

    }
})();