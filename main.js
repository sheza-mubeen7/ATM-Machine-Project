"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
var myBalance = 10000; //dollar
var myPin = 1234;
var pinAnswer = await inquirer_1.default.prompt([
    {
        name: "q1",
        message: "enter your pin",
        type: "number",
    }
]);
//  12345 ==== 1234 --false
if (pinAnswer === myPin) {
    console.log("correct pin code!");
    var pinOperation = await inquirer_1.default.prompt([
        {
            name: "operation",
            message: "Please select option",
            type: "list",
            choices: ["withdraw", "check balance"]
        }
    ]);
    console.log(pinOperation);
    if (pinOperation.operation === "withdraw") {
        var amountAns = await inquirer_1.default.prompt([
            {
                name: "amount",
                message: "enter your amount",
                type: "number"
            }
        ]);
        console.log(amountAns.amount);
    }
}
else {
    console.log("Incorrect pin code");
}
