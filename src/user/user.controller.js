export default class UserController {

	constructor($scope,$http, $log, UserService){
		this.$scope = $scope;
		this.$http = $http;
		this.$log = $log;
		this.UserService = UserService;
		this.account = {};
		this.tabUsers = [];
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


}

UserController['$inject'] = ['$scope','$http', '$log', 'UserService'];
