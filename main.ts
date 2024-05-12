#! /usr/bin/env node

import inquirer from "inquirer";

//printing a wellcome message
console.log("\n\twellcome to \'fariausman' - CLI simple calculator\n");

//asking question form user through inquirer
let answer = await inquirer.prompt([
    {message: "enter first number", type: "number", name: "firstnumber"},
    {message: "enter second number", type: "number", name: "secondnumber"},
    {
        message: "select one operator to perfome operation",
        type: "list",
        name: "operator",
        choices:["addition","subtraction","multiplication","division"],
     },
]);
//condition statement if-elsa
if (answer.operator === "addition"){
    console.log(answer.firstnumber + answer.secondnumber)
}
else if(answer.operator === "subtraction"){
    console.log(answer.firstnumber - answer.secondnumber)
}
else if(answer.operator === "multiplication"){
    console.log(answer.firstnumber * answer.secondnumber)
}
else if (answer.operator === "division"){
    console.log(answer.firstnumber / answer.secondnumber)
}
else{
    console.log("invalid input")
}