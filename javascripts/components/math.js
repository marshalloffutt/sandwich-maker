const doTheMath = () => {
  const breadCost = document.getElementsByClassName('breadamt');
  let totalBreadCost = 0;
  for (let i = 0; i < breadCost.length; i++) {
      totalBreadCost += parseFloat(breadCost[i].innerHTML);
    } console.log(totalBreadCost); 
}

export {doTheMath};