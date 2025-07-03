import inquirer from "inquirer"

let myBalance = 10000 //dollar
let myPin = 1234

let pinAnswer = await inquirer.prompt(
    [
    {
        name: "q1", 
        message: "enter your pin",
        type: "number",
    }
] 
);
//  12345 ==== 1234 --false
if (pinAnswer===myPin) {
    console.log("correct pin code!")

let pinOperation = await inquirer.prompt(
    [
        { 
            name:"operation",
            message: "Please select option",
            type: "list",
            choices: ["withdraw", "check balance"]
        }
    ]
);
console.log(pinOperation);

if (pinOperation.operation === "withdraw") {
    let amountAns = await inquirer.prompt(
        [
            {
                name: "amount",
                message: "enter your amount",
                type: "number"
            }
        ]
    );
    console.log(amountAns.amount)
}
}

else{
    console.log("Incorrect pin code")

}
 










