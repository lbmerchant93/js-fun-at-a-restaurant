class Chef {
  constructor(name, restaurant) {
    this.name = name;
    this.restaurant = restaurant;
    this.greetCustomer = function greeting(name, morningTime) {
      if(morningTime === true) {
        return `Good morning, ${name}!`;
      };
      return `Hello, ${name}!`;
    };
    this.checkForFood = function foodConfirmation(foodItem) {
      for (var i = 0; i < restaurant.menus[foodItem.type].length; i++) {
        if(restaurant.menus[foodItem.type][i].name.includes(foodItem.name)) {
          return `Yes, we're serving ${foodItem.name} today!`;
        };
    };
          return `Sorry, we aren't serving ${foodItem.name} today.`;
  };
};
}




//   for (var i = 0; i < restaurant.menus.breakfast.length; i++) {
//       if(restaurant.menus.breakfast.includes(foodItem)) {
//               return `Yes, we're serving ${foodItem.name} today!`;
//       };
//     };
//     for (var i = 0; i < restaurant.menus.lunch.length; i++) {
//         if(restaurant.menus.lunch.includes(foodItem)) {
//                 return `Yes, we're serving ${foodItem.name} today!`;
//         };
//     };
//     for (var i = 0; i < restaurant.menus.dinner.length; i++) {
//         if(restaurant.menus.dinner.includes(foodItem)) {
//                 return `Yes, we're serving ${foodItem.name} today!`;
//         };
//   };
//   return `Sorry, we aren't serving ${foodItem.name} today.`;
// };
// };
// }

module.exports = Chef;
