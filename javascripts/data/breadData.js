import { setBreads, getBreadz, breadSelect } from "../components/bread.js";

function executeThisCodeAfterFileLoaded () {
    const data = JSON.parse(this.responseText);
    setBreads(data.breads);
    breadSelect(getBreadz());
};

function executeThisCodeIfXhrFails () {
    console.log("lol no");
};

const getBreads = () => {
    let myRequest = new XMLHttpRequest();
    myRequest.addEventListener('load', executeThisCodeAfterFileLoaded);
    myRequest.addEventListener('error', executeThisCodeIfXhrFails);
    myRequest.open('GET', './db/breads.json');
    myRequest.send();
};

export { getBreads };