console.log("Bonjour Team Ragazzi :D")

import angular from "angular"
import ngRoute from 'angular-route'

import home from './home/home.html'
import 'bootstrap/dist/css/bootstrap.css'
import HomeController from "./home/home.controller"
import order from './order/order.html'
import userModule from './user/user.module'

angular.module('pizzeriaApp', ['ngRoute', userModule.name])
	.controller(HomeController.name, HomeController)
	.config(($routeProvider, $locationProvider) => {

		$locationProvider.html5Mode(true)

		$routeProvider
		.otherwise({
			redirectTo: '/createAccount'
		})
		
	})


