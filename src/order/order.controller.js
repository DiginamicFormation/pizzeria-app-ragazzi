export default class OrderController{
    constructor($http,OrderService){
        this.$http = $http
        this.OrderService = OrderService
        this.result = []
        this.pizzasOrder = []
    }
    $onInit(){
        this.order = this.$http.get('http://localhost:3000/orders/1')
        .then((res)=>{
            return res.data;
        })        
        this.order.then(res=>{
            this.pizzasOrder = res.pizzas
            this.total = res.total
        })
        this.pizzas = this.$http.get('http://localhost:3000/pizzas')
        .then(res=>{
            return res.data
        })
        this.pizzas.then(res=>{
            res.forEach(element=>{
              return  this.pizzasOrder.forEach(pizza=>{
                   if(pizza.id===element.id){
                       this.elt = element
                       this.elt.quantity = pizza.quantity
                       this.result.push(this.elt)
                   }                   
               })
               
            })
        })
                    
    }
    aEmporter(){
        
        if(this.myStyleEmporter == undefined){
            this.myStyleEmporter={border: 'solid 2px blue'}
            this.selection = "emporter"
            this.myStyleLivraison=undefined
        }else{
            this.myStyleEmporter=undefined
            this.selection = undefined
        }
        
    }
    aLivrer(){
        if(this.myStyleLivraison == undefined){
            this.myStyleLivraison={border: 'solid 2px blue'}
            this.selection = "livraison"
            this.myStyleEmporter=undefined
        }else{
            this.myStyleLivraison=undefined
            this.selection = undefined
        }
    }
    valider(){
        if(this.selection==undefined){
            alert('Erreur veuillez sélectionné si vous préferez à emporter où à livrer')
        }else{
            if(this.selection ==="livraison"){
                alert('Livraison en cours')
            }else{
                alert('Veuillez venir dans 42 minutes merci :)')
            }
        }
    }
      
}

OrderController['$inject'] = ['$http']