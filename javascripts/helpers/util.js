console.log('cominatcha from util.js');

const printToDom = (stringToPrint, divId) => {
  selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML = stringToPrint;
};

  export { printToDom }