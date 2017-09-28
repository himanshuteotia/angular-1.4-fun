var app = angular.module('myApp', []);

app.controller("firstController",["$scope",function(scope){
    console.log("Angular first controller running");
}])