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
    // const breadz = Object.keys(breads); // This is an array of the keys of breads.
    let theBreadChoices = document.getElementsByClassName("breadIngredient"); // Here I am making an object of all breadIngredient checkboxes
    for (let i = 0; i < theBreadChoices.length; i++) {
        if (theBreadChoices[i].checked == true) {
            // console.log(theBreadChoices[i]);
            let selectedBread = theBreadChoices[i].value.join;
            // console.log(selectedBread);
            const filteredBreads = selectedBread.filter((x) => x.selectedBread === Object.keys(breads));
            printToDom(filteredBreads, 'finalSandwich');
        }
    };
};

export { setBreads, getBreadz, breadSelect, checkBread };
