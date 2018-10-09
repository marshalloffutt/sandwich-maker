import { breads } from "./bread.js";
import { cheeses } from "./cheese.js";
import { condiments } from "./condiments.js";
import { meats } from "./meat.js";
import { veggies } from "./veggies.js";

// let breadsArray = breads;

const allTheIngredients = {...breads, ...cheeses, ...condiments, ...meats, ...veggies};

const sandwichEvent = () => {
    console.log(allTheIngredients);
    // let ingredientsArray = document.getElementsByClassName("ingredient");
    // for (let i = 0; i < ingredientsArray.length; i++) {
    //     if (ingredientsArray[i].checked == true) {
    //         console.log(ingredientsArray[i]);
    //     };

    // }
}
    
export {sandwichEvent};