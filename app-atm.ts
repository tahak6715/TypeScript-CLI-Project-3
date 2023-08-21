import inquirer from "inquirer";
import chalk from "chalk";

let bank = await inquirer.prompt([
    {
    name: "userid",
    type: "string",
    message: "Enter Your Id:"},
    {
        name: "userPin",
        type: "number",
        message: "Enter your secret Pin"
    },
    {
        name: "bankType",
        type: "list",
        choices:["Saving Acc", "Debit Acc"],
        message: "Enter your Account Type"
    },
    {
        name: "oprr",
        type: "list",
        choices:["Credit", "Withdrew"],
        message: "What operation you like to perform"
    },
    {
        name: "amt",
        type: "list",
        choices : [1000,5000,10000,120000000],
        message: "Enter Amount"
    }
]);

if (bank.userid && bank.userPin){
    const totalAmount : number = Math.floor(Math.random()*100000);
    console.log(chalk.bgRed(`Total Balace is ${totalAmount}`));
    if(bank.oprr === "Credit"){
        console.log(chalk.bgBlueBright(`You have been Credited ${bank.amt}`))
        
        const a = totalAmount + bank.amt;
        console.log(chalk.bgRed(`After Credit Balance is ${a}`));

    }
    else if(bank.oprr === "Withdrew" && bank.amt <= totalAmount){
        console.log(chalk.bgBlueBright(`You have been withral ${bank.amt}`))
        const a = totalAmount - bank.amt;
        console.log(chalk.bgRed(`After Withdrall Balance is ${a}`));
        

    }
    else{
        console.log(chalk.bgBlueBright(`Your account does'nt have enough moneyy..`))
    }
}