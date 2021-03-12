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

// Introduction to Arrays

const populations = [12,23,34,45];
console.log(populations.length == 4);

const percentages = [
  percentageOfWorld1(populations[0]),
  percentageOfWorld1(populations[1]),
  percentageOfWorld1(populations[2]),
  percentageOfWorld1(populations[3])
]

console.log(percentages)

// Basic Array Operations (Methods)

const neighbours = ['pakistan','china','japan'];

neighbours.push('Utopia');
console.log(neighbours);

neighbours.pop();
console.log(neighbours);

if (!neighbours.includes('Germany')) {
  console.log('Probably not a central European country :D');
};

neighbours[neighbours.indexOf['Sweden']] = 'Republic of Sweden';
console.log(neighbours);

// Introduction of Objects

const myCountry = {
  country : 'India',
  capital : 'Delhi',
  language : 'Tamil',
  population : 13,
  neighbours : ['pakistan','china','japan'],
  describe : function(){
    console.log(
      `${this.country} has ${this.population} billion ${this.language}-speaking people, ${this.neighbours.length} neibouring countries and a capital called ${this.capital}.`
    );
  },

  checkIsland: function() {
    this.isIsland = this.neighbours.length === 0 ? true : false;
  }
};

// Dot vs. Bracket Notation

console.log(`${myCountry.country} has ${myCountry.population} billion ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neibouring countries and a capital called ${myCountry.capital}.`);

myCountry.population = myCountry.population + 2;
console.log(myCountry.population);

myCountry['population'] -= 2;
console.log(myCountry.population);

// Object Methods

myCountry.describe();
myCountry.checkIsland();
console.log(myCountry);

///////////////////////////////////////
// Coding Challenge #2

/*
Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.
2. And now let's use arrays! So create an array 'bills' containing the test data below.
3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before.
4. BONUS: Create an array 'total' containing the total values, so the bill + tip.

TEST DATA: 125, 555 and 44

HINT: Remember that an array needs a value in each position, and that value can actually be the returned value of a function! So you can just call a function as array values (so don't store the tip values in separate variables first, but right in the new array) 😉

GOOD LUCK 😀
*/

function calcTip (a) {
  if (a >= 50 && a <= 100) {
    return a*0.15;
  } else {
    return a * 0.2;
  }
}

const bills = [125,555,44];
const tips = [calcTip(bills[0]),calcTip(bills[1]),calcTip(bills[2])];
console.log(tips)

// Bonus 

const total = [bills[0]+calcTip(bills[0]),bills[1]+calcTip(bills[1]),bills[2]+calcTip(bills[2])]
console.log(total)

// Object Methods

const jonas = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  birthYeah: 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven'],
  hasDriversLicense: true,

  calcAge: function () {
    this.age = 2037 - this.birthYeah;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${jonas.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`
  }
};

console.log(jonas.calcAge());

console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);

// Challenge
// "Jonas is a 46-year old teacher, and he has a driver's license"

console.log(jonas.getSummary());

///////////////////////////////////////
// Coding Challenge #3

/*
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter)

1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method.
3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

TEST DATA: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

GOOD LUCK 😀
*/

const marks = {
  name : 'Mark Miller',
  mass : 78,
  height : 1.69,
  BMI : function() {
    this.bmi = this.mass / (this.height ** 2);
    return this.bmi;
  }
};

const john = {
  name : 'John Smith',
  mass : 92,
  height : 1.95,
  BMI : function() {
    this.bmi = this.mass / (this.height ** 2);
    return this.bmi;
  }
};

john.BMI();
marks.BMI();

const winner = function(marks,john) {
  if (marks.bmi < john.bmi) {
    return `${john.name}'s bmi (${john.bmi}) is higher than ${marks.name}'s (${marks.bmi})!`
  } else {
    return `${marks.name}'s bmi (${marks.bmi}) is higher than ${john.name}'s (${john.bmi})!`
  }
};

console.log(winner(marks,john));

// Iteration: The for Loop

for (let i = 1; i <= 50; i++ ) {
  console.log(`Voter number ${i} is currently voing`);
}

// Looping Arrays, Breaking and Continuing

const percentages2 = [];
for (i = 0; i < populations.length; i++) {
  percentages2.push(percentageOfWorld1(populations[i]));
}

console.log(percentages2);

// Looping Backwards and Loops in Loops

const listOfNeighbours = [['Canada', 'Mexico'],['Spain'], ['Norway','Sweden','Russia']];

for(i = 0; i < listOfNeighbours.length; i++) {
  if (listOfNeighbours[i].length > 1) {
    for (n = 0 ; n < listOfNeighbours[i].length; n++) {
      console.log(listOfNeighbours[i][n]);
    }
  } else {
    console.log(listOfNeighbours[i][0]);
  }
}

// The while Loop

const percentages3 = [];
i = 0; 
while (i < populations.length) {
  const perc = percentageOfWorld1(populations[i]);
  percentages3.push(perc);
  i++;
}
console.log(percentages3);