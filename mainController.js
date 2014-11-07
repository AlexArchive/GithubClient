app.controller("mainController", function($scope, $http, $interval, $log, $anchorScroll, $location) {

    function onUserAvailable(response) {
        $scope.user = response.data;
        $http.get($scope.user.repos_url).then(onReposAvailable, onError)
    };

    function onReposAvailable(response) {
        $scope.repos = response.data;
        $location.hash("user__profile");
        $anchorScroll();
    }

    function onError(reason) {
        $log.error("Unable to fetch data: " + reason);
        $scope.error = "Could not fetch data.";
    };

    function decrementCountdown() {
        $scope.countdown -= 1;
        if ($scope.countdown == 0) {
            $scope.search($scope.username);
        }
    }

    var countdownInterval = null;
    function startCountdown() {
        countdownInterval = $interval(decrementCountdown, 1000, $scope.countdown);
    }

    $scope.search = function(username) {
        $log.info("Searching for: " + username);
        $http.get("https://api.github.com/users/" + username).then(onUserAvailable, onError);
        if (countdownInterval) {
            $interval.cancel(countdownInterval);
            $scope.countdown = null;
        }

    }

    $scope.username = "Mavamaarten";
    $scope.repoSortOrder = "-stargazers_count"
    $scope.countdown = 5;
    startCountdown();
});