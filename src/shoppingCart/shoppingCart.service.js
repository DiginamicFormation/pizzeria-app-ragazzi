export default class ShoppingCartService {
   
    constructor($http) {
        this.$http = $http;
        this.pizzasList = [1,2];
        this.shoppingCart = []
    }

    findPizzaByPizzaId(pizzaId) {
        return this.$http.get('http://localhost:3000/pizzas/' + pizzaId)
            .then(response => {
                return response.data;
            }, response => {});
    }

    addShoppingCart(pizzaId) {
        if (localStorage.getItem('shoppingCart') == null) {
            localStorage['shoppingCart'] = JSON.stringify(this.shoppingCart);
        }
        this.pizza = this.findPizzaByPizzaId(pizzaId)
        this.shoppingCart = JSON.parse(localStorage['shoppingCart'])
        this.found =false
        this.shoppingCart.forEach((pizza)=>{
            if(pizza.id === pizzaId){
                pizza.quantity += 1
                this.found = true
            }
        }, this);
        if(!this.found){
            this.pizza.quantity = 1
            this.shoppingCart.push(pizza)
        }
        localStorage['shoppingCart'] = JSON.stringify(this.shoppingCart)
    }

}
