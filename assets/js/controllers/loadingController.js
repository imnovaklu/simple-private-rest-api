angular.module('persoanlApp').controller('loadingController', ['$scope', function ($scope) {
    $scope.$watch('$viewContentLoaded', function(){
        $('#loading').fadeOut();
        $( "#modal_command").draggable({ handle: ".modal-header" });
    });
}]);