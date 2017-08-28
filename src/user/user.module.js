import userComponent from './user.component'

import UserService from './user.service'
import UserController from './user.controller'
import UrlService from './url.service'

const userModule = angular.module('userModule',[])

.controller('UserController', UserController)
.service('UserService', UserService)
.constant('UrlService', UrlService)

.component('ragUserCreate', userComponent)
.config(($routeProvider)=>{
	$routeProvider.when('/createAccount',{
		template : '<rag-user-create></rag-user-create>',
	})
})



export default userModule
