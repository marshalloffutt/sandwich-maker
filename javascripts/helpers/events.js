import { breadSelect } from "../components/bread.js";

console.log('hi from events.js');

const allTheButtons = () => {
    const goToBreadButton = document.getElementById("toBread");
    goToBreadButton.addEventListener("click", breadSelect)
};

export { allTheButtons };