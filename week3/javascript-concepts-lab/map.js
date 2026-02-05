const numbers = [2, 4, 6, 8, 10];
const dobleNumbers = numbers.map((n) => n * 2);
console.log(dobleNumbers);

const temperaturesCelsius = [0, 15, 30, 45];
const temperaturesKelvin = temperaturesCelsius.map((t) => t + 273.15);
console.log('Celsius Temperatures: ', temperaturesKelvin);
