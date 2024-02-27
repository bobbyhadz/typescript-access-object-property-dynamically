export {};

// EXAMPLE 1 - Dynamically access an Object's Property in TypeScript

const obj = {
  name: 'Bobby Hadz',
  country: 'Chile',
};

type ObjectKey = keyof typeof obj;

const myVar = 'name' as ObjectKey;

console.log(obj[myVar]); // 👉️ Bobby Hadz

// ---------------------------------------------------

// // EXAMPLE 2 - Using a type assertion to dynamically access an object property

// const obj = {
//   name: 'Bobby Hadz',
//   country: 'Chile',
// };

// // 👇️ type ObjectKey = "name" | "country"
// type ObjectKey = keyof typeof obj;

// // 👇️ const myVar: "name" | "country"
// const myVar = ('na' + 'me') as ObjectKey;

// console.log(obj[myVar]); // 👉️ Bobby Hadz

// ---------------------------------------------------

// // EXAMPLE 3 - Using type assertion in the square brackets

// const obj = {
//   name: 'Bobby Hadz',
//   country: 'Chile',
// };

// // 👇️ const myVar: string
// const myVar = 'na' + 'me';

// // 👇️ type ObjectKey = "name" | "country"
// type ObjectKey = keyof typeof obj;

// console.log(obj[myVar as ObjectKey]); // 👉️ Bobby Hadz
