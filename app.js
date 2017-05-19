var app = angular.module("myApp", []);

app.controller("myController", 
				["$scope",
				 "example",
				 "CustomService", 
				 "CustomFactory", 
				 "AppName",
	function($scope, example, CustomService,CustomFactory,AppName){
		console.log("My Controller - ProviderService :" +  example.firstName);
		console.log("My Controller - ProviderService :" +  example.getName())

		console.log("My Controller - service:" + CustomService.getCustomerDetails())

		$scope.customerMessage = CustomService.getCustomerDetails();


		$scope.customFactoryMessage = CustomFactory
		console.log(AppName)
}])
