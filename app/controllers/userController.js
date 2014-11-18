app.controller("userController", function($scope, $http, $log, $routeParams) {

    function onUserAvailable(response) {
        $scope.user = response.data;
        $http.get($scope.user.repos_url).then(onReposAvailable, onError)
    };

    function onReposAvailable(response) {
        $scope.repos = response.data;
    }

    function onError(reason) {
        $log.error("Unable to fetch data: " + reason);
        $scope.error = "Could not fetch data.";
    };

    $scope.username = $routeParams.username;
    $scope.repoSortOrder = "-stargazers_count"
    $http.get("https://api.github.com/users/" + $scope.username).then(onUserAvailable, onError);
});