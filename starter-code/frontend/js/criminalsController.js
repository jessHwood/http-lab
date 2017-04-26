angular.module('TheCriminalsApp', [])
	.controller('CriminalsController', CriminalsController);

CriminalsController.$inject = ['$http'];

function CriminalsController($http) {
	var self = this;
	self.all = [];
	self.getCriminals = getCriminals;
	self.addCriminals = addCriminals;
	self.newCriminal = {};

	console.log("controller");

function getCriminals(){
	$http 
		.get('http://localhost:3000/criminals')
		.then(function(response){
			console.log("yo");
			self.all = (response.data);
		});		
}
	getCriminals();

function addCriminals(){
	$http
		.post('http://localhost:3000/criminals', self.newCriminal)
		.then(function(response){
			console.log(response);
			console.log(self);
			getCriminals();
		});
	self.newCriminal = {};

}



}