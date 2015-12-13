/**
 * Globals
 */
var DIR_APP = DIR_APP || 'app/';


App = angular.module('App', ['ngRoute', 'ngResource']);

App.config(function ($routeProvider, $httpProvider) {

    $httpProvider.interceptors.push('requesterService');

    var components_path = DIR_APP + 'components/';

    $routeProvider.
        when('/', {templateUrl: components_path + 'about/aboutView.html', controller: 'aboutController'}).
        when('/monitor', {templateUrl: components_path + 'monitor/monitorView.html', controller: 'monitorController'}).
        when('/items', {templateUrl: components_path + 'items/itemsView.html', controller: 'itemsController'}).
        otherwise({redirectTo: '/'});

});


App.constant('config', {});
