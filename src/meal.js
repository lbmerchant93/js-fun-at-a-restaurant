function nameMenuItem(menuItemName) {
  return `Delicious ${menuItemName}`;
};

function createMenuItem(name, price, type) {
  var menuItem = {
    name: name,
    price: price,
    type: type,
  };
  return menuItem;
};

function addIngredients(ingredientName, ingredients) {
  if (ingredients.includes(ingredientName) === false) {
    ingredients.push(ingredientName);
  }
//  else {
  return ingredients;
//};
}

function formatPrice(initialPrice) {
  return "$" + initialPrice;
}

function decreasePrice(initialPrice) {
  return initialPrice - (initialPrice * 0.10);
}

function createRecipe(title, ingredients, type) {
  return {title: title, ingredients: ingredients, type: type};
}

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}
