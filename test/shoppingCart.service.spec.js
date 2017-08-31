describe('Test de service avec $http', () => {
    beforeEach(() => {
        angular.mock.module('pizzeriaApp')
    })
    // injection du mock $httpBackend
    it('mock du service $http', angular.mock.inject(($httpBackend,ShoppingCartService)=> {
    // définition du comportement attendu de $http
    $httpBackend.when('GET', 'http://localhost:3000/pizzas/1').respond({
        "id": 1,
        "name": "4 fromages",
        "price": "10.5",
        "imageUrl": "img/Pizza_4fromages.jpg",
        "categorie": "sans_viande"
      });
      ShoppingCartService.findPizzaByPizzaId(1).then(pizzas => {
        expect(pizzas.id).toBe(1)
        expect(pizzas.name).toEqual('4 fromages')
    })
    $httpBackend.flush(); // déclenche les réponses HTTP
    }))
    })