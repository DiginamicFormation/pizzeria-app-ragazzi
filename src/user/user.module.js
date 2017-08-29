import userComponent from './component/user.component'
import userConnexionComponent from './component/user.connexion.component'
import userForgotPasswordComponent from './component/user.forgotPassword.component'

import UserService from './user.service'
import UserController from './user.controller'
import UrlService from './url.service'

const userModule = angular.module('userModule',[require('angular-sessionstorage')])

.controller('UserController', UserController)
.service('UserService', UserService)
.constant('UrlService', UrlService)
// <rag-user-create></rag-user-create>
.component('ragUserCreate', userComponent)
.component('userConnexionComponent', userConnexionComponent)
.component('userForgotPasswordComponent', userForgotPasswordComponent)

.config(($routeProvider)=>{
	$routeProvider

	.when('/createAccount',{
		template : '<rag-user-create></rag-user-create>',
	})

	.when('/connectAccount',{
		template : '<user-connexion-component></user-connexion-component>'
	})

	.when('/forgotPassword',{
		template : '<user-forgot-password-component></user-forgot-password-component>'
	})

})



export default userModule
