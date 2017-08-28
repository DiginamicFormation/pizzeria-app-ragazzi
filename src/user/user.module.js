import userComponent from './user.component'

const userModule = angular.module('userModule',[])
.component('ragUserCreate', userComponent)
.config(($routeProvider)=>{
	$routeProvider.when('/createAccount',{
		template : '<rag-user-create></rag-user-create>',
	})
})

export default userModule