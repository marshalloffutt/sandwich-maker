import { printToDom } from "../helpers/util.js";

let veggies = [];

const setVeggies = (newArray) => {
    veggies = newArray;
};

const getVeggiez = () => {
    return veggies;
};

const veggieSelect = () => {
    let veggieTypes = Object.keys(veggies);
    let domString = '';
    domString += `<h4 class="mb-2 pl-1 pr-1 bg-success text-white">VEGGIES</h4>`
    veggieTypes.forEach((veggie) => {
        domString += `<div class="form-check form-check-inline col-md-3">
                        <input class="veggiesIngredient form-check-input" type="checkbox" id="add${veggie}" value="${veggie}">
                        <label class="form-check-label" for="add${veggie}">${veggie}</label>
                     </div>`;
    })
    printToDom(domString, 'veggiesSection')
};

const checkVeggies = () => {
    const veggiesCheckBoxes = document.getElementsByClassName("veggiesIngredient");
    let value = 0;
    let domString = '';
    for (let i = 0; i < veggiesCheckBoxes.length; i++) {
        if (veggiesCheckBoxes[i].checked == true) {
            const selectedVeggies = veggiesCheckBoxes[i].value;
            const keys = Object.keys(veggies);
            keys.forEach((key) => {
                if (key === selectedVeggies) {
                    value = veggies[key];
                };
            })
            domString += `<p>${veggiesCheckBoxes[i].value} - $${value}</p>`;
        };
        printToDom(domString, 'finalVeggies');
    };
};

export { setVeggies, getVeggiez, veggieSelect, veggies, checkVeggies };