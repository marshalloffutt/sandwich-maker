import { printToDom } from "../helpers/util.js";

let condiments = [];

const setCondiments = (newArray) => {
    condiments = newArray;
};

const getCondimentz = () => {
    return condiments;
};

const condimentSelect = () => {
    let condimentTypes = Object.keys(condiments);
    let domString = '';
    domString += `<h4 class="mb-2 pl-1 pr-1 bg-success text-white">CONDIMENTS</h4>`
    condimentTypes.forEach((condiment) => {
        domString += `<div class="form-check form-check-inline col-md-3">
                        <input class="ingredient form-check-input" type="checkbox" id="add${condiment}" value="option1">
                        <label class="form-check-label" for="add${condiment}">${condiment}</label>
                     </div>`;
    })
    printToDom(domString, 'condimentsSection')
};

export { setCondiments, getCondimentz, condimentSelect, condiments };