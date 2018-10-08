import { setCondiments, getCondimentz, condimentSelect } from "../components/condiments.js";

function executeThisCodeAfterFileLoaded() {
    const data = JSON.parse(this.responseText);
    setCondiments(data.condiments);
    condimentSelect(getCondimentz());
};

function executeThisCodeIfXhrFails() {
    console.log("lol no");
};

const getCondiments = () => {
    let myRequest = new XMLHttpRequest();
    myRequest.addEventListener('load', executeThisCodeAfterFileLoaded);
    myRequest.addEventListener('error', executeThisCodeIfXhrFails);
    myRequest.open('GET', './db/condiments.json');
    myRequest.send();
};

export { getCondiments };