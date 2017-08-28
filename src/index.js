import angular from "angular"
import ngRoute from 'angular-route'

import home from './home/home.html'

import HomeController from "./home/home.controller"

angular.module('pizzeriaApp', ['ngRoute'])
	.controller(HomeController.name, HomeController)
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
