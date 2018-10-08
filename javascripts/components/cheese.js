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
        domString += `<label class="col-md-4 checkbox-inline"><input type="checkbox" id="add${cheese}" value="">  ${cheese}</label>`;
    })
    printToDom(domString, 'cheeseSection')
};

export { setCheeses, getCheezez, cheeseSelect };