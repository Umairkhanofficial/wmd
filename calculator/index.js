import inquirer from "inquirer";
async function calc() {
    const result = await inquirer.prompt([
        {
            name: 'num1',
            type: 'number',
            message: 'Enter First Number',
        },
        {
            name: 'num2',
            type: 'number',
            message: 'Enter Your Second Number',
        },
        {
            name: 'operation',
            type: 'list',
            message: 'select your operation',
            choices: ["+", "-", "*", "%", "/", "**"],
        },
    ]);
    console.log(result);
    switch (result.operation) {
        case "+":
            console.log(result.num1 + result.num2);
            break;
        case "-":
            console.log(result.num1 - result.num2);
            break;
        case "*":
            console.log(result.num1 * result.num2);
            break;
        case "%":
            console.log(result.num1 % result.num2);
            break;
        case "/":
            console.log(result.num1 / result.num2);
            break;
        case "**":
            console.log(result.num1 ** result.num2);
            break;
        default:
            break;
    }
}
calc();
