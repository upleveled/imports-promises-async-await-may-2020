console.log('before promise');

setTimeout(() => {
  console.log('after timeout');
}, 0);

Promise.resolve().then(() => {
  console.log('done');
});

console.log('after promise');
