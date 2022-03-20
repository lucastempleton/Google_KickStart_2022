const fs = require('fs');
const input = fs.readFileSync('./challenge_nine_sample_ts1_input.txt', 'utf8').trim().split('\n');
let currentline = 0
function readline() { return input[currentline++] }
let T = readline()
for (let i = 1; i <= T; i++) {
    let N = readline();

    console.log(`Case #${i}: ${solve(N)}`)
}
function solve(N) {
    let numArr = N.split('')
    let solution;
    for (let i2 = 0; i2 <= 9; i2++) {
        for (let i3 = 0; i3 <= numArr.length; i3++) {
            let testArr = [...numArr]
            testArr.splice(i3, 0, i2)
            let remainder = testArr.join('') % 9
            if (remainder === 0) {
                solution = testArr.join('')
            }
        }
    }
    return solution
}