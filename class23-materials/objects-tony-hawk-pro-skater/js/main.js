//Create a Tony Hawk Pro Skater constructor that makes fighting game characters with 4 properties and 3 methods
function MakesTonyHawk(){
    this.namem = name
    this.stance = stance 
    this.sponsor = this.sponsor
    this.specialMove = specialMove
    this.flip = function(){
        console.log('Kickflip')
    }
    this.taunt = function(){
        console.log(`Don't make me use my ${this.specialMove}`)
    }
    this.grab = function(){
        console.log('Melon Grab')
    }
}
let kareemCampbell = new 