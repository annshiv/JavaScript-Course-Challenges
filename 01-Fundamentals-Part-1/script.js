let word = 'annshiv';
if (word === 'annshiv') alert("Welcome to my page");


// values and variables 

country = 'india';
continent = 'asia';
population = '7.5B';

console.log(country);
console.log(continent);
console.log(population);

// Data types

let isIsland = false;
let language;

console.log(typeof(isIsland));
console.log(typeof(population));
console.log(typeof(country));
console.log(typeof(language));

// let, const & var

let ind_language = 'Hindi';

ind_language = 'Tamil';
console.log(ind_language);

////////////////////////////////////
// Coding Challenge #1

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

GOOD LUCK 😀
*/

//task data 1
let marks_weight = 78;
let marks_height = 1.69;
let johns_weight = 92;
let johns_height = 1.69;

marksBMI = (marks_weight / marks_height) ** 2;
johnsBMI = (johns_weight / johns_height) ** 2;

console.log(marksBMI>johnsBMI)
console.log(marksBMI<johnsBMI)

// basic operators

const india_population = 7;
const finland_population = 6;
const avg_population = 33;

console.log(india_population);
console.log(finland_population < india_population);
console.log(avg_population > india_population);

// Strings and Template Literals

const description = `Tamilnadu is in india, and its ${india_population} million people speaks tamil`
console.log(description)

////////////////////////////////////
// Coding Challenge #2

/*
Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

1. Print a nice output to the console, saying who has the higher BMI. The message can be either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

HINT: Use an if/else statement 😉

GOOD LUCK 😀
*/
const marks_BMI = 28.3;
const johns_BMI = 23.9;

if (marks_BMI > johns_BMI) {
    console.log(`Mark's BMI ${marks_BMI} is higher than John's ${johns_BMI}!`);
} else {
    console.log(`Johns's BMI ${johns_BMI} is higher than Marks's ${marks_BMI}!`);
}

////////////////////////////////////
// Coding Challenge #3

/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins the a trophy!

1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).

3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.

TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

GOOD LUCK 😀
*/

const Dolphins = (96+108+89) / 3;
const Koalas = (88+91+110) / 3;
const minimumScore = 100;

if ((Dolphins > Koalas) && (Dolphins > minimumScore && Koalas > minimumScore)) {
    console.log('Dolphins are win')
} else if (Koalas === Koalas) {
    console.log('Match is draw')
} else if ((Dolphins < Koalas) && (Dolphins > minimumScore && Koalas > minimumScore)){
    console.log('Koalas are win')
} else if  (Dolphins < minimumScore && Koalas < minimumScore) {
    console.log('Match is draw')
}

// Taking Decisions: if / else Statements

const population1 = 50;
if (population1 > 33) {
    console.log(`${country}'s population is greater than that 33 million`);
} else {
    console.log(`${country}'s population is ${33 - population1} million below average`);
}

// Type Conversion and Coercion

console.log('9' - '5');
console.log('19' - '13' + '17');
console.log('19' - '13' + 17);
console.log('123' < 57);
console.log(5 + 6 + '4' + 9 - 4 - 2);

////////////////////////////////////
// Coding Challenge #4

/*
Steven wants to build a very simple tip calculator for whenever he goes eating in a resturant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

1. Your task is to caluclate the tip, depending on the bill value. Create a variable called 'tip' for this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)
2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip). Example: 'The bill was 275, the tip was 41.25, and the total value 316.25'

TEST DATA: Test for bill values 275, 40 and 430

HINT: To calculate 20% of a value, simply multiply it by 20/100 = 0.2
HINT: Value X is between 50 and 300, if it's >= 50 && <= 300 😉
*/
const t1 = 275;
const t2 = 40;
const t3 = 430;
// let tip;
// if (t1 >= 50 && t1 <= 300) {
//     tip = t1/20
// }

let tip1 = t1 >= 50 && t1 <= 100 ? t1*0.15 : t1*0.2;
let tip2 = t2 >= 50 && t2 <= 100 ? t2*0.15 : t2*0.2;
let tip3 = t3 >= 50 && t3 <= 100 ? t3*0.15 : t3*0.2;
console.log(`the bill was ${t1}, the tip was ${tip1}, and the total value ${t1 + tip1}`);
console.log(`the bill was ${t2}, the tip was ${tip2}, and the total value ${t2 + tip2}`);
console.log(`the bill was ${t3}, the tip was ${tip3}, and the total value ${t3 + tip3}`);