import { checkBread } from "../components/bread.js";
import { checkCheese } from "../components/cheese.js";
import { checkCondiments } from "../components/condiments.js";
import { checkMeat } from "../components/meat.js";
import { checkVeggies } from "../components/veggies.js";

const buttonEventStuff = () => {
    const submitButton = document.getElementById('submitBtn');
    submitButton.addEventListener("click", (event) => {
        event.preventDefault();
        document.getElementById('cart').style.display = "block";
        checkBread();
        checkCheese();
        checkCondiments();
        checkMeat();
        checkVeggies();
    });
};

export {buttonEventStuff}