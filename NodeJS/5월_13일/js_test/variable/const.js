const hello = "first hello";
// hello = "second helo"; TypeError: Assignment to constant variable.

if (true) {
  const hello = "second hello";
  console.log(hello); // second hello
}

console.log(hello); // first hello
