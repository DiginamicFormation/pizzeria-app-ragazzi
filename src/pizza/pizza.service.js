export default class PizzaService {
	constructor($http) {
		this.$http = $http
	}

	getAllPizzas() {
		return this.$http.get('http://localhost:3000/pizzas')
			.then((resp) => {
				return resp.data
			}, (resp) => {
				errorStatus = {
					'code': resp.status,
					'text': resp.statusText
				}
				return errorStatus
			})
	}
	
}

