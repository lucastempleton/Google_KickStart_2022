const fs = require('fs');
const input = fs.readFileSync('./palindrome_free_strings_sample_ts1_input.txt', 'utf8').trim().split('\n');
let currentline = 0
function readline() { return input[currentline++] }
let T = readline()
for (let i = 1; i <= T; i++) {
    let N = readline()
    let S = readline()
    console.log(solve(N, S))
}
function solve(N, S) {
    let amount = 0;
    let arr = S.split('');
    let
    for (let i = 0; i <= arr.length - 1; i++) {
        if (arr[i] === '?') { ++amount }
    }
    if ((N % 2) === 0 && (amount % 2 === 0)) {
        return 'Impossible'
    } else if ((N % 2) === 1 && (amount % 2 === 1)) {
        return 'Impossible'
    } else {

    }
}