function ShopCtrl ($scope) {
	$scope.items = [
		{text:'apples', done:true},
		{text:'oranges', done:false}];

	$scope.addItem = function() {
		$scope.items.push({text:$scope.itemText, done:false});
		$scope.itemText = '';
	};

	$scope.remaining = function() {
		var count = 0;
		angular.forEach($scope.items, function(item) {
			count += item.done ? 0:1;
		});
		return count;
	};

	$scope.archive = function() {
		var olditems = $scope.items;
		$scope.items = [];
		angular.forEach(olditems, function(item) {
			if (!item.done) $scope.items.push(item);
		});
	};

	$scope.selectAll = function() {
		var allItems = $scope.items;
		
		angular.forEach(allItems, function(item) {
			if (!item.done) item.done = true;
		});
	};

	$scope.deselect = function() {
		var allItems = $scope.items;

		angular.forEach(allItems, function(item) {
			if (item.done) item.done = false;
		});
	};
	

}