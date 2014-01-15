var circles = [
  	{'x': 115, 'y': 120, 'fill':'#bbaada'},
  	{'x': 150, 'y': 160, 'fill':'red'},
  	{'x': 230, 'y': 220, 'fill':'#ffeedd'},
  	{'x': 200, 'y': 60, 'fill':'#abdefe'},
  	{'x': 180, 'y': 110, 'fill':'#fedbaa'}
  ];

function myController($scope){
	$scope.scaleSize = .2;
	$scope.circles = circles;

	$scope.change = function() {
		this.circle.fill='#'+Math.random().toString(16).substr(-6); //random color
		console.log(this.$index);
	};

};