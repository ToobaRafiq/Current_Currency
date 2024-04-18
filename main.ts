import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.magenta.bold("\n Welcome to 'tooba_rafiq' - Currency Convertor\n"))
//Define the list of currencies and their exchange rate:
let exchange_rate :any = {
    "USD":1,//base currency
    "EUR":0.9,//Europen currency
    "JYP":113,//japenese currancy
    "CAD":1.3,//canadian dollar
    "IND":83.59,//indian rupees
    "PKR":278.16 ,//pakistani rupees
//Add more currency and their exchange rate here
}
//promt the user to select currencies to convert from and to:
let user_answer = await inquirer.prompt([
    {
        name:"from_currency",
        type:"list",
        message:("Enter the currency to convert from:"),
        choices:["USD","EUR","JYP","CAD","IND","PKR"]
    },
    {
        name:"To_currency",
        type:"list",
        message:"Enter the currency to convert into",
        choices:["USD","EUR","JYP","CAD","IND","PKR"]
    },
    {
        name:"amount",
        type:"input",
        message:"Enter the amount to convert"
    }
]);
//Perform currency conversion by using formula:
let from_amount = exchange_rate[user_answer.from_currency];
let to_amount = exchange_rate[user_answer.To_currency];
let amount = user_answer.amount;

//formula of conversion
let base_amount = amount / from_amount;
let convert_amount = base_amount * to_amount;

//Display the converted amount
console.log(`Converted Amount = ${chalk.green(convert_amount.toFixed(2))}`);