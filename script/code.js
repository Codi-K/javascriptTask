    // First Way
let first_number = 15; 
let second_number = 17;

[first_number, second_number] = [second_number, first_number] // i am swapping the property of the value

console.log(first_number); // 17
console.log(second_number); // 15

    //Second Way
let first_number1 = 15; 
let second_number1 = 17;
let swap;

swap = first_number1; // i gave an undefined variable a value of first number1 which is 15
first_number1 = second_number1; // i gave first number1 a value of second number1 which is 17
second_number1 = swap; // i gave second number1 a value of swap which is 15

console.log(first_number1); // 17
console.log(second_number1); // 15

    //Thrid Way
let first_number2 = 15; 
let second_number2 = 17;

first_number2 = first_number2 + second_number2; // 15 + 17 = 32
second_number2 = first_number2 - second_number2; // 32 - 17 = 15
first_number2 = first_number2 - second_number2; // 32 - 15 = 17

console.log(first_number2); // 17
console.log(second_number2); // 15