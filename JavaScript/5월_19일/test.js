function outer() {
  let val = "test";

  function inner() {
    console.log(val);
  }

  return inner;
}

const innerFunc = outer();

innerFunc();

// 동적 스코프
//   sub add {
//       $balance += shift;
//   }

//   sub transaction_a {
//       local $balance = 0;
//       say add(1);
//       transaction_b();
//       say add(100);
//   }

//   sub transaction_b {
//       local $balance = 5;
//       say add(10);
//   }
//
