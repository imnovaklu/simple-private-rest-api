angular.module('persoanlApp').controller('barController', ['$scope', '$interval', function ($scope, $interval) {
    $interval(function(){
        var date = new Date();
        $scope.time = format(date.getHours()) + ":" + format(date.getMinutes());
        $scope.date = format(date.getFullYear()) + "/" + format(date.getMonth()) + "/" + format(date.getDate());
    },1000);
}]);