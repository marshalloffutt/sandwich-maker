import { printToDom } from "../helpers/util.js";

let meats = [];

const setMeats = (newArray) => {
    meats = newArray;
};

const getMeatz = () => {
    return meats;
};

const meatSelect = () => {
    let meatTypes = Object.keys(meats);
    let domString = '';
    domString += `<h4 class="mb-2 pl-1 pr-1 bg-success text-white">MEAT</h4>`
    meatTypes.forEach((meat) => {
        domString += `<label class="col-md-4 checkbox-inline"><input type="checkbox" id="add${meat}" value="">  ${meat}</label>`;
    })
    printToDom(domString, 'meatSection')
};

export { setMeats, getMeatz, meatSelect };