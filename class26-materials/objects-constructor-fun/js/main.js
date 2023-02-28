//Create a constructor with 4 properties and 3 methods PIZZA EDITION
function MakePizza(size,toppings,crust,sauce){
    this.size = size 
    this.toppings = toppings
    this.crust = crust
    this.sauce = sauce 
    this.estimatedDeliveryTime = function(){
        console.log('Calculating...')
    }
    this.burnMouth = function(){
        console.log('Fuck, Thats Hot!')
    }
    this.frisbee = function(){
    console.log('YYEEEEEETTTT')
}
let pizza = new PizzaMachine('large',['spinach','onion'],'stuffed','heavy');
