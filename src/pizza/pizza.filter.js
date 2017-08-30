const pizzaFilter = () => {
  return function(pizzas, categorie) {
    if (pizzas == null) {
      return pizzas = []
    }
    let pizzasFiltrees = pizzas.filter((pizza) => {return categorie === pizza.categorie})
    if (categorie == "") {
      return pizzas
    }
    return pizzasFiltrees
  }
}

export default pizzaFilter
