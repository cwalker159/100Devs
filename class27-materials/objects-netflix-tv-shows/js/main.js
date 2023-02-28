//Create a Netflix TV Show class with a constructor that makes Netflix TV Shows with 4 properties and 3 methods

class WatchingNetflix{
    constructor(title,genre,rating,numOfEps){
      this.genre = genre
      this.title = title
      this.rating = rating
      this.numOfEps = numOfEps 
    }
    play(){
      console.log('Playing...')
    }
    stop(){
      console.log('Stopping...')
    }
    saveToList(){
        console.log('Saved To List')
    }
  }
  
  let brigderton = new WatchingNetflix('Bridgerton', 'Romance Drama', '99%', 16)
