import { printToDom } from "../helpers/util.js";

const pageLoad = () => {
    let domString = '';
    domString += `<h1 class="display-4">Let's make a sammie!</h1>`;
    domString += `<p class="lead">Only the finest selections of meats, cheeses, and breads.</p>`;
    domString += `<hr class="my-4">`;
    domString += `<p>Are you ready?</p>`;
    domString += `<p class="lead">`;
      domString += `<button class="btn btn-primary btn-lg" role="button" id="toBread">Let's get started!</button>`;
    domString += `</p>`;
    printToDom(domString);
};

export {pageLoad};