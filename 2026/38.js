// https://buttondown.com/cassidoo/archive/u1f92a-theres-power-in-looking-silly-and-not/

// This week's question:
// Given a sentence, return the longest word whose letters appear in alphabetical order.

// Examples:

// > longestSorted("The autumn leaves almost glow.")
// > "almost"

// > longestSorted("A cool sheep sleeps.")
// > ""

const isSorted = str => {
    for (let i=1; i< str.length; i++) {
        if (str.charCodeAt(i) < str.charCodeAt(i-1)) {
            return false
        }
    }
    return true
}

const longestSorted = str => {
    const lowercaseStr = str.replace(/\.?!,/g, '').toLowerCase();
    const words = lowercaseStr.split(' ');

    return [...words.filter(isSorted).sort((a, b) => b.length -a.length), ''][0];
}

console.log(longestSorted("The autumn leaves almost glow."))
console.log(longestSorted("A cool sheep sleeps."))
console.log(longestSorted("abc defg"))
console.log(longestSorted("edc cba"))