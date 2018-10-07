import { printToDom } from "../helpers/util";

console.log('mmmmm bread');

let breads = [];

const setBreads = (newArray) => {
    breads = newArray;
};

const getBreadz = () => {
    return breads;
};

const breadSelect = (breadArray) => {
    let domString = '';
    domString += `<h1 class="display-4">Select your bread</h1>`;
    breadArray.forEach((bread) => {
        domString += `<button class="btn btn-success btn-lg" role="button" id="${bread.name}">${bread.name}</button>`;
    });
    printToDom(domString);
};

export { setBreads, getBreads, breadSelect };