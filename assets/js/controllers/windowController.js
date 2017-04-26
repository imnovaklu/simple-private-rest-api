angular.module('persoanlApp').controller('windowController', ['$scope', '$state', function ($scope, $state) {
    $scope.shortcuts = [
        {'imgUrl':'images/coding.png', 'text':'Command', 'href':''},
        {'imgUrl':'images/contacts.png', 'text':'Contacts', 'href':'contact'},
        {'imgUrl':'images/courses.png', 'text':'Game', 'href':'game'},
        {'imgUrl':'images/resume.png', 'text':'Resume', 'href':''},
        {'imgUrl':'images/play.png', 'text':'Projects', 'href':''},
        {'imgUrl':'images/web-page.png', 'text':'Command', 'href':''}
    ];
    $scope.shortcut_active = function ($event) {
        console.log($event.target);
        $scope.modal_show = true;
        $state.go($event.target.getAttribute('data-href'));
    };
    $scope.min_modal = function ($event) {

    };
    $scope.max_modal = function ($event) {

    };
    $scope.close_modal = function ($event) {
        $event.stopPropagation();
        var $modal = jQuery($event.target).parents('#modal_command');
        $scope.modal_show = false;
        $modal.css({"top":0, "left":0});
    };
}]);