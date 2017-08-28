import angular from "angular"
import ngRoute from 'angular-route'

import headerComponent from './components/header/header.component'
import footerComponent from './components/footer/footer.component'
import homeComponent from './components/home/home.component'

angular.module('pizzeriaApp', ['ngRoute'])
	.component('header', headerComponent)
	.component('footer', footerComponent)
	.component('home', homeComponent)
	.config(($routeProvider, $locationProvider) => {

		$locationProvider.html5Mode(true)

		$routeProvider
		.when('/index', {
			template: home
		})
		.otherwise({
			redirectTo: '/index'
		})
		
	})
