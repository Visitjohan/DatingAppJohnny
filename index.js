'use strict';

const mockData = require('./mockData.js').data;
const prompt = require('prompt-sync')();

//const profile = {};
const answers = [];

const questions = [
  'What is your first name?',
  'What is your last name?',
  "How old are you?",
  "What is your gender? (M, F, X)",
  "What gender are youinterested in? (M, F, X, B)",
  "What is your location? (rural/city)",
  "What is the minimum age you are interested in?",
  "What is the maximum age you are interested in?",
];

const answerPrompt = [
  '\u001b[36m' + "answar only with a-Z minimum 3 and maximum 10 characters:" + '\u001b[0m',
  '\u001b[36m' + "answar only with a-Z minimum 3 and maximum 10 characters:" + '\u001b[0m',
  '\u001b[36m' + "answar only from 18 till 99:" + '\u001b[0m',
  '\u001b[36m' + 'answar "M" for male, "F" for female and "X" for both:' + '\u001b[0m',
  '\u001b[36m' + 'answar "M" for male, "F" for female and "X" for both:' + '\u001b[0m',
  '\u001b[36m' + 'answar "R" for rural or "C" for City:' + '\u001b[0m',
  '\u001b[36m' + "answar only from 18 till 99:" + '\u001b[0m',
  '\u001b[36m' + `answar only from ${answers[6]} till 99:` + '\u001b[0m',
];

console.log('\x1b[35m' + "Welcome to Johnny's dating app!" + '\x1b[0m');



let i = 0;

// while loop; stops when all questions are answered
while (answers.length < questions.length) {  
  let answer="";
  console.log(questions[i])
  let check = true;
  switch(i) {
    case 0:
    case 1: 
      while (check === true) {
      answer=prompt(answerPrompt[i]);
      if (answer === "") {
        console.log("No name enterd!");
      } else if (answer.length < 3) {
        console.log("name is to short!");
      } else if (answer.length > 10) {
        console.log("name is to lang!");
      } else if (!/^[a-zA-Z ]+$/.test(answer)) {
        console.log("name can only contain a-z");
      }
        else {
          check = false;
        }
      
      }
  
    case 2:
      while (check === true) {
        answer=Number(prompt(answerPrompt[i]));
        if (answer === "") {
          console.log('\x1b[31m' + "No age is enterd!" + '\x1b[0m');
        } else if (answer < 18) {
           console.log('\x1b[31m' + "you are to jong to pertisapate, please visit use when you are 18 ore older" + '\x1b[0m');
        } else if (answer > 99) {
           console.log('\x1b[31m' + "you are to old to pertisapate" + '\x1b[0m');
        }  else if (!/^\d+$/.test(answer)) {
            console.log('\x1b[31m' + "you can only alare between 18 and 99" + '\x1b[0m');
          }
        else {
          check = false;
        }


      }
      case 3:
      while (check === true) {
        answer= prompt(answerPrompt[i]).toUpperCase();

        if (answer === "") {
             console.log('\x1b[31m' + "No gender is enterd!" + '\x1b[0m');
           } else if (answer === "M" ||answer === "F"|| answer === "X") {
           check = false;
           }
         else {
             console.log('\x1b[31m' + 'you can only ansar "M", "F" or "X"' + '\x1b[0m');
           }
      }
      case 4:
      while (check === true) {
        answer= prompt('\u001b[36m' + 'answar "M" for male, "F" for female and "X" for both:' + '\u001b[0m').toUpperCase();

        if (answer === "") {
             console.log('\x1b[31m' + "No gender is enterd!" + '\x1b[0m');
           } else if (answer === "M" ||answer === "F"|| answer === "X"||answer === "B") {
           check = false;
           }
         else {
             console.log('\x1b[31m' + 'you can only ansar "M", "F","X" or "B"' + '\x1b[0m');
           }
      }
    case 5:
      while (check === true) {
        
        answer = prompt(answerPrompt[i]).toUpperCase();
        if (answer === "") {
          console.log('\x1b[31m' + "not enterd!!!" + '\x1b[0m');
        } else if (answer === "C"||answer === "R") {
          answer = "city";
          check =false;
        }
        else {
          console.log('only can answer "R" for rural or "C" for City');
        };
      }
      
      case 6:
      while (check === true) {
        answer= Number(prompt(answerPrompt[i]));

        if (answer === "") {
             console.log('\x1b[31m' + "No age is enterd!" + '\x1b[0m');
        }else if (answer < 18) {
               console.log('\x1b[31m' + "you are to jong to pertisapate, please visit use when you are 18 ore older" + '\x1b[0m');
             } else if (answer> 99) {
          console.log('\x1b[31m' + "you are to old to pertisapate, please enter 99 or less" + '\x1b[0m');
            }
          else if (answer > 18|| answer < 99) {
            check =false;
           }
           else {
               console.log('\x1b[31m' + "you can only alare between 18 and 99" + '\x1b[0m');
             }
      }
      case 7:
      while (check === true) {
        answer= Number(prompt(answerPrompt[i]));

        if (answer === "") {
             console.log('\x1b[31m' + "No age is enterd!" + '\x1b[0m');
        }else if (answer < answers[6]) {
               console.log('\x1b[31m' + `you are to jong to pertisapate, please visit use when you are $answers[6] ore older` + '\x1b[0m');
             } else if (answer> 99) {
          console.log('\x1b[31m' + "you are to old to pertisapate, please visit use when you are 99 ore below" + '\x1b[0m');
              
            }
          else if (answer > answers[6] || answer < 99) {
            check =false;
           }
           else {
              
             }
      }
    default:

  }


  answers.push(answer);
    i++;
  
  }

