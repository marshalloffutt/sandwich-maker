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
        domString += `<label class="col-md-4 checkbox-inline"><input type="checkbox" id="add${bread}" value="">  ${bread}</label>`;
    })
    printToDom(domString, 'breadSection')
};

export { setBreads, getBreadz, breadSelect };