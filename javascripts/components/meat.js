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
                        <input class="meatIngredient form-check-input" type="checkbox" id="add${meat}" value="${meat}">
                        <label class="form-check-label" for="add${meat}">${meat}</label>
                     </div>`;
    })
    printToDom(domString, 'meatSection')
};

const checkMeat = () => {
    const meatCheckBoxes = document.getElementsByClassName("meatIngredient");
    let value = 0;
    let domString = '';
    for (let i = 0; i < meatCheckBoxes.length; i++) {
        if (meatCheckBoxes[i].checked == true) {
            const selectedMeat = meatCheckBoxes[i].value;
            const keys = Object.keys(meats);
            keys.forEach((key) => {
                if (key === selectedMeat) {
                    value = meats[key];
                };
            })
            domString += `<p>${meatCheckBoxes[i].value} - $<span class="meatamt">${value}</span></p>`;
        };
        printToDom(domString, 'finalMeat');
    };
};

export { setMeats, getMeatz, meatSelect, meats, checkMeat };