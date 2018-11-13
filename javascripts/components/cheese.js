import { printToDom } from "../helpers/util.js";

let cheeses = [];

const setCheeses = (newArray) => {
    cheeses = newArray;
};

const getCheezez = () => {
    return cheeses;
};

const cheeseSelect = () => {
    let cheeseTypes = Object.keys(cheeses);
    let domString = '';
    domString += `<h4 class="mb-2 pl-1 pr-1 bg-success text-white">CHEESE</h4>`
    cheeseTypes.forEach((cheese) => {
        domString += `<div class="form-check form-check-inline col-md-3">
                        <input class="cheeseIngredient form-check-input" type="checkbox" id="add${cheese}" value="${cheese}">
                        <label class="form-check-label" for="add${cheese}">${cheese}</label>
                     </div>`;
    })
    printToDom(domString, 'cheeseSection')
};

const checkCheese = () => {
    const cheeseCheckBoxes = document.getElementsByClassName("cheeseIngredient");
    let value = 0;
    let domString = '';
    for (let i = 0; i < cheeseCheckBoxes.length; i++) {
        if (cheeseCheckBoxes[i].checked == true) {
            const selectedCheese = cheeseCheckBoxes[i].value;
            const keys = Object.keys(cheeses);
            keys.forEach((key) => {
                if (key === selectedCheese) {
                    value = cheeses[key];
                };
            })
            domString += `<p>${cheeseCheckBoxes[i].value} - $${value}</p>`;
        };
        printToDom(domString, 'finalCheese');
    };
};

export { setCheeses, getCheezez, cheeseSelect, cheeses, checkCheese };