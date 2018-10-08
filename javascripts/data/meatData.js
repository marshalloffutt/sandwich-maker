import { setMeats, getMeatz, meatSelect } from "../components/meat.js";

function executeThisCodeAfterFileLoaded() {
    const data = JSON.parse(this.responseText);
    setMeats(data.meats);
    meatSelect(getMeatz());
};

function executeThisCodeIfXhrFails() {
    console.log("lol no");
};

const getMeats = () => {
    let myRequest = new XMLHttpRequest();
    myRequest.addEventListener('load', executeThisCodeAfterFileLoaded);
    myRequest.addEventListener('error', executeThisCodeIfXhrFails);
    myRequest.open('GET', './db/meats.json');
    myRequest.send();
};

export { getMeats };