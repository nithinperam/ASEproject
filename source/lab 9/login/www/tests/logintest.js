describe('DashCtrl', function() {
	var scope;
	
	beforeEach(angular.mock.module('starter'));
	beforeEach(angular.mock.inject(function($rootScope, $controller) {
		scope = $rootScope.$new();
		$controller('DashCtrl', {$scope: scope});
	}));

	it("Chart creation", function () {
		var size = scope.username.length;
		expect(scope.tasks.length).toEqual(0);
        
	})
    it("username size",funtion(){
       var size=scope.username.length;
       expect(scope.tasks.length).toEqual(size);       
       })
    it("username size",funtion(){
       var size=scope.password.length;
       expect(scope.tasks.length).toEqual(size);       
       });
});