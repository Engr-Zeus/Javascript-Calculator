let firstNumber = parseFloat(prompt("Enter First Number: "));
let operator = prompt("Enter Operator(e.g + / - or *): ");
let secondNumber = parseFloat(prompt("Enter Second Number: "));

let result = null;

 if (operator == '+'){
            result = firstNumber + secondNumber;
      }
      else if(operator == '/'){
            result = firstNumber / secondNumber;
      }
      else if(operator == '-'){
            result = firstNumber - secondNumber;
      }
      else if(operator == '*'){
       result = firstNumber * secondNumber;
      }
      
// Displaying the variables alongside the result
   alert(firstNumber + operator + secondNumber + "=" + result);