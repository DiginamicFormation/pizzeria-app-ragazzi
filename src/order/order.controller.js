export default class OrderController{
    constructor($http,$location,$sessionStorage){
        this.$http = $http
        this.$location = $location
        this.$sessionStorage = $sessionStorage
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
            var date = new Date()
            this.userConnected = JSON.parse(this.$sessionStorage.get('userConnected'));
            this.order = {
                'idOrder': this.stringGen(),
                'pizzas': this.pizzasList,
                'idUser': this.userConnected.email,
                'date': date.getDay() +'/'+ date.getMonth() +'/'+date.getFullYear() ,
                'total':this.total,
                'statut':this.selection
            }
            this.$http({
                url: 'http://localhost:3000/orders',
                method: 'POST',
                data: this.order
              })
              localStorage.removeItem('shoppingCart')
              localStorage.removeItem('shoppingCartTotal')
              this.$location.path('/home')
          
        }
    }
    
    changePage(adress){
        if(adress == 'modifier'){
            this.$location.path('/shoppingCart')
        }else if(adress == 'valider'){
            this.$location.path('/home')
        }
    }
    stringGen()
    {
        var text = " ";
        
        var charset = "abcdefghijklmnopqrstuvwxyz0123456789";
        
        for( var i=0; i < 10; i++ )
            text += charset.charAt(Math.floor(Math.random() * charset.length));
        
        return text;
    }
}


OrderController['$inject'] = ['$http','$location','$sessionStorage']