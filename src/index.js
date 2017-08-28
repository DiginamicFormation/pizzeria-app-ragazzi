console.log("Bonjour Team Ragazzi :D")

import angular from "angular"
import ngRoute from 'angular-route'

import headerComponent from './components/header/header.component'
import footerComponent from './components/footer/footer.component'
import homeComponent from './components/home/home.component'

import 'bootstrap/dist/css/bootstrap.css'
import userModule from './user/user.module'


angular.module('pizzeriaApp', ['ngRoute', userModule.name])
	.component('ragHeader', headerComponent)
	.component('ragFooter', footerComponent)
	.component('ragHome', homeComponent)
	.config(($routeProvider, $locationProvider) => {

		$locationProvider.html5Mode(true)

		$routeProvider

		.when('/home',{
			template:'<rag-home></rag-home>'
		})
		
		.otherwise({
			redirectTo: '/home'
		})
		
	})
