const got = require('got');
// The ES Modules way of doing it:
// import got from 'got';

// Async / Await

console.log('A');

async function main() {
  try {
    let html = 'abc';

    console.log('Z');

    let response = await got('https://sindresorhus.com');

    console.log('B');

    html = response.body;

    // console.log('html', html);
  } catch (err) {
    console.log(error.response.body);
  }
}

console.log('R');

main();

console.log('X');
