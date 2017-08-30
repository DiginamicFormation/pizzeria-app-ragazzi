export default class PizzaController {
	constructor(PizzaService, ShoppingCartService, $rootScope) {
		this.PizzaService = PizzaService
		this.ShoppingCartService = ShoppingCartService
		this.shoppingCart = []
		this.$rootScope = $rootScope
	}

	$onInit() {
		this.cat = ''

		this.PizzaService.getAllPizzas()
			.then((tabPizzas) => {
				this.pizzas = tabPizzas

				this.nbPizzas = this.pizzas.length

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
						this.$rootScope.$emit('addPizzaEvent', pizza.id)

				})
		} else {
			this.shoppingCart = JSON.parse(localStorage['shoppingCart'])
			this.notFound = true
			this.shoppingCart.forEach((pizza)=>{
					if(pizza.id === pizzaId){
							pizza.quantity += 1
							this.notFound = false
							localStorage['shoppingCart'] = JSON.stringify(this.shoppingCart)
							this.$rootScope.$emit('addPizzaEvent', pizza.id)

					}
			}, this);
			if(this.notFound){
				this.ShoppingCartService.findPizzaByPizzaId(pizzaId)
							.then(pizza => {
									pizza.quantity = 1
									this.shoppingCart.push(pizza)
									localStorage['shoppingCart'] = JSON.stringify(this.shoppingCart)
									this.$rootScope.$emit('addPizzaEvent', pizza.id)

							})
			}
		}



	}

}

PizzaController.$inject = ['PizzaService', 'ShoppingCartService', '$rootScope']
