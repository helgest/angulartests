var shoppingModule = angular.module('ShoppingModule',[]);

shoppingModule.factory('Items', function(){
	var items = {};
	items.query = function (){
		return [
			{title: "Epler", description: "old", price: 2.5},
			{title: "Bananer", description: "new", price: 3.5},
			{title: "Pærer", description: "old", price: 5.5}
		];
	};
	return items;
});

function ShoppingController($scope, Items){
	$scope.items = Items.query();
};
