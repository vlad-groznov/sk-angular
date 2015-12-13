/**
 *
 */

App.directive('navbar', function () {
    return {
        scope: false,
        restrict: 'E',
        templateUrl: 'app/shared/navbar/navbarView.html',
        controller: function ($scope, $rootScope) {
            $rootScope.$on('$routeChangeSuccess', function (e, current, pre) {
                $scope.menuCurrent = current.$$route.originalPath;
            });
        }
    };
});