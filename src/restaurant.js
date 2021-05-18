function createRestaurant(name){
  var obj = {
    name: name,
    menus: {
      breakfast: [],
      lunch: [],
      dinner: []
    }
  };

  return obj;
}


function addMenuItem(restaurant, obj){
  for (const [key, value] of Object.entries(restaurant.menus)) {
    if (obj.type == key && !value.includes(obj)){
      value.push(obj);
    }
  }
}

function removeMenuItem(restaurant, name, type){
  for (const [key, value] of Object.entries(restaurant.menus)) {
    for (var i = 0; i < value.length; i++) {
      if (value[i].name == name) {
        value.splice(i, 1);
        return `No one is eating our ${name} - it has been removed from the ${type} menu!`
      }
    }
  }

  return `Sorry, we don't sell ${name}, try adding a new recipe!`
}

module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem
}