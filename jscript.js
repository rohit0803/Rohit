var myapp = angular.module('myapp', ['ngRoute']);
        myapp.config(function ($routeProvider) {
            $routeProvider
            .when('/', {
                templateUrl: 'home.html',
                
            })
            .when('/aboutme', {
                templateUrl: 'aboutme.html',
                controller: 'aboutmeController'
            })
            .when('/projects', {
                templateUrl: 'projects.html',
                controller: 'projectsController'
            })
            
        });
        myapp.controller('templateController', function ($scope) {
            $scope.message = 'Home Page';
        });
        myapp.controller('aboutmeController', function ($scope) {
            $scope.message = 'About Me Page';
        });
        myapp.controller('projectsController', function ($scope) {
            $scope.message = 'Project Page';
        });
       