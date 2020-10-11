function takeOrder(order, deliveryOrders) {
  if (deliveryOrders.length <= 2) {
   deliveryOrders.push(order);
}
/*else {
  deliveryOrders;
};*/

}
function refundOrder(orderRemoved, deliveryOrders) {
  deliveryOrders.splice((orderRemoved -1), 1);
}

function listItems(order) {
  var allItems = ""
    for (var i = 0; i < order.length; i++) {
      var item = ""
      if (i < order.length -1) {
        item = order[i].item + ", ";
      } else {
        item = order[i].item;
      };
      allItems += item;
    };
  return allItems;
}

function searchOrder(deliveryOrders, orderItemInQuestion) {
  for (var i = 0; i < deliveryOrders.length; i++) {
    if (deliveryOrders[i].item === orderItemInQuestion) {
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
