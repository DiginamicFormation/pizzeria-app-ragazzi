import angular from "angular"
import ngRoute from 'angular-route'

import home from './home/home.html'
import 'bootstrap/dist/css/bootstrap.css'
import HomeController from "./home/home.controller"
import order from './order/order.html'

angular.module('pizzeriaApp', ['ngRoute'])
	.controller(HomeController.name, HomeController)
	.config(($routeProvider, $locationProvider) => {

		$locationProvider.html5Mode(true)

		$routeProvider
		.when('/index', {
			template: home
		})
		.when('/order',{
			template: order
		})
		.otherwise({
			redirectTo: '/index'
		})
		
	})
