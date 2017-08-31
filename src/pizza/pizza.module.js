import pizzaComponent from './pizza.component'
import PizzaService from './pizza.service'
import PizzaController from './pizza.controller'
import pizzaFilter from './pizza.filter'

const pizzaModule = angular.module('pizzaModule', [])
	.component('ragPizzaList', pizzaComponent)
	.service(PizzaService.name, PizzaService)
	.controller(PizzaController.name, PizzaController)
	.filter('categories', pizzaFilter)
	.config(($routeProvider) => {
		$routeProvider
		.when('/pizza/list', {
			template: '<rag-pizza-list afficher-filtre="true" nb-pizzas=$ctrl.pizzas.length></rag-pizza-list>'
		})
	})

export default pizzaModule
