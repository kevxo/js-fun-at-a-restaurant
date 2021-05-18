class Chef {
  constructor(name, restaurant) {
    this.name = name;
    this.restaurant = restaurant;
  }

  greetCustomer(name, morning = false) {
    if (morning === true) {
      return `Good morning, ${name}!`
    }

    return `Hello, ${name}!`
  }

  checkForFood(foodItem){
    var menus = this.restaurant.menus
    for (const [key, value] of Object.entries(menus)){
       if (key === foodItem.type){
        for (var i = 0; i < value.length; i++) {
          if (value[i].name === foodItem.name){
            return `Yes, we're serving ${foodItem.name} today!`
          }
        }
      }
    }

    return `Sorry, we aren't serving ${foodItem.name} today.`
  }
}

module.exports = Chef;