import { getBreads } from "./data/breadData.js";
import { getMeats } from "./data/meatData.js";
import { getCheeses } from "./data/cheeseData.js";
import { getVeggies } from "./data/veggiesData.js";
import { getCondiments } from "./data/condimentsData.js";

const initializeApp = () => {
    getBreads();
    getMeats();
    getCheeses();
    getVeggies();
    getCondiments();
};

initializeApp();