export default class UserController {

	constructor($scope,$http, $log, UserService, $location){
		this.$scope = $scope;
		this.$http = $http;
		this.$log = $log;
		this.UserService = UserService;
		this.$location = $location;
		this.result = '';
		this.account = {};
		this.tabUsers = [];
	}


	$onInit(){
		//this.verifyIfUserLogged();
		this.getUserConnected();
	}

	getAllUsers(){
		this.tabUsers = this.UserService.getAllUsers();
	}

	createAccount(account){
		this.UserService.createAccount(account)
		this.resetForm();
		this.result = 'Created OK !';

		this.$location.path('/order');


	}

	resetForm(){
	this.$scope.account = {};
}


verifyIfUserLogged(){
	this.UserService.verifyIfUserLogged();
}

connectAccount(account){
	this.UserService.connectAccount(account);

}

getForgottenPassword(account){

	if(account != null ){
		this.UserService.getForgottenPassword(account)
	.then((res)=>{
			this.forgottenPassword = res.data[0].password;
			this.$log.log('get password OK! '+res.data[0].password)
	},(err)=>{
		this.$log.log('erreur'+ err.statusText)
	})
}else if(account == null ) {
	this.forgottenPassword = 'sorry but email incorrect ! '
}

}

modifyAccount(newAccount){
	this.UserService.modifyAccount(newAccount);
}

getUserConnected(){
	this.userConnected = this.UserService.getUserConnected();
}

removeUser(){
	this.UserService.removeUser();

}

changePage(link){
	this.UserService.changePage(link);
}

}

UserController['$inject'] = ['$scope','$http', '$log', 'UserService','$location'];
