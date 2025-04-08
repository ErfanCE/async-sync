// sync
/*
const printMessages = (message) => {
  console.log(message);
};

printMessages('message 1');
printMessages('message 2');
printMessages('message 3');
printMessages('message 4');
*/

// async: callback | Promise | async-await
/*
const printMessages = (message) => {
  setTimeout(() => {
    console.log(message);
  }, Math.floor(Math.random() * 1000) + 1);
};

console.log('start');

printMessages('message 1');
printMessages('message 2');
printMessages('message 3');
printMessages('message 4');

console.log('end');
*/
// callback => async
/*
const printMessages = (message, cb) => {
  setTimeout(() => {
    console.log(message);
    cb();
  }, Math.floor(Math.random() * 1000) + 1);
};

console.log('start');

// callback hell
printMessages('message 1', () => {
  printMessages('message 2', () => {
    printMessages('message 3', () => {
      printMessages('message 4', () => {});
    });
  });
});

console.log('end');

const fs = require('fs');

fs.readFile('./text-1.txt', 'utf-8', (err, data) => {
  fs.writeFile('./text-2.txt', 'hello', (err) => {});
});
*/

// Promise

// create Promise
/*
const printMessages = (message) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(message);
    }, Math.floor(Math.random() * 1000) + 1);
  });
};

console.log('start');

// consume Promise
printMessages('message 1')
  .then((message) => {
    console.log(message);

    return printMessages('message 2');
  })
  .then((message) => {
    console.log(message);

    return printMessages('message 3');
  })
  .then((message) => {
    console.log(message);

    return printMessages('message 4');
  })
  .then((message) => {
    console.log(message);
  });

console.log('end');
*/
/*
const fs = require('node:fs/promises');

let data = '';

fs.readFile('./text-1.txt', 'utf-8')
  .then((data1) => {
    data += data1;
    return fs.readFile('./text-2.txt', 'utf-8');
  })
  .then((data2) => {
    data += data2;
    fs.writeFile('./text-3.txt', data);
  })
  .catch((err) => {
    console.log(err);
  });
*/

// async-await
const printMessages = (message) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(message);
      resolve();
    }, Math.floor(Math.random() * 1000) + 1);
  });
};

console.log('start');

const printAllMessages = async () => {
  await printMessages('message 1');
  await printMessages('message 2');
  await printMessages('message 3');
  await printMessages('message 4');
};

printAllMessages();

console.log('end');

// async function test() {}
// const test = async () => {};
// const test = async function () {};
