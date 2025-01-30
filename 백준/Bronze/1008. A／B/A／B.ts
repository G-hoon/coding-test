const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

const answer: number = Number(input[0] / input[1])

console.log(answer)