console.log('js');

var app = angular.module('StarWarsApp', []);

app.controller('StarWarsController', ['$http', function ($http) {
    console.log('ng');
    var self = this;
    self.message = 'Hi there!';
}]);