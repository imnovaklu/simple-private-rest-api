angular.module('persoanlApp').config(['$stateProvider', function ($stateProvider) {
    var uiStates = {
        contactState: {
            name: 'contact',
            url: '/contact',
            templateUrl: '../../views/contact.html'
        }
    };

    for(var key in uiStates){
        $stateProvider.state(uiStates[key]);
    }
}]);