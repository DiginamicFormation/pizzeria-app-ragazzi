 import orderComponent from './order.component'
 import orderController from './order.controller'

 const orderModule = angular.module('orderModule',[])
 .component('ragOrder', orderComponent)
 .config(($routeProvider)=>{
     $routeProvider.when('/order',{
         template : '<rag-order></rag-order>',
     })
 })

 export default orderModule