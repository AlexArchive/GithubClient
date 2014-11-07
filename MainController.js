app.controller("MainController", function ($scope, $http) {
    
    function onUserAvailable(response) {
        $scope.user = response.data;
    };
    
    function onError(reason) {
        $scope.error = "Could not fetch user at this time.";  
    };
    
    $http.get("https://api.github.com/users/byteblast").then(onUserAvailable, onError);
    
});