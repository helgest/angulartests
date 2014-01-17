var circles = [
  	{'x': 115, 'y': 120, 'fill':'#bbaada', 'visning':true},
  	{'x': 150, 'y': 160, 'fill':'red', 'visning':true},
  	{'x': 230, 'y': 220, 'fill':'#ffeedd', 'visning':true},
  	{'x': 200, 'y': 60, 'fill':'#abdefe', 'visning':true},
  	{'x': 180, 'y': 110, 'fill':'#fedbaa', 'visning':true}
  ];

function myController($scope){
	$scope.scaleSize = .2;
	$scope.circles = circles;
	$scope.visning = true;
	$scope.erAktiv = true;

	$scope.change = function() {
		this.circle.fill='#'+Math.random().toString(16).substr(-6); //random color
		console.log(this.$index);
		
	};

	$scope.flipRocket = function() {
		$scope.visning=!$scope.visning;
	};

	$scope.flipBuble = function() {
		$scope.erAktiv=!$scope.erAktiv;
		
	};

};