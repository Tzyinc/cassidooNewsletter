// https://buttondown.com/cassidoo/archive/u1f3b9-to-take-a-fine-idea-and-make-something/

// This week's question:
// Given an array of daily temperatures and a number drop, return an array where each element is how many days you'd wait until it's at least drop degrees colder than that day. If that never happens, put 0.

// Examples:

// > firstFrost([70, 68, 72, 60, 65, 55], 5)
// > [3, 2, 1, 2, 1, 0]

// > firstFrost([50, 49, 48], 5)
// > [0, 0, 0]

// > firstFrost([40, 30, 45, 20], 10)
// > [1, 2, 1, 0]

const firstFrost = (arr, drop) => {
    let curr = 0;
    const results = Array.from({length: arr.length}).map(_ => 0)
    for (let i=1; i< arr.length; i++) {
        const diff = arr[i-1]-arr[i]
        if (diff >= drop) {
            while (curr < i) {
                results[curr] = i-curr
                curr++;
            }
        }
    }
    return results
}

console.log(firstFrost([70, 68, 72, 60, 65, 55], 5))
console.log(firstFrost([50, 49, 48], 5))
console.log(firstFrost([40, 30, 45, 20], 10))