import { getAnimals, getExhibits } from "./database.js";

const animals = getAnimals()

export const animalHtml =(exhibitID)=>{
    let animalText = ""
    for (let animal of animals){
        if(animal.exhibitId===exhibitID){
        animalText += `<div class="animal">`
        animalText +=  `<h3> Featured Animal</h3>`
        animalText +=  `<img  class="animalImg" src="${animal.photo}"/></img>`
        animalText += `<ul class="list"><li> Name: ${animal.name}</li> \n`
        animalText += `<li>Species: ${animal.species}</li>  \n`
        animalText += `<li>Favorite Food: ${animal.food}</li>  </ul>
        </div>`
        }
    }
    return animalText
}