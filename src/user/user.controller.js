export default class UserController {

	constructor($scope,$http, $log, UserService){
		this.$scope = $scope;
		this.$http = $http;
		this.$log = $log;
		this.UserService = UserService;
		this.account = {};
		this.tabUsers = [];
	}


	$onInit(){
		this.verifyIfUserLogged();
	}

	getAllUsers(){
		this.tabUsers = this.UserService.getAllUsers();
	}

	createAccount(account){
		this.UserService.createAccount(account)
		this.resetForm();
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
	this.forgottenPassword = this.UserService.getForgottenPassword(account);
}


changePage(link){
	this.UserService.changePage(link);
}

}

UserController['$inject'] = ['$scope','$http', '$log', 'UserService'];
