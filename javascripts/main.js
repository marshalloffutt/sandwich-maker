import { pageLoad } from "./components/sandwich.js";
import { allTheButtons } from "./helpers/events.js";
import { getBreads } from "./data/breadData.js";

const initializeApp = () => {
    pageLoad();
    allTheButtons();
    // getBreads();
    console.log("whaddup from main.js");
};

initializeApp();