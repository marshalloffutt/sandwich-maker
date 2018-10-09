import { sandwichEvent } from "../components/sandwich.js";

const buttonEventStuff = () => {
    const submitButton = document.getElementById('submitBtn');
    submitButton.addEventListener("click", (event) => {
        event.preventDefault();
        sandwichEvent();
    });
};

export {buttonEventStuff}