var App = angular.module('App', []);

App.directive('bee', function() {
    return {
        restrict: 'E',
        scope: {
        	data: '=', 
        	datar: '='
        },
        link: function(scope, element, attrs) {
            var img = document.createElement('img');
            img.src = 'bug.png';
            img.style.webkitTransform = "scale(" + scope.data + ") rotate(" + scope.datar + "deg)";
            img.style.transform = "scale(" + scope.data + ") rotate(" + scope.datar + "deg)";
            element[0].appendChild(img);
            console.log(scope.datar);

        }
    };
});