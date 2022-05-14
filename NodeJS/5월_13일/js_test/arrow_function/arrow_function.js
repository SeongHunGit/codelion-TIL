// const foo = () => {
//   console.log("arrow function");
// };
// function foo() {
//   console.log("arrow function");
// }

// const foo = (x) => x;
// const foo = (x) => {
//   return x;
// };

// const foo = (x, y) => x + y; 1줄일 때
const foo = (x, y) => {
  console.log("2줄 이상");
  return x + y;
};

console.log(foo(1, 5));
