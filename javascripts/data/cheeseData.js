import { setCheeses, getCheezez, cheeseSelect } from "../components/cheese.js";

function executeThisCodeAfterFileLoaded() {
    const data = JSON.parse(this.responseText);
    setCheeses(data.cheeses);
    cheeseSelect(getCheezez());
};

function executeThisCodeIfXhrFails() {
    console.log("lol no");
};

const getCheeses = () => {
    let myRequest = new XMLHttpRequest();
    myRequest.addEventListener('load', executeThisCodeAfterFileLoaded);
    myRequest.addEventListener('error', executeThisCodeIfXhrFails);
    myRequest.open('GET', './db/cheeses.json');
    myRequest.send();
};

export { getCheeses };