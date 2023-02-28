//Create a mouse object that has four properties and three methods

let mouse = {}

mouse.brand = 'Logitech'
mouse.color = 'Black'
mouse.model = 'MX Ergo'
mouse.wireless = true 

mouse.leftClick = function(){
    console.log('Left Click')
}
mouse.rightClick = function(){
    console.log('right Click')
}
mouse.scroll = function(){
    console.log('JUMP JUMP')


//function MakeCar(carMake,carModel,carColor,numOfDoors){
//    this.make = carMake
//    this.model = carModel
//    this.color = carColor
//    this.doors = numOfDoors
//    this.honk = function(){
//      alert('BEEP BEEP FUCKER')
//    }
//    this.lock = function(){
//      alert(`Locked ${this.doors} doors!`)
//    }
//  }
//let hondaCivic = new MakeCar('Honda','Civic','Silver', 4)
//
//let teslaRoadster = new MakeCar('Tesla','Roadster', 'Red', 2)

// ADD BLUETOOTH TO THE TESLA = Prototypa

let teslaRoadster = new MakeCar('Tesla','Roadster', 'Red', 2)

console.log( teslaRoadster.bluetooth )  //undefined

MakeCar.prototype.bluetooth = true

console.log( teslaRoadster.bluetooth ) //true 