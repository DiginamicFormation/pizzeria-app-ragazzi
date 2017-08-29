export default class ShoppingCartController{
    constructor($http,ShoppingCartService) {
        this.$http = $http
        this.ShoppingCartService = ShoppingCartService
        this.shoppingCart = []
    }

    $onInit() {       
        if (localStorage.getItem('shoppingCart') == null) {
            this.ShoppingCartService.pizzasList.forEach(idPizza => {
                this.ShoppingCartService.findPizzaByPizzaId(idPizza)
                    .then(pizza => {
                        pizza.quantity = 1
                        this.shoppingCart.push(pizza)
                        localStorage['shoppingCart'] = JSON.stringify(this.shoppingCart);
                    })
            })
        } else {
            this.shoppingCart = JSON.parse(localStorage['shoppingCart'])
        }
    }
    delete(pizza){
      let newTab = this.shoppingCart.filter(item=>{
            return item.id != pizza.id
      })
      localStorage['shoppingCart'] = JSON.stringify(newTab);
      this.shoppingCart = newTab
    }
    update(){
       console.log(this.quantity);
       
    }
}

ShoppingCartController['$inject'] = ['$http','ShoppingCartService']
