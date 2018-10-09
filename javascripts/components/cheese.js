import { printToDom } from "../helpers/util.js";

let cheeses = [];

const setCheeses = (newArray) => {
    cheeses = newArray;
};

const getCheezez = () => {
    return cheeses;
};

const cheeseSelect = () => {
    let cheeseTypes = Object.keys(cheeses);
    let domString = '';
    domString += `<h4 class="mb-2 pl-1 pr-1 bg-success text-white">CHEESE</h4>`
    cheeseTypes.forEach((cheese) => {
        domString += `<div class="form-check form-check-inline col-md-3">
                        <input class="ingredient form-check-input" type="checkbox" id="add${cheese}" value="option1">
                        <label class="form-check-label" for="add${cheese}">${cheese}</label>
                     </div>`;
    })
    printToDom(domString, 'cheeseSection')
};

export { setCheeses, getCheezez, cheeseSelect, cheeses };