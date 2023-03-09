import { getConcessions } from "./database.js"


export const concessionsList = () => {
    const concessions= getConcessions()

    let htmlString = '<article class="ConcessionsList">'

    for( const concession of concessions) {

  htmlString += `<section class="concessionContainer">

        <img src='${concession.photo}' class='concessionPhoto'>

        <div class ='concessionsWords'>
            <h2 class ="names">${concession.name}</h2>
            <h3 class="concessionsDescription">If you get hungry on your visit come checkout ${concession.name}, where we are known for our famous "${concession.food}".</h3>
       </div>

            </section>
`
    }
    htmlString += `</article>`

    return htmlString

}
