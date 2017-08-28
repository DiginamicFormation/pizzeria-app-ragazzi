import angular from "angular"
import ngRoute from 'angular-route'

import HomeController from "./home/home.controller"

angular.module('pizzeriaApp', ['ngRoute'])
	.controller(HomeController.name, HomeController)
	.config(($routeProvider, $locationProvider) => {

		$locationProvider.html5Mode(false)

		$routeProvider
		.$.when('/index', {
			templateUrl: 'index.html'
		})
		
	})
