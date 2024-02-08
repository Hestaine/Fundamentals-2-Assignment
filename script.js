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
