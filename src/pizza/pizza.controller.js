export default class PizzaController {
	constructor(PizzaService) {
		this.PizzaService = PizzaService
	}

	$onInit() {
		this.PizzaService.getAllPizzas()
			.then((tabPizzas) => {
				this.pizzas = tabPizzas
				
				this.pizzasViande = tabPizzas.filter((pizza) => {return pizza.categorie === "viande"})
				this.pizzasSansViande = tabPizzas.filter((pizza) => {return pizza.categorie === "sans_viande"})
				this.pizzasPoisson = tabPizzas.filter((pizza) => {return pizza.categorie === "poisson"})
				
			}, (errorStatus) => {
				this.errorInit = `Status: $(errorStatus.code) - $(errorStatus.text)`
			})
	}

	
}

PizzaController.$inject = ['PizzaService']
