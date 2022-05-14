// function sayHello() {
//   return new Promise((resolve, reject) => {
//     const hello = "Hello Hello";
//     resolve(hello);
//   });
// }

// function sayHello() {
//   return new Promise((resolve, reject) => {
//     reject(new Error());
//   });
// }

// resolve => 성공
// reject => 실패

function sayHello() {
  return new Promise((resolve, reject) => {
    resolve("hello!!!");
  });
}

// sayHello()
//   .then((resolvedData) => {
//     console.log(resolvedData);
//     return resolvedData;
//   })
//   .then((resolvedData) => {
//     console.log(resolvedData);
//     return resolvedData;
//   })
//   .then((resolvedData) => {
//     console.log(resolvedData);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

async function test() {
  const hello1 = await sayHello();
  console.log(hello1);
}

test();
