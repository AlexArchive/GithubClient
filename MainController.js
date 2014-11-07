app.controller("MainController", function ($scope, $http) {
    
    var onUserAvailable = function(response) {
        $scope.user = response.data;
    }
    
    $http.get("https://api.github.com/users/byteblast").then(onUserAvailable);
    
});