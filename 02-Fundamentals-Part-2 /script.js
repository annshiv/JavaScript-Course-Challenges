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