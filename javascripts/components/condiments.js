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
        domString += `<label class="col-md-4 checkbox-inline"><input type="checkbox" id="add${condiment}" value="">  ${condiment}</label>`;
    })
    printToDom(domString, 'condimentsSection')
};

export { setCondiments, getCondimentz, condimentSelect };