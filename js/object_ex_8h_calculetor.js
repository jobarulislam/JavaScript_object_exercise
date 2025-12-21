/*exersice 8h*/
let calculation = localStorage.getItem('calculation') ||'';
let history = JSON.parse(localStorage.getItem('history')) || [];
console.log(calculation);

function updateCalculation(value) {
   calculation += value;
   localStorage.setItem('calculation', calculation);
   console.log(calculation);
  }

function removeLast() {
  calculation = calculation.slice(0, -1);
  localStorage.setItem('calculation',calculation)
  console.log(calculation);
}
function clearCalculation(){
    calculation ='';
    localStorage.removeItem('calculation');
    console.log(calculation);
}
function equal() {
  const result = eval(calculation);

  history.push(calculation + ' = ' + result);
  localStorage.setItem('history', JSON.stringify(history));

  calculation = result.toString();
  localStorage.setItem('currentCalculation', calculation);

  console.log(calculation);
}
function showHistory() {
  console.log('History:');
  history.forEach(item => console.log(item));
}
