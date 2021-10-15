// solution/index.js
module.exports = function (Homework) {
    const promisify = async (fn, a, b) => {
      return new Promise(function (resolve, reject) {
        if ((a || a == 0) && (b || b == 0)) {
          fn(a, b, (res) => {
            resolve(res);
          });
        } else if (a || a === 0) {
          fn(a, (res) => {
            resolve(res);
          });
        } else {
          fn((res) => {
            resolve(res);
          });
        }
      });
    };
  
    return async (array, fn, initialValue, cb) => {
      // асинхронный reduce
      let value = initialValue;
      let index = 0;
      const arrayLenght = await promisify(array.length);
      let cond = await promisify(Homework.less, index, arrayLenght);
  
      while (cond) {
        const el = await promisify(array.get, index);
        value = await new Promise(function (resolve, reject) {
          fn(value, el, index, array, (res) => resolve(res));
        });
        index = await promisify(Homework.add, index, 1);
        cond = await promisify(Homework.less, index, arrayLenght);
      }
  
      return cb(value);
    };
  };
  