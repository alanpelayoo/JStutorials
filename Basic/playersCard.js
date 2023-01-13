// A "K" is 4 points
// A "Q" is 3 points
// A "J" is 2 points

const CARD_POINTS = {
    "K":4,
    "Q":3,
    "J":2
}

input = "JQ"
let total = 0

for (let i=0;i<input.length; i++){
    total = total + CARD_POINTS[input[i]]
}
console.log(total)