import { checkBread } from "../components/bread.js";
import { checkCheese } from "../components/cheese.js";

const buttonEventStuff = () => {
    const submitButton = document.getElementById('submitBtn');
    submitButton.addEventListener("click", (event) => {
        event.preventDefault();
        document.getElementById('cart').style.display = "block";
        checkBread();
        checkCheese();
    });
};

export {buttonEventStuff}