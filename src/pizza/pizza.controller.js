export default class PizzaController {
	constructor(PizzaService, ShoppingCartService) {
		this.PizzaService = PizzaService
		this.pizzaFilter = "categories:cat"
		this.ShoppingCartService = ShoppingCartService
		this.shoppingCart = []
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

	addPizza(pizzaId) {
		if (localStorage.getItem('shoppingCart') == null) {
					this.ShoppingCartService.findPizzaByPizzaId(pizzaId)
								.then(pizza => {
										pizza.quantity = 1
										this.shoppingCart.push(pizza)
										localStorage['shoppingCart'] = JSON.stringify(this.shoppingCart)
								})
				}

		else {
				this.shoppingCart = JSON.parse(localStorage['shoppingCart'])
				this.notFound = true
				this.shoppingCart.forEach((pizza)=>{
						if(pizza.id === pizzaId){
								pizza.quantity += 1
								this.notFound = false
								localStorage['shoppingCart'] = JSON.stringify(this.shoppingCart)
						}
				}, this);
				if(this.notFound){
					this.ShoppingCartService.findPizzaByPizzaId(pizzaId)
								.then(pizza => {
										pizza.quantity = 1
										this.shoppingCart.push(pizza)
										localStorage['shoppingCart'] = JSON.stringify(this.shoppingCart)
								})
				}
			}
	}

}

PizzaController.$inject = ['PizzaService', 'ShoppingCartService']
