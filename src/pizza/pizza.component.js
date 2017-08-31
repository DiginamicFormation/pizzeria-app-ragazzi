import pizzaListTemplate from './pizzaList.html'
import pizzaCtrl from './pizza.controller'

const pizzaComponent = {
	template: pizzaListTemplate,
	controller: pizzaCtrl,
	bindings: {
		afficherFiltre : '<',
		nbPizzas : '<'
	}
}

export default pizzaComponent
