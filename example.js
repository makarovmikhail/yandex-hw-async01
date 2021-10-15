import rd from "./index.cjs";

import("./playground.js").then(() => {
  const asyncArray = new Homework.AsyncArray([1, 2, 3, 4]);
  const reducerSum = (acc, curr, i, src, cb) => Homework.add(acc, curr, cb);
  const reducerSub = (acc, curr, i, src, cb) =>
    Homework.subtract(acc, curr, cb);
  const reducerMul = (acc, curr, i, src, cb) =>
    Homework.multiply(acc, curr, cb);
  const reducerDiv = (acc, curr, i, src, cb) => Homework.divide(acc, curr, cb);

  rd(global.Homework)(asyncArray, reducerSum, 0, (res) => {
    console.log(res);
  });

  rd(global.Homework)(asyncArray, reducerSub, 0, (res) => {
    console.log(res);
  });

  rd(global.Homework)(asyncArray, reducerMul, 1, (res) => {
    console.log(res);
  });

  rd(global.Homework)(asyncArray, reducerDiv, 1, (res) => {
    console.log(res);
  });
});
