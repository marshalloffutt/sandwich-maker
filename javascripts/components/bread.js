import { printToDom } from "../helpers/util.js";

let breads = [];

const setBreads = (newArray) => {
    breads = newArray;
};

const getBreadz = () => {
    return breads;
};

const breadSelect = () => {
    console.log(Object.keys(breads)); //HAHA This works!!!!!
    let domString = '';
    breads.forEach((key) => {
        domString += `<p>${Object.keys(breads)}</p>`;
    })
    printToDom(domString, 'breadSection');
    // breadsArray.forEach((bread) => {
    //     console.log(bread[i])
    // })
};

export { setBreads, getBreadz, breadSelect };