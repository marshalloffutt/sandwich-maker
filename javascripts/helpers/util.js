console.log('cominatcha from util.js');

const printToDom = (stringToPrint) => {
  const printHere = document.getElementById('printStuffHere');
  printHere.innerHTML = stringToPrint;
}

  export { printToDom }