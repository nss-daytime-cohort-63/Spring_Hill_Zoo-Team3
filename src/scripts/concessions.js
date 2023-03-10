import { getConcessions } from "./database.js"


export const concessionsList = () => {
    const concessions= getConcessions()

    let htmlString = '<article class="ConcessionsList">'

    for( const concession of concessions) {

  htmlString += `<section class="concessionContainer">

        <img src='${concession.photo}' class='concessionPhoto'>

        <div class ='concessionsWords'>
            <h3 class ="names">${concession.name}</h3>
            <p class="concessionsDescription">If you get hungry on your visit come checkout ${concession.name}, where we are known for our famous "${concession.food}".<p>
       </div>

            </section>
`
    }
    htmlString += `</article>`

    return htmlString

}
