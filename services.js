app.config(["AppName", function(AppName){
	console.log("This is config : - constant before " + AppName );
	AppName = "New Angualr Services in config setion"
	console.log("This is config : - constant after " + AppName );

}])

app.run(["AppName","AppVersion", function(AppName, AppVersion){
	console.log("This is run : - Constant " + AppName)
	AppName = "New Angualr Services in run setion"
	console.log("This is run : - Constant " + AppName)
	console.log("This is run : - Value " + AppVersion)
	AppVersion = "2.0.0.2"
	console.log("This is run : - Value " + AppVersion)
	
}])

app.provider("example", function(){
	var myObj = {};
	myObj.firstName = "JohnGalt";
	myObj.lastName ="Bangalore";

	myObj.getName = function(){
		return this.firstName + " " + this.lastName;
	}
	this.$get = function(){
		return myObj;
	}
})

app.service("CustomService", function(){
	this.getCustomerDetails = function(){
		return "This will return customer details !!"
	}
})

app.factory("CustomFactory", function(){
	return "This is my factory Service";
})

app.constant("AppName", "Angular Service");

app.value("AppVersion", "1.0.0.0")