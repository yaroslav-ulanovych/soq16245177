angular.module('myApp', []).directive('tdfield', function() {
	return {
		restrict: 'A',
		replace: false,
		transclude: false,
		scope: true,
		templateUrl:'element.html',
		compile: function() {
			return {
				pre: function (scope, element, attr) {
					scope.fieldname = attr.fieldname;
				}
			}
		}
	};
});

