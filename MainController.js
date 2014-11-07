app.controller("mainController", function ($scope, $http) {
    
    function onUserAvailable(response) {
        $scope.user = response.data;
        $http.get($scope.user.repos_url).then(onReposAvailable, onError)
    };
    
    function onReposAvailable(response) {
        $scope.repos = response.data;
    }
    
    function onError(reason) {
        $scope.error = "Could not fetch data.";  
    };
    
    $scope.search = function(username) {
        $http.get("https://api.github.com/users/" + username).then(onUserAvailable, onError);
    }
    
});