import inquirer from "inquirer";
async function calc() {
    const result = await inquirer.prompt([
        {
            name: 'num1',
            type: 'number',
            message: 'enter First number',
        },
        {
            name: 'num2',
            type: 'number',
            message: 'enter your second number',
        },
        {
            name: 'operation',
            type: 'list',
            message: 'select your operation',
            choices: ["Addition", "Subtraction", "Multiplication", "Modulus", "Division", "Exponent"],
        },
    ]);
    console.log(result);
    switch (result.operation) {
        case "Addition":
            console.log(result.num1 + result.num2);
            break;
        case "Subtraction":
            console.log(result.num1 - result.num2);
            break;
        case "Multiplication":
            console.log(result.num1 * result.num2);
            break;
        case "Division":
            console.log(result.num1 / result.num2);
            break;
        default:
            break;
    }
}
calc();
