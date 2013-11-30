function CartController($scope){
	$scope.bill={};

	$scope.items = [
			{title: "Epler", quantity: 2, price: 2.5},
			{title: "Bananer", quantity: 4, price: 3.5},
			{title: "Pærer", quantity: 8, price: 5.5}
		];

	var calculateTotals = function(){
		var total=0;
		for (var i = $scope.items.length - 1; i >= 0; i--) {
			total = total + $scope.items[i].price * $scope.items[i].quantity;
		}
		$scope.bill.total = total;
		$scope.bill.discount = total > 100 ? 10 : 0;
		$scope.bill.subtotal = total - $scope.bill.discount;
	}

	$scope.$watch('items', calculateTotals, true);
};