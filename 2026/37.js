// https://buttondown.com/cassidoo/archive/u1f6e3-ufe0f-habit-is-persistence-in-practice/

// This week's question:
// You have a backpack lock's starting position, and the code to unlock it, represented as two strings of integers. In one move, you may rotate any single digit one step up or down, with 0 and 9 considered adjacent. Return the minimum number of moves needed to transform the starting code into the unlock code.

// Example:

// minMoves("8051", "1199")
// > 10

// minMoves("000", "555")
// > 15

// minMoves("109", "990")
// > 4

const moves = (a, b) => (10 + Number(a) - Number(b)) % 10;

const sum = (a, b) => a + b;

const minMoves = (a, b) => a.length === b.length ? a.split("").map((_, index) => Math.min(moves(a[index], b[index]), moves(b[index], a[index]))).reduce(sum) : -1;

console.log(minMoves("8051", "1199"))
console.log(minMoves("000", "555"))
console.log(minMoves("109", "990"))