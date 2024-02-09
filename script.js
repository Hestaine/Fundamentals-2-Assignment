"use strict";
function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} million people and it's capital city is ${capitalCity}`;
}

// const descFinland = describeCountry("Finland", 6, "Helsinkki");
// const descNigeria = describeCountry("Nigeria", 205, "lagos");
// const descJapan = describeCountry("Japan", 60, "Tokyo");

const worldPopulation = 7900;

// console.log(descFinland);
// console.log(descNigeria);
// console.log(descJapan);

function percentageOfWorld1(population) {
  return `${(population / worldPopulation) * 100}%`;
}

const populationPercentage1 = percentageOfWorld1(1441);
console.log(populationPercentage1);

const percentageOfWorld2 = function (population) {
  return (population / worldPopulation) * 100;
};

const populationPercentage2 = percentageOfWorld2(1441);
console.log(populationPercentage2);

const percentageOfWorld3 = (population) => (population / worldPopulation) * 100;

const populationPercentage3 = percentageOfWorld3(1441);
console.log(populationPercentage3);

const describePopulation = function (country, population) {
  const percentage = percentageOfWorld1(population);
  return `${country} has ${population} million people, which is about ${percentage}% of the world`;
};

const descChina = describePopulation("China", 1441);
const descNigeria = describePopulation("Nigeria", 206);
const descFinland = describePopulation("Finland", 30);

console.log(descChina);
console.log(descNigeria);
console.log(descFinland);

const populations = [1441, 206, 66, 30];

console.log(populations.length === 4);

const percentages = [
  percentageOfWorld1(populations[0]),
  percentageOfWorld1(populations[1]),
  percentageOfWorld1(populations[2]),
  percentageOfWorld1(populations[3]),
];

console.log(percentages);

const neighbours = ["Nigeria", "Cameroon", "Ghana"];
neighbours.push("Utopia");
console.log(neighbours);

neighbours.pop();
console.log(neighbours);

if (!neighbours.includes("Germany"))
  console.log("Probably not a cnetral European country :D");

neighbours[1] = "Columbia";
console.log(neighbours);

const myCountry = {
  country: "Nigeria",
  capital: "Lagos",
  language: "english",
  population: 206,
  neighbours: ["Columbia", "Cameroon", "Ghana"],

  describe: function () {
    this.countryDescribe = `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}`;
    return this.countryDescribe;
  },
  checkIsland: function () {
    this.isIsland = this.neighbours.length === 0 ? true : false;
  },
};
console.log(myCountry);

console.log(
  `${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}`
);

myCountry.population += 2;
console.log(myCountry.population);

myCountry["population"] -= 2;
console.log(myCountry.population);

myCountry.describe();
myCountry.checkIsland();
console.log(myCountry.countryDescribe);
console.log(myCountry.isIsland);

for (let vote = 1; vote <= 50; vote++) {
  console.log(`Voter number ${vote} is currently voting`);
}
