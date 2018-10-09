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
        domString += `<div class="form-check form-check-inline col-md-3">
                        <input class="ingredient form-check-input" type="checkbox" id="add${veggie}" value="option1">
                        <label class="form-check-label" for="add${veggie}">${veggie}</label>
                     </div>`;
    })
    printToDom(domString, 'veggiesSection')
};

export { setVeggies, getVeggiez, veggieSelect, veggies };