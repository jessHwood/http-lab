angular.module('TheCriminalsApp', [])
	.controller('CriminalsController', CriminalsController);

CriminalsController.$inject = ['$http'];

function CriminalsController($http) {
	var self = this;
	self.all = [];
	self.getCriminals = getCriminals;
	self.addCriminals = addCriminals;
	self.newCriminal = {};
	self.deleteCriminals = deleteCriminals;

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

function deleteCriminals(criminal){
	$http
		.delete('http://localhost:3000/criminals/' + criminal._id)
		.then(function(response){
			var index = self.all.indexOf(criminal);
			self.all.splice(index, 1);
		});
}



}