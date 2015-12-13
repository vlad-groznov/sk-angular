/**
 * read about it
 *   - https://thinkster.io/interceptors
 */

App.factory('requesterService', function ($rootScope) {

    $rootScope.requestCounter = {
        send: 0,
        error: 0
    };

    var increment = function (type) {
        $rootScope.requestCounter[type]++;
    };
    var decrement = function (type) {
        $rootScope.requestCounter[type]--;
    };

    return {
        request: function (config) {
            increment('send');
            return config;
        },
        response: function (res) {
            decrement('send');
            return res;
        },
        requestError: function (config) {
            increment('error');
            return config;
        },
        responseError: function (res) {
            increment('error');
            decrement('send');
            return res;
        }
    };
});