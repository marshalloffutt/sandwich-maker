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
                        <input class="breadIngredient form-check-input" type="checkbox" id="add${bread}" value="${bread}">
                        <label class="form-check-label" for="add${bread}">${bread}</label>
                     </div>`;
    });
    printToDom(domString, 'breadSection')
};

const checkBread = () => {
    const breadCheckBoxes = document.getElementsByClassName("breadIngredient");
    let value = 0;
    let domString = '';
    for (let i = 0; i < breadCheckBoxes.length; i++) {
        if (breadCheckBoxes[i].checked == true) {
            const selectedBread = breadCheckBoxes[i].value;
            const keys = Object.keys(breads);
            keys.forEach((key) => {
                if (key === selectedBread) {
                    value = breads[key];
                };
            })
            domString += `<p>${breadCheckBoxes[i].value} - $${value}</p>`;
        };
        printToDom(domString, 'finalBread');
    };
};

export { setBreads, getBreadz, breadSelect, checkBread };
