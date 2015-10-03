describe('login', function() {
	var scope;
	
	beforeEach(angular.mock.module('starter'));
	beforeEach(angular.mock.inject(function($rootScope, $controller) {
		scope = $rootScope.$new();
		$controller('login', {$scope: scope});
	}));

	it("Chart creation", function () {
		var size = scope.tasks.length;
		scope.createTask({ title: 'dashboard' });
		expect(scope.tasks.length).toEqual(size+1);
        
	})
    it("Chart creation", function () {
		var size = scope.tasks.length;
		scope.createTask({ title: 'Expenses' });
		expect(scope.tasks.length).toEqual(size+1);
        
	})
    it("Chart creation", function () {
		var size = scope.tasks.length;
		scope.createTask({ title: 'Add Expense' });
		expect(scope.tasks.length).toEqual(size+1);
        
	});
});