console.log(`\n\x1b[35mYour profile:  \x1b[0m\nI am \u001b[36m${answers[0]} ${answers[1]}\x1b[0m and I am \u001b[36m${answers[2]}\x1b[0m years old. I identify myself as a \u001b[36m${answers[3]}\x1b[0m and am interested in \u001b[36m${answers[4]}\x1b[0m. My current location is: \u001b[36m${answers[5]}\x1b[0m. And I am looking for a parter who is between \u001b[36m${answers[6]}\x1b[0m and \u001b[36m${answers[7]}\x1b[0m years old.\n`);

console.log(`\x1b[35mThe amount of people using the Winc Winc app (at this moment): ${mockData.length}. Based on your profile we have matched you with the following people:\x1b[0m`);




let counter = 0;


for (let i = 0; i < mockData.length; i++) {
  if (answers[2] >= mockData[i].min_age_interest && answers[2] <= mockData[i].max_age_interest) {
    if (mockData[i].age >= answers[6] && mockData[i].age <= answers[7]) {
      if (answers[5] == mockData[i].location) {
        if ((answers[4] == mockData[i].gender) || (answers[4] == "B") && (["M", "F"].includes(mockData[i].gender))) {
          if((answers[3]==mockData[i].gender_interest)|| (answers[3] == "B") && (["M", "F"].includes(mockData[i].gender_interest))){
          
        
          
            
            console.log(`Hi! I am \u001b[36m${mockData[i].first_name} ${mockData[i].last_name}\x1b[0m and I am \u001b[36m${mockData[i].age}\x1b[0m years old. I identify myself as a \u001b[36m${mockData[i].gender}\x1b[0m and am interested in \u001b[36m${mockData[i].gender_interest}\x1b[0m. My current location is: \u001b[36m${mockData[i].location}\x1b[0m. And I am looking for a parter who is between \u001b[36m${mockData[i].min_age_interest}\x1b[0m and \u001b[36m${mockData[i].max_age_interest}\x1b[0m years old.\n`);
            counter++;
        
          }
          }
        }
      }
    }
  }

console.log(`In total you have \x1b[35m${counter}\x1b[0m matche(s)!`);
