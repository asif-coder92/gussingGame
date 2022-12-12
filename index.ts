#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
import banner from "node-banner";
import showBanner from "node-banner";


let score=0;
let playAgain=true;

(async () => {
    await showBanner('Guessing Game ', 'This guess game is developed by Asif Jamal in node.js using TypeScript','cyan');
})();

async function guessNumber(){
while (playAgain) {
    
// let randm=(Math.random()*2) +1
// console.log(randm);
let rand=Math.ceil((Math.random()*2) )+1 //ceil function convert the required random number in round
let userAnswer= await inquirer.prompt([{
    name:"userNumber",
    type:"number",
    message:"Enter your desired number From 1 to 3"

    }]);

    if (userAnswer.userNumber===rand) {
        console.log(chalk.green("You guess the right number")); 
        score+=10;
        console.log(chalk.bgBlue(`Your score is ${score}`));
         
    }
    else
    {
        console.log(chalk.red("Your entry did not pass the guess number, run the program again !!"));
        playAgain=false;
    }
}
}

// guessNumber()

// we actually wrapped up the gessNumber function inside a setTimeout funtion, because calling simple guess number function the banner displayed lately just after guess function
// so we want to display the banner fisrt and the guessNumber function second. for this we put the
//guessNumber function inside the setTimeout function to delay the guessNumber for some while

setTimeout(() => {
    guessNumber() 
}, 3000);