import { printToDom } from "../helpers/util.js";

let breads = [];

const setBreads = (newArray) => {
    breads = newArray;
};

const getBreadz = () => {
    return breads;
};

const breadSelect = () => {
    let breadTypes = Object.keys(breads);
    let domString = '';
    domString += `<h4 class="mb-2 pl-1 pr-1 bg-success text-white">BREAD</h4>`
    breadTypes.forEach((bread) => {
        domString += `<div class="form-check form-check-inline col-md-3">
                        <input class="ingredient form-check-input" type="checkbox" id="add${bread}" value="option1">
                        <label class="form-check-label" for="add${bread}">${bread}</label>
                     </div>`;
    });
    printToDom(domString, 'breadSection')
};



export { setBreads, getBreadz, breadSelect, breads };


