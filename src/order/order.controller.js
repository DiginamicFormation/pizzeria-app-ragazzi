export default class OrderController{
    constructor($http,$location){
        this.$http = $http
        this.$location = $location
        this.result = []
        this.pizzasOrder = []
    }
    $onInit(){       
        this.pizzasList = JSON.parse(localStorage['shoppingCart'])
        this.total = JSON.parse(localStorage['shoppingCartTotal'])    
        
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
    
    changePage(adress){
        if(adress == 'modifier'){
            this.$location.path('/shoppingCart')
        }else if(adress == 'valider'){
            this.$location.path('/home')
        }
    }
}


OrderController['$inject'] = ['$http','$location']