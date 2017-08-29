import shoppingCartComponent from './shoppingCart.component'
import shoppingCartController from './shoppingCart.controller'
import ShoppingCartService from './shoppingCart.service'
const shoppingCartModule = angular.module('shoppingCartModule',[])
.component('ragShop', shoppingCartComponent)
.config(($routeProvider)=>{
    $routeProvider.when('/shoppingCart',{
        template : '<rag-shop></rag-shop>',
    })
})
.service(ShoppingCartService.name,ShoppingCartService)
export default shoppingCartModule