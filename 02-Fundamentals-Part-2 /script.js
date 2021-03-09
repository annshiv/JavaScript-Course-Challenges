// Functions

function describeCountry(country,population,capitalcity){
    return `${country} has ${population} million people and its capital city is ${capitalcity}`
}

c = prompt("Enter your country name : ");
p = prompt("Enter your country population : ");
capi = prompt("Enter your country capital : ");

console.log(describeCountry(c,p,capi))

// Function Declarations vs. Expressions

function percentageOfWorld1(population) {
    return (population/7900) * 100;
};

const percentageOfWorld2 = function (population) {
    return (population/7900) * 100;
};

console.log(percentageOfWorld1(1441))
console.log(percentageOfWorld2(1234))

// Arrow functions

const percentageOfWorld3 = population => (population/7900) * 100;

console.log(percentageOfWorld3(1441));

// Functions Calling Other Functions

const describePopulation = function (country,population) {
    const perc = percentageOfWorld1(population);
    return `${country} has ${population} million people, which is about ${perc} of the world`;
};

console.log(describePopulation('india',1234));

///////////////////////////////////////
// Coding Challenge #1

/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time.

TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

HINT: To calculate average of 3 values, add them all together and divide by 3
HINT: To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores 😉

GOOD LUCK 😀
*/

const calcAverage = (a,b,c) => (a+b+c) / 3;
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win 🏆 (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win 🏆 (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log('No team wins...');
  }
}
checkWinner(scoreDolphins, scoreKoalas);