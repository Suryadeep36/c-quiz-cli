#!/usr/bin/env node

import chalk from 'chalk';
import gradient from 'gradient-string';
import figlet from 'figlet';
import inquirer from 'inquirer';
import chalkAnimation from 'chalk-animation';

var isCorrect = true;
const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));

async function welcomeScreen(){
    figlet.text("Welcome to C Quiz!!",{
    font: '3D-ASCII',
    horizontalLayout: "default",
    verticalLayout: "default",
    width: 85,
    whitespaceBreak: true
  }, 
  function (err, data) {
    if (err) {
      console.log("Something went wrong...");
      console.dir(err);
      return;
    }
    console.log(gradient.rainbow(data));
  }); 
  await sleep();
};

async function answerCheck(given_ans,correct_ans){
  if(given_ans == correct_ans){
    figlet.text("Correct!!!",{
      font: 'Basic',
      horizontalLayout: "default",
      verticalLayout: "default",
      whitespaceBreak: true
    },
    function (err, data){
      if (err) {
        console.log("Something went wrong...");
        console.dir(err);
        return;
      }
      console.log(gradient.cristal(data));
    })
    isCorrect = true;
    await sleep();
  }
  else{
    figlet.text("BOO!! Wrong!",{
      font: 'Rectangles',
      horizontalLayout: "default",
      verticalLayout: "default",
      whitespaceBreak: true
    },
    function (err, data){
      if (err) {
        console.log("Something went wrong...");
        console.dir(err);
        return;
      }
      console.log(gradient.passion(data));
    })
    isCorrect = false;
    await sleep();
    process.exit(0);
  }
}

async function question1(){
  if(isCorrect == true){
    const ans = await inquirer.prompt({
      type: 'list',
      name: 'q1',
      message: chalk.yellowBright.bgBlack.bold('During which year did the C programming language originate?'),
      choices: [
        '1972',
        '1973',
        '1983',
        '1991'
      ]
    })
    await answerCheck(ans.q1, '1972');
  } 
}
async function question2(){
  if(isCorrect == true){
  const ans = await inquirer.prompt({
    type: 'list',
    name: 'q2',
    message: chalk.yellowBright.bgBlack.bold('Who is the creator of the C programming language?'),
    choices: [
      'Dennis Ritchie',
      'Ken Thompson',
      'Bill Gates',
      'Linus Torvalds'
    ]
  })
  await answerCheck(ans.q2, 'Dennis Ritchie');
  }
}
async function question3(){
  if(isCorrect == true){
  const ans = await inquirer.prompt({
    type: 'list',
    name: 'q3',
    message: chalk.yellowBright.bgBlack.bold('which function is used to dynamically allocate memory during runtime?'),
    choices: [
      'malloc()',
      'alloc()',
      'new()',
      'memalloc()'
    ]
  })
  await answerCheck(ans.q3, 'malloc()');
  }
}
async function winScreen(isCorrect){
  if(isCorrect == 1){
    figlet.text("congratulations you won!!",{
      font: 'Cybermedium',
      horizontalLayout: "default",
      verticalLayout: "default",
      whitespaceBreak: true
    },
    function (err, data){
      if (err) {
        console.log("Something went wrong...");
        console.dir(err);
        return;
      }
      console.log(gradient.vice(data));
    })
    sleep();
  }
}


await welcomeScreen();
await question1();
await question2();
await question3();
const text = chalkAnimation.rainbow("Let's GOOOO!!!");
setTimeout(() => {
  text.stop(); // Animation stops
}, 1000);

setTimeout(() => {
  text.start(); // Animation resumes
}, 2000);
await winScreen(isCorrect);
