"use strict";

const mockData = require("./mockData.js").data;
const prompt = require("prompt-sync")();

// Your code here
//const firstNameAnsewer= prompt("answar only with a-Z max 10 characters:");
//const firstNameQuestion= prompt("What is your firstname?");
//const lastNameQuestion = prompt("What is your lastname?");
//const age = prompt("How old are you?");
//const minIntressedAgeQuestion = (prompt("What is the minimum age you are interested in?"));
//const maxIntressedAgeQuestion = (prompt("What is the maximum age you are interested in?"));
//const genderQuestion = (prompt("What gender are youinterested in?"));
//const locationQuestion = prompt("What city are you living in?");

// welcome text dating app
console.log("\x1b[35m" + "Welcome to Johnny's dating app!" + "\x1b[0m");
console.log("\x1b[35m" + 'To procide press "enter"' + "\x1b[0m");

let ageMinimumAnsewer = 0;
let ageMaximumAnsewer = 0;
let firstNameAnsewer = 0;
let lastNameAnsewer = 0;
let ageAnsewer = 0;
let genderAnswer = 0;
let genderIntrestAnswer = 0;
let locationAnsewer = 0;
let locationAnsewerText;

const check = true;
while (check === true) {
  console.log("What is your firstname?");
  firstNameAnsewer = prompt(
    "\u001b[36m" +
      "answar only with a-Z minimum 3 and maximum 10 characters:" +
      "\u001b[0m"
  );
  if (firstNameAnsewer === "") {
    console.log("No name enterd!");
  } else if (firstNameAnsewer.length < 3) {
    console.log("name is to short!");
  } else if (firstNameAnsewer.length > 10) {
    console.log("name is to lang!");
  } else if (!/^[a-zA-Z ]+$/.test(firstNameAnsewer)) {
    console.log("name can only contain a-z");
  } else {
    break;
  }
}

while (check === true) {
  console.log("What is your lastname?");
  lastNameAnsewer = prompt(
    "\u001b[36m" +
      "answar only with a-Z minimum 3 and maximum 10 characters:" +
      "\u001b[0m"
  );
  if (lastNameAnsewer === "") {
    console.log("\x1b[31m" + "No name enterd!" + "\x1b[0m");
  } else if (lastNameAnsewer.length < 3) {
    console.log("\x1b[31m" + "name is to short!" + "\x1b[0m");
  } else if (lastNameAnsewer.length > 10) {
    console.log("name is to lang!");
  } else if (!/^[a-zA-Z ]+$/.test(lastNameAnsewer)) {
    console.log("\x1b[31m" + "name can only contain a-z" + "\x1b[0m");
  } else {
    break;
  }
}

while (check === true) {
  console.log("How old are you?");
  ageAnsewer = Number(
    prompt("\u001b[36m" + "answar only from 18 till 99:" + "\u001b[0m")
  );
  if (ageAnsewer === "") {
    console.log("\x1b[31m" + "No age is enterd!" + "\x1b[0m");
  } else if (ageAnsewer < 18) {
    console.log(
      "\x1b[31m" +
        "you are to jong to pertisapate, please visit use when you are 18 ore older" +
        "\x1b[0m"
    );
  } else if (ageAnsewer < 99) {
    break;
  } else {
    console.log(
      "\x1b[31m" + "you can only alare between 18 and 99" + "\x1b[0m"
    );
  }
}

while (check === true) {
  console.log("What gender are you?");
  genderAnswer = prompt(
    "\u001b[36m" +
      'answar "M" for male, "F" for female and "X" for both:' +
      "\u001b[0m"
  ).toUpperCase();
  if (genderAnswer === "") {
    console.log("\x1b[31m" + "No gender is enterd!" + "\x1b[0m");
  } else if (genderAnswer === "M") {
    break;
  } else if (genderAnswer === "F") {
    break;
  } else if (genderAnswer === "X") {
    break;
  } else {
    console.log("\x1b[31m" + 'you can only ansar "M", "F" or "X"' + "\x1b[0m");
  }
}

