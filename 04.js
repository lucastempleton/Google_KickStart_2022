const fs = require('fs');
const input = fs.readFileSync('./interesting_integers_sample_ts1_input.txt', 'utf8').trim().split('\n');
let currentline = 0
function readline() { return input[currentline++] }
let T = readline()
for (let i = 1; i <= T; i++) {
    let arr = readline().split(' ')
    console.log(`Case ${T}: ${solve(arr)}`)
}
function solve(arr) {
    let total = []
    let numBetween = arr[1] - arr[0]
    for (let i = numBetween; i >= 0; i--) {
        let test = parseInt(arr[0]) + i
        test = test.toString()
        let sum = 0
        let product = 1
        for (let i2 = 0; i2 <= test.length - 1; i2++) {
            sum += parseInt(test[i2])
            product *= parseInt(test[i2])
        }
        let s = product % sum;
        if (s === 0) {
            total.push(test)
        }
    }
    return total.length
}