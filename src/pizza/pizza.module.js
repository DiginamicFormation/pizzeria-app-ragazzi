import pizzaComponent from './pizza.component'
import PizzaService from './pizza.service'
import PizzaController from './pizza.controller'


const pizzaModule = angular.module('pizzaModule', [])
	.component('ragPizzaList', pizzaComponent)
	.service(PizzaService.name, PizzaService)
	.controller(PizzaController.name, PizzaController)
	.filter('categories', () => {
		return function(pizzas, categorie) {
			if (pizzas == null) {
				return pizzas = []
			} 
			let pizzasFiltrees = pizzas.filter((pizza) => {return categorie === pizza.categorie})
			if (categorie == "") {
				return pizzas
			}
			return pizzasFiltrees
		}
	})
	.config(($routeProvider) => {
		$routeProvider
		.when('/pizza/list', {
			template: '<rag-pizza-list></rag-pizza-list>'
		})
	})

export default pizzaModule
