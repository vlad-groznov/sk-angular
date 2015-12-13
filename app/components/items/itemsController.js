App.controller('itemsController', ['$scope', '$log', function ($scope, $log) {


    $scope.modalSelector = '#unique_modal';
    $scope.action = null;
    $scope.item = null;
    $scope.list = [
        {'title': 'title - 1', 'value': 111},
        {'title': 'title - 2', 'value': 222},
        {'title': 'title - 3', 'value': 333}
    ];

    // work with SERVER
    $scope.submit = function () {

        if ($scope.action === 'create') {
            $log.info('Create Item', $scope.item);
            $scope.list.push({'title': "'title - " + ($scope.list.length + 1), 'value': $scope.item.value});
        } else if ($scope.action === 'update') {
            $log.info('Update item', $scope.item);
            alert('TODO : Update item');
        } else if ($scope.action === 'delete') {
            $log.info('Delete item', data);
            alert('TODO : Delete item');
        }

        $scope.cancelModal();
    };

    $($scope.modalSelector).on('hidden.bs.modal', function (e) {
        $scope.action && $scope.cancelModal();
    });

    // work with UI
    $scope.cancelModal = function () {
        $log.info('cancel modal');
        $($scope.modalSelector).modal('hide');
        $scope.action = null;
        $scope.item && delete $scope.item;
    };

    $scope.showModal = function (action, item) {
        $log.info(action + ' modal');
        $($scope.modalSelector).modal('show');
        $scope.item = angular.copy(item || {});
        $scope.action = action;
    };
}]);
