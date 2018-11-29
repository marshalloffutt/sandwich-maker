import { printToDom } from "../helpers/util.js";

const doTheMath = () => {
  let domString = '';
  const breadCost = document.getElementsByClassName('breadamt');
  let totalBreadCost = 0;
  for (let i = 0; i < breadCost.length; i++) {
      totalBreadCost += parseFloat(breadCost[i].innerHTML);
    };
  const meatCost = document.getElementsByClassName('meatamt');
  let totalMeatCost = 0;
  for (let i = 0; i < meatCost.length; i++) {
      totalMeatCost += parseFloat(meatCost[i].innerHTML);
    };
  const cheeseCost = document.getElementsByClassName('cheeseamt');
  let totalCheeseCost = 0;
  for (let i = 0; i < cheeseCost.length; i++) {
      totalCheeseCost += parseFloat(cheeseCost[i].innerHTML);
    };
  const veggiesCost = document.getElementsByClassName('veggiesamt');
  let totalVeggiesCost = 0;
  for (let i = 0; i < veggiesCost.length; i++) {
      totalVeggiesCost += parseFloat(veggiesCost[i].innerHTML);
    };
  const condimentsCost = document.getElementsByClassName('condimentsamt');
  let totalCondimentsCost = 0;
  for (let i = 0; i < condimentsCost.length; i++) {
      totalCondimentsCost += parseFloat(condimentsCost[i].innerHTML);
    };
    const totalSandwichCost = totalBreadCost + totalMeatCost + totalCheeseCost + totalVeggiesCost + totalCondimentsCost;
    domString += `<h4>Total Cost - $${totalSandwichCost}</h4>`;
    printToDom(domString, 'math');
};

export {doTheMath};