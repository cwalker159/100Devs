//Create a pizza object that has four properties and three methods

let pizza = {}

pizza.size = 'large'
pizza.toppings = ['spinach','onion','jalapenos','banana peppers']
pizza.crust = 'stuffed'
pizza.sauce = 'heavy'

pizza.estimatedDeliveryTime = function(){
    console.log('Calculating...')
}
pizza.burnMouth = function(){
    console.log('Fuck, Thats Hot!')
}
pizza.frisbee = function(){
    console.log('YYEEEEEETTTT')
}

//CREATE A CONSTRUCTOR SO YOU CAN MAKE MANY PIZZAS
