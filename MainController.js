app.controller("mainController", function ($scope, $http) {
    
    function onUserAvailable(response) {
        $scope.user = response.data;
    };
    
    function onError(reason) {
        $scope.error = "Could not fetch user at this time.";  
    };
    
    $scope.search = function(username) {
        $http.get("https://api.github.com/users/" + username).then(onUserAvailable, onError);
    }
    
});