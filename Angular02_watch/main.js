function StartupController($scope){
	$scope.funding = { startingEstimate:0 };

	var computeNeeded = function() {
		$scope.funding.needed = $scope.funding.startingEstimate * 10;
	};

	$scope.$watch('funding.startingEstimate', computeNeeded);

	$scope.reset = function() {
		$scope.funding.startingEstimate = 0;
	};
}