while (check === true) {
  console.log("What gender are you interested in?");
  genderIntrestAnswer = prompt(
    "\u001b[36m" +
      'answar "M" for male, "F" for female and "X" for both:' +
      "\u001b[0m"
  ).toUpperCase();
  if (genderIntrestAnswer === "") {
    console.log("\x1b[31m" + "No gender is enterd!" + "\x1b[0m");
  } else if (genderIntrestAnswer === "M") {
    break;
  } else if (genderIntrestAnswer === "F") {
    break;
  } else if (genderIntrestAnswer === "X") {
    break;
  } else if (genderIntrestAnswer === "B") {
    break;
  } else {
    console.log(
      "\x1b[31m" + 'you can only ansar "M", "F", "B" or "X"' + "\x1b[0m"
    );
  }
}

while (check === true) {
  console.log("What is the minimum age you are looking for?");
  const lol = Number(
    prompt("\u001b[36m" + "answar only from 18 till 98:" + "\u001b[0m")
  );
  ageMinimumAnsewer = lol;
  if (ageMinimumAnsewer === "") {
    console.log("\x1b[31m" + "No age is enterd!" + "\x1b[0m");
  } else if (ageMinimumAnsewer < 18) {
    console.log(
      "\x1b[31m" + "You should not be looking for underage date" + "\x1b[0m"
    );
  } else if (ageMinimumAnsewer < 99) {
    break;
  } else {
    console.log("you can only alare between 18 and 99");
  }
}
if (ageMinimumAnsewer === 89) {
  console.log(
    "\x1b[34m" +
      "we will try to match you with someone between 89 and 99 years old" +
      "\x1b[0m"
  );
} else {
  while (check === true) {
    console.log("What is the maximum age you are looking for?");
    ageMaximumAnsewer = Number(
      prompt(
        "\x1b[32m" +
          `answar only from ${ageMinimumAnsewer + 1}  till 99:` +
          "\x1b[0m"
      )
    );
    if (ageMaximumAnsewer === "") {
      console.log("\x1b[31m" + "No age is enterd!" + "\x1b[0m");
    } else if (ageMaximumAnsewer < ageMinimumAnsewer + 1) {
      console.log(
        "\x1b[31m" +
          `You can only anser between ${ageMinimumAnsewer + 1} and 99` +
          "\x1b[0m"
      );
    } else if (ageMaximumAnsewer < 99) {
      break;
    } else {
      console.log("\x1b[31m" + `you can only alare between and 99` + "\x1b[0m");
    }
  }
}

while (check === true) {
  console.log("What is your location?");
  locationAnsewer = prompt(
    "\u001b[36m" + 'answar "R" for rural or "C" for City:' + "\u001b[0m"
  ).toUpperCase();
  if (locationAnsewer === "") {
    console.log("\x1b[31m" + "not enterd!!!" + "\x1b[0m");
  } else if ((locationAnsewer = "C")) {
    locationAnsewer = "city";
    break;
  } else if ((locationAnsewer = "R")) {
    locationAnsewer = "rural";
    break;
  } else {
    console.log('only can answer "R" for rural or "C" for City');
  }
}

console.log(
  `\nYour profile: \nI am ${firstNameAnsewer} ${lastNameAnsewer} and I am ${ageAnsewer} years old. I identify myself as a ${genderAnswer} and am interested in ${genderIntrestAnswer}. My current location is: ${locationAnsewerText}. And I am looking for a parter who is between ${ageMinimumAnsewer} and ${ageMaximumAnsewer} years old.\n`
);

console.log(
  `The amount of people using the Winc Winc app (at this moment): ${mockData.length}. Based on your profile we have matched you with the following people:\n`
);

let counter = 0;

for (let i = 0; i < mockData.length; i++) {
  if (
    ageAnsewer >= mockData[i].min_age_interest &&
    ageAnsewer <= mockData[i].max_age_interest
  ) {
    if (
      mockData[i].min_age_interest <= ageAnsewer &&
      mockData[i].max_age_interest >= ageAnsewer
    ) {
      if (locationAnsewer == mockData[i].location) {
        if (
          genderIntrestAnswer == mockData[i].gender ||
          (genderIntrestAnswer == "B" &&
            ["M", "F"].includes(mockData[i].gender))
        ) {
          console.log(
            `Hi! I am ${mockData[i].first_name} ${mockData[i].last_name} and I am ${mockData[i].age} years old. I identify myself as a ${mockData[i].gender} and am interested in ${mockData[i].gender_interest}. My current location is: ${mockData[i].location}. And I am looking for a parter who is between ${mockData[i].min_age_interest} and ${mockData[i].max_age_interest} years old.\n`
          );
          counter++;
        }
      }
    }
  }
}

console.log(`In total you have ${counter} matches!`);

console.log(mockData[20].gender);
