const got = require('got');

// Promises

// console.log(got('https://example.com'));
// Outputs: Promise (pending)

// console.log('A');

let html = 'abc';

got(
  // prettier-ignore
  // console.log('Z') ||
  'https://example.com',
)
  .then(function (response) {
    html = response.body;

    // console.log('B');
    // // console.log(response.body);
  })
  .catch((err) => {
    console.log('error occurred');
  });

console.log('html', html);

// console.log('C')
