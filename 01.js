const fs = require('fs');
// const input = fs.readFileSync('./speed_typing_sample_ts1_input.txt', 'utf8').trim().split('\n');
const input = fs.readFileSync('./speed_typing_sample_ts2_input.txt', 'utf8').trim().split('\n');
let currentline = 0
function readline() { return input[currentline++] }
let T = readline()
for (let i = 1; i <= T; i++) {
    let I = readline();
    let P = readline();
    console.log(`Case #${i}: ${solve(I, P)}`)
}
function solve(I, P) {
    let solution = 0;
    for (let i = 0; i <= I.length - 1; i++) {
        let testArr = I.split('')
        let barbArr = P.split('')
        barbArr.splice(i, 1)
        if (testArr.join('') == barbArr.join('')) {
            solution = 1
        }
        for (let i2 = 0; i2 <= I.length - 1; i2++) {
            barbArr.splice(i2, 1)
            if (testArr.join('') == barbArr.join('')) {
                solution = 2
            }
        }
    }
    if (solution === 0) {
        return 'Impossible'
    } else {
        return solution
    }
}
