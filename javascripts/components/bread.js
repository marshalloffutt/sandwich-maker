import { printToDom } from "../helpers/util.js";

console.log('mmmmm bread');

let breads = [];

const setBreads = (newArray) => {
    breads = newArray;
};

const getBreadz = () => {
    return breads;
};

const breadSelect = () => {
    console.log(breads);
    let domString = '';
    domString += `<h1 class="display-4">Select your bread</h1>`;
    // breadArray.forEach(() => {
    //     domString += `<button class="btn btn-success btn-lg" role="button" id="${bread.name}">${bread.name}</button>`;
    // });
    domString += `<button class="btn btn-primary btn-lg" role="button" id="toMeat">Continue</button>`;
    printToDom(domString);
};

export { setBreads, getBreadz, breadSelect };