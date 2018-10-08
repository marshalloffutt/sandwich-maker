import { setVeggies, getVeggiez, veggieSelect } from "../components/veggies.js";

function executeThisCodeAfterFileLoaded() {
    const data = JSON.parse(this.responseText);
    setVeggies(data.veggies);
    veggieSelect(getVeggiez());
};

function executeThisCodeIfXhrFails() {
    console.log("lol no");
};

const getVeggies = () => {
    let myRequest = new XMLHttpRequest();
    myRequest.addEventListener('load', executeThisCodeAfterFileLoaded);
    myRequest.addEventListener('error', executeThisCodeIfXhrFails);
    myRequest.open('GET', './db/veggies.json');
    myRequest.send();
};

export { getVeggies };