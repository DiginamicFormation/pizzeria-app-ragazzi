export default class UserService{

	constructor($http, $log){
		this.$http = $http;
		this.$log = $log;
	}

	createAccount(user){
		this.user{
			'email': user.email,
			'password': user.password,
			'firstname': user.firstname,
			'lastname': user.lastname,
			'adress': user.adress
		}

		$http({
			url : 'http://http://localhost:3000/users',
			method : 'POST'
			data : user;
		})
		.then((res)=>{
			$log.log("Created OK ! (y)")
		},(err)=>{
			$log.log("Created faile ! :(")
		})
	}


}