angular.module('persoanlApp').controller('contactController', ['$scope', function ($scope) {
    $scope.contacts = [{
        approach: "Phone Number",
        value: "(732)630-1287"
    },{
        approach: "Email Address",
        value: "imnovaklu@gmail.com"
    }];
}]);