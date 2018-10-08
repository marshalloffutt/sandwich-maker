import { printToDom } from "../helpers/util.js";

let veggies = [];

const setVeggies = (newArray) => {
    veggies = newArray;
};

const getVeggiez = () => {
    return veggies;
};

const veggieSelect = () => {
    let veggieTypes = Object.keys(veggies);
    let domString = '';
    domString += `<h4 class="mb-2 pl-1 pr-1 bg-success text-white">VEGGIES</h4>`
    veggieTypes.forEach((veggie) => {
        domString += `<label class="col-md-4 checkbox-inline"><input type="checkbox" id="add${veggie}" value="">  ${veggie}</label>`;
    })
    printToDom(domString, 'veggiesSection')
};

export { setVeggies, getVeggiez, veggieSelect };