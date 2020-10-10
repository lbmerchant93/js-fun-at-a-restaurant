function takeOrder(order, deliveryOrders) {
  if (deliveryOrders.length <= 2) {
   deliveryOrders.push(order);
}
/*else {
  deliveryOrders;
};*/

}
function refundOrder(removeOrder, order) {
  order.splice((removeOrder - 1), 1);
}

function listItems(order) {
  var allSandwiches = ""
    for (var i = 0; i < order.length; i++) {
      var sandwich = ""
      if (i < order.length -1) {
        sandwich = order[i].item + ", ";
      } else {
        sandwich = order[i].item;
      };
      allSandwiches += sandwich;
    };
  return allSandwiches;
}

function searchOrder(deliveryOrders, orderItemQuestioning) {
  for (var i = 0; i < deliveryOrders.length; i++) {
    if (deliveryOrders[i].item === orderItemQuestioning) {
      return true;
    }
  };
  return false;
}

module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}
