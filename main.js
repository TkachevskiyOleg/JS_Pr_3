//1
var count = parseInt(prompt("Введіть кількість # для виведення:"));
var output = "";
var i = 0;

while (i < count) {
    output += "#";
    i++;
}

alert(output);

//2
var userInput = parseInt(prompt("Введіть число:"));
var outputNumbers = "";

while (userInput >= 0) {
    outputNumbers += userInput + " ";
    userInput--;
}

alert("Числа від введеного до 0: " + outputNumbers);

//3
var base = parseFloat(prompt("Введіть число:"));
var exponent = parseInt(prompt("Введіть ступінь:"));
var result = 1;

while (exponent > 0) {
    result *= base;
    exponent--;
}

alert(`Результат зведення числа у ступінь: ${result}`);

//4
var num1 = parseInt(prompt("Введіть перше число:"));
var num2 = parseInt(prompt("Введіть друге число:"));

var divisor = 2;
var commonDivisors = [];

while (divisor <= Math.min(num1, num2)) {
    if (num1 % divisor === 0 && num2 % divisor === 0) {
        commonDivisors.push(divisor);
    }
    divisor++;
}

if (commonDivisors.length > 0) {
    alert(`Спільні дільники: ${commonDivisors.join(', ')}`);
} else {
    alert("У введених чисел немає спільних дільників.");
}

//5
var number = parseInt(prompt("Введіть число:"));
var factorial = 1;
var i = 1;

while (i <= number) {
    factorial *= i;
    i++;
}

alert(`Факторіал числа ${number}: ${factorial}`);
