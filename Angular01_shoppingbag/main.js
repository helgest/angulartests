function ChartController($scope){
		$scope.items = [
			{title: "Epler", quantity: 2, price: 2.5},
			{title: "Bananer", quantity: 4, price: 3.5},
			{title: "Pærer", quantity: 8, price: 5.5}
		];
		$scope.remove = function(index){
			$scope.items.splice(index,1);
		}
	}