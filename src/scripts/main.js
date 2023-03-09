


import { concessionsList } from "./concessions.js";
import { exhibit } from "./exhibit.js";


export const mainHtml =
`<h1 class="header">Spring Hill Zoo</h1>
<article class="concessions">
    <h2>Concessions</h2>
      ${concessionsList()}
</article>
        <div>${exhibit()}</div>
`

const parentHTMLElement = document.querySelector("#container")


parentHTMLElement.innerHTML = mainHtml()
/* 
  Goals of project:
    1. Header for each exhibit of the zoo
    2. Under header list all animals in that exhibit
    3. As an aside on the right, list all concessions
    4. Main header at top with "Welcome to Spring Hill Zoo"
*/


/* 
  Module Responsibility:
    1. Update the DOM with *all* of the HTML
    2. Defer creation of specific sections to other modules
*/


