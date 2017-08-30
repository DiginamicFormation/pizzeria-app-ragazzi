export default class ShoppingCartController{
    constructor($http,ShoppingCartService,$location) {
        this.$http = $http
        this.$location = $location
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
                        this.save()
                    })
            })
        } else {
            this.shoppingCart = JSON.parse(localStorage['shoppingCart'])
            this.total()
        }
    }
    delete(pizza){
      let newTab = this.shoppingCart.filter(item=>{
            return item.id != pizza.id
      })
      localStorage['shoppingCart'] = JSON.stringify(newTab);
      this.shoppingCart = newTab
      this.total()
    }
    update(quantity,item){
        if(quantity == 0){
            quantity = 1
        }
       item.quantity = quantity
       this.save()
    }

    save(){
        localStorage['shoppingCart'] = JSON.stringify(this.shoppingCart);
        this.total()
    }

    total(){
        this.shoppingCart = JSON.parse(localStorage['shoppingCart'])
        this.totalPizza = 0
        this.shoppingCart.forEach(pizza=>{
            this.totalPizza += pizza.price * pizza.quantity
        })
    }
    command(){
        localStorage['shoppingCartTotal'] = JSON.stringify(this.totalPizza)
        if(this.totalPizza != 0){
            this.$location.path('/order')
        }else{
            this.$location.path('/home')
        }
        
    }
}

ShoppingCartController['$inject'] = ['$http','ShoppingCartService','$location']
