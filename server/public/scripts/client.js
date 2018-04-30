console.log('js');

var app = angular.module('ApiApp', []);

app.controller('ApiController', ['$http', function($http) {
    var self = this;
    self.message='Hi there!';
}]);