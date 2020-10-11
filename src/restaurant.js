function createRestaurant(name, menus) {
  var restaurant = {
    name: name,
    menus: {
      breakfast: [],
      lunch: [],
      dinner: [],
    },
  };
return restaurant;
}

function addMenuItem(restaurant, menuItem) {
if (restaurant.menus.breakfast.includes(menuItem) == false && menuItem.type === "breakfast") {
  restaurant.menus.breakfast.push(menuItem);
} else if (restaurant.menus.lunch.includes(menuItem) === false && menuItem.type === "lunch") {
  restaurant.menus.lunch.push(menuItem);
} else if (restaurant.menus.dinner.includes(menuItem) === false && menuItem.type === "dinner") {
  restaurant.menus.dinner.push(menuItem);
};
}

function removeMenuItem(restaurant, menuItemName, menuItemType) {
//if (restaurant.menus.breakfast.includes(menuItemName) && restaurant.menus.breakfast.type === menuItemType){
  for (i = 0; i < restaurant.menus.breakfast.length; i++) {
    if (restaurant.menus.breakfast[i].name === menuItemName && restaurant.menus.breakfast[i].type === menuItemType) {
      restaurant.menus.breakfast.splice(i, 1);
      return `No one is eating our ${menuItemName} - it has been removed from the ${menuItemType} menu!`;
    };
  };
//};
//if (restaurant.menus.lunch.includes(menuItemName) && restaurant.menus.lunch.type === menuItemType){
  for (n = 0; n < restaurant.menus.lunch.length; n++) {
    if (restaurant.menus.lunch[n].name === menuItemName && restaurant.menus.lunch[n].type === menuItemType) {
      restaurant.menus.lunch.splice(n, 1);
      return `No one is eating our ${menuItemName} - it has been removed from the ${menuItemType} menu!`;
    };
  };
//};
//if (restaurant.menus.dinner.includes(menuItemName) && restaurant.menus.dinner.type === menuItemType){
  for (j = 0; j < restaurant.menus.dinner.length; j++) {
    if (restaurant.menus.dinner[j].name === menuItemName && restaurant.menus.dinner[j].type === menuItemType) {
      restaurant.menus.dinner.splice(j, 1);
      return `No one is eating our ${menuItemName} - it has been removed from the ${menuItemType} menu!`;
    };
  };
//};
return "Sorry, we don't sell Mom's Spaghetti, try adding a new recipe!";
}











  //console.log(restaurant.menus.breakfast);
  //if (restaurant.menus.breakfast.includes(menuItemName) === true && menuItemType.type === "breakfast") {
  //  restaurant.menus.breakfast.splice(0, 1);
  //  };
  //  console.log("No one is eating our Bacon and Eggs Pizza - it has been removed from the breakfast menu!");
  //}
  //else if (restaurant.menus.lunch.includes(menuItem) !== false && menuItem.type === "lunch") {
  //  restaurant.menus.lunch.splice(menuItem, 1);
  //} else if (restaurant.menus.dinner.includes(menuItem) !== false && menuItem.type === "dinner") {
  //  restaurant.menus.dinner.splice(menuItem, 1);
  //  console.log("No one is eating our Veggie Pizza - it has been removed from the dinner menu!");
//  };
//}

module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem
}
