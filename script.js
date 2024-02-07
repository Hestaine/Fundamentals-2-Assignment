"use strict";
function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} million people and it's capital city is ${capitalCity}`;
}

const finland = describeCountry("Finland", 6, "Helsinkki");
const nigeria = describeCountry("Nigeria", 205, "lagos");
const japan = describeCountry("jAPAN", 60, "Tokyo");

console.log(finland);
console.log(nigeria);
console.log(japan);
