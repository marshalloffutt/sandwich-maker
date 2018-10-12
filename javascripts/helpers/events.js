import { checkBread } from "../components/bread.js";

const buttonEventStuff = () => {
    const submitButton = document.getElementById('submitBtn');
    submitButton.addEventListener("click", (event) => {
        event.preventDefault();
        checkBread();
    });
};

export {buttonEventStuff}