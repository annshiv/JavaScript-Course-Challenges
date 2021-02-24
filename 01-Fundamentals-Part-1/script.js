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
const description = `Tamilnadu is in india, and its 11 million people speaks tamil`

console.log(india_population);
console.log(finland_population < india_population);
console.log(avg_population > india_population);
console.log(description);

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