export default class HeaderCtrl {
		constructor($rootScope) {
			this.shoppingCart = []
			this.$rootScope = $rootScope
		}
		$onInit(){
			this.shoppingCart = JSON.parse(localStorage['shoppingCart'])
			this.nbItems = this.shoppingCart.length

			this.$rootScope.$on('addPizzaEvent', (event, data) => {
				this.shoppingCart = JSON.parse(localStorage['shoppingCart'])
				this.nbItems = this.shoppingCart.map(p=>p.quantity).reduce((sum,q)=>sum+q)
			})

		}
}
