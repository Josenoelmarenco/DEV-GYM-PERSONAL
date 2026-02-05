// const person = { name: 'Noel', age: 30, city: 'Helsinki' };

// const { name, age } = person;

// console.log('Name:', name);
// console.log('Age: ', age);

const person = {
  name: 'noel',
  info: { age: 30, occupation: 'Engineer' },
};

const {
  name,
  info: { age, occupation },
} = person;

console.log('Este es el nombre: ', name);
console.log('Esta es la edad: ', age);
console.log('This is the occupation: ', occupation);
