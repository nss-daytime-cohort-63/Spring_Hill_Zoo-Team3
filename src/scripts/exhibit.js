import { getAnimals, getExhibits } from "./database.js";
import { animalHtml } from "./animals.js";

const exhibits = getExhibits()
const animals = getAnimals()


export const exhibit = ()=>{
    let exhibitHtml="<section class=exhibits>"
    
    for (let animal of animals ){
        for(let exhibit of exhibits){
            if (animal.exhibitId === exhibit.id){
                exhibitHtml += `<article id="exhibit.${exhibit.id}">`
                exhibitHtml +=  `<h2 class="exhibit_title">${exhibit.name}</h2>`
                exhibitHtml += `<div class="exhibit-Img"><img  class="img" src="${exhibit.photo}"/></div>`
                exhibitHtml += animalHtml(exhibit.id)
                exhibitHtml += "</article>"
            }
        }
    }
    exhibitHtml += "</section>"
    return exhibitHtml
}