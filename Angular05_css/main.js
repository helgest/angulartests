function myController($scope){
	
	$scope.isError=false;
	$scope.isWarning=false;

	$scope.showError = function() {
		$scope.isError=true;
		$scope.isWarning=false;
		$scope.messageText='This is an error';
	};

	$scope.showWarning = function() {
		$scope.isError=false;
		$scope.isWarning=true;
		$scope.messageText='This is a warning';
	};
};