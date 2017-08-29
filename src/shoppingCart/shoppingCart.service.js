export default class ShoppingCartService {
   
    constructor($http) {
        this.$http = $http;
        this.pizzasList = [1,2];
    }

    findPizzaByPizzaId(pizzaId) {
        return this.$http.get('http://localhost:3000/pizzas/' + pizzaId)
            .then(response => {
                return response.data;
            }, response => {});
    }

    ajoutPanier(pizzaId) {
        this.pizzasList.push(pizzaId);  
    }

}
