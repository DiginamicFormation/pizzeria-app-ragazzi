import userComponent from './component/user.component'
import userConnexionComponent from './component/user.connexion.component'
import userForgotPasswordComponent from './component/user.forgotPassword.component'
import userModifyAccountComponent from './component/user.modifyAccount.component'
import userInfosComponent from './component/user.infos.component'

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
.component('userModifyAccountComponent', userModifyAccountComponent)
.component('userInfosComponent', userInfosComponent)

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

	.when('/modifyAccount',{
		template : '<user-modify-account-component></user-modify-account-component>'
	})

	.when('/displayInfos',{
		template : '<user-infos-component></user-infos-component>'
	})

})



export default userModule
