function myController($scope){
	
	$scope.redlight=true;
	$scope.greenlight=false;

	$scope.change = function() {
		$scope.redlight=!$scope.redlight;
		$scope.greenlight=!$scope.greenlight;
	};
};