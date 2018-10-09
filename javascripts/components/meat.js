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
        domString += `<div class="form-check form-check-inline col-md-3">
                        <input class="ingredient form-check-input" type="checkbox" id="add${meat}" value="option1">
                        <label class="form-check-label" for="add${meat}">${meat}</label>
                     </div>`;
    })
    printToDom(domString, 'meatSection')
};

export { setMeats, getMeatz, meatSelect, meats };