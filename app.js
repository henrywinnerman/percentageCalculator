document.getElementById('calculator').addEventListener('submit', calculateResults);

function calculateResults(e){

  //Grab UI with DOM
  const percent = document.getElementById('percent');
  const number = document.getElementById('number');
  const result = document.getElementById('result');
  
// Grab input value calculations with DOM
  const percentage = (percent.value) / 100;
  const calculatedNum = (number.value);
  const calculatedResult = (percentage*calculatedNum)
  
  result.value = calculatedResult.toFixed(2);

  percent.value = '';
  number.value = '';
  e.preventDefault();
  
}