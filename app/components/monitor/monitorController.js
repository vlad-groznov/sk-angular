App.controller('monitorController', ['$scope', '$timeout', function ($scope, $timeout) {

    var timeoutId = null;
    var timeoutDelay = 3000;


    var tick = function () {
        $timeout.cancel(timeoutId);

        var data = {}, i = 5;
        while (i-- -1) {
            data[i] = {
                'title': 'title ' + i, 'xxx': Math.ceil(Math.random() * 10000), 'yyy': Math.ceil(Math.random() * 10000)
            }
        }
        $scope.monitor = data;

        timeoutId = $timeout(tick, timeoutDelay);
    };

    tick();

    $scope.$on('$destroy', function () {
        timeoutId && $timeout.cancel(timeoutId);
    });

}]);

