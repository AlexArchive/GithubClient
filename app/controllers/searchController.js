app.controller("searchController", function($scope, $interval, $log, $location) {

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
        $location.path("/user/" + username);
        if (countdownInterval) {
            $interval.cancel(countdownInterval);
            $scope.countdown = null;
        }
    }

    $scope.username = "ByteBlast";
    $scope.countdown = 10;
	startCountdown();
});