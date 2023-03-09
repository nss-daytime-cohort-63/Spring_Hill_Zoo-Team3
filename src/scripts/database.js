/* 
  Module Responsibility: 
    Contain the data for the application and expose
    it via getter functions.
*/

const database = {
    animals: [
      {
        id: 1,
        name: "Phil",
        species: "Snake",
        food: "Popcorn",
        exhibitId: 1,
        photo:'../photos/snake.jpg'
      },
      {
        id: 2,
        name: "Josephine",
        species: "African Elephant",
        food: "Funnel Cakes",
        exhibitId: 3,
        photo:'../photos/African-elephant.jpg'
      },
      {
        id: 3,
        name: "Larry",
        species: "Lion",
        food: "Candy Corn",
        exhibitId: 2,
        photo:'../photos/lion.jpg'
      },
    ],
    exhibit: [
      {
        id: 1,
        name: "Reptile Excursion",
        indoor: true,
        photo:'../photos/Reptiles.jpg'
      },
      {
        id: 2,
        name: "Big Cats of the World",
        indoor: false,
        photo:'../photos/big-cats.jpg'
      },
      {
        id: 3,
        name: "Just Elephants",
        indoor: false,
        photo:'../photos/elephants.jpg'
      }
    ],
    concessions: [
      {
        id: 1,
        name: "Just Dippin' Dots",
        food: "Dippin Dots",
        photo:'../photos/dippindots.jpg'
      },
      {
        id: 2,
        name: "A Little Bit Chowder Now",
        food: "Clam Chowder",
        photo:'../photos/clam-chowder.jpg'
      }
    ]
  }

  export const getAnimals =()=>{
    return database.animals.map(animals=>({...animals}))
  }
  export const getExhibits =()=>{
    return database.exhibit.map(exhibit=>({...exhibit}))
  }
  export const getConcessions = () => {
      return database.concessions.map(concession => ({...concession}))
  }