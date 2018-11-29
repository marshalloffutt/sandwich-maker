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
                        <input class="condimentIngredient form-check-input" type="checkbox" id="add${condiment}" value="${condiment}">
                        <label class="form-check-label" for="add${condiment}">${condiment}</label>
                     </div>`;
    })
    printToDom(domString, 'condimentsSection')
};

const checkCondiments = () => {
    const condimentsCheckBoxes = document.getElementsByClassName("condimentIngredient");
    let value = 0;
    let domString = '';
    for (let i = 0; i < condimentsCheckBoxes.length; i++) {
        if (condimentsCheckBoxes[i].checked == true) {
            const selectedCondiments = condimentsCheckBoxes[i].value;
            const keys = Object.keys(condiments);
            keys.forEach((key) => {
                if (key === selectedCondiments) {
                    value = condiments[key];
                };
            })
            domString += `<p>${condimentsCheckBoxes[i].value} - $<span class="condimentsamt">${value}</span></p>`;
        };
        printToDom(domString, 'finalCondiments');
    };
};



export { setCondiments, getCondimentz, condimentSelect, condiments, checkCondiments };