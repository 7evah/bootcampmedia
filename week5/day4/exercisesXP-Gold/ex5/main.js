
function returnNumbers(inputString) {

  return inputString.replace(/[^\d]/g, '');
}

console.log(`'k5k3q2g5z6x9bn'${returnNumbers('k5k3q2g5z6x9bn')}`);
// Expected output: 532569

console.log(`'abc123xyz456' ${returnNumbers('abc123xyz456')}`);
// Expected output: 123456

