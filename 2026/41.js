// https://buttondown.com/cassidoo/archive/u1f3a4-to-be-different-is-great-you-dont-want-to/
// On Halloween night, a town is represented by a grid where 0 is an empty lot, 1 is a living person, and 2 is an infected zombie. Every minute, infection spreads to any living person directly above, below, left, or right of an infected zombie. Return the minimum number of minutes until no living people remain, or -1 if some people can never be reached.

// Examples:

// > minutesUntilApocalypse([
//   [2, 1, 1],
//   [1, 1, 0],
//   [0, 1, 1]
// ])
// > 4

// > minutesUntilApocalypse([
//   [2, 1, 1],
//   [0, 1, 1],
//   [1, 0, 1]
// ])
// > -1
const SPREAD_DIR = [
  [-1, 0],
  [0, -1],
  [1, 0],
  [0, 1]
]

const minutesUntilApocalypse = (town) => {
  const zombies = new Set();
  const humans = new Set();
  let count = -1;

  let zombiesCount = zombies.size;

  for (let i = 0; i < town.length; i++) {
    for (let j = 0; j < town[i].length; j++) {
      if (town[i][j] === 2) {
        zombies.add(JSON.stringify([i, j]));
      } else if (town[i][j] === 1) {
        humans.add(JSON.stringify([i, j]))
      }
    }
  }
  while (zombiesCount != zombies.size) {
    count++;
    zombiesCount = zombies.size;
    Array.from(zombies).map(JSON.parse).forEach(([zomI, zomJ]) => {
      SPREAD_DIR.forEach(([deltaI, deltaJ]) => {
        const affected = JSON.stringify([zomI + deltaI, zomJ + deltaJ])
        if (humans.has(affected)) {
          humans.delete(affected);
          zombies.add(affected)
        }
      })
    })
  }

  return humans.size ? -1 : count;
}
console.log(
  minutesUntilApocalypse([
    [2, 1, 1],
    [1, 1, 0],
    [0, 1, 1]
  ])
)
console.log(
  minutesUntilApocalypse([
    [2, 1, 1],
    [0, 1, 1],
    [1, 0, 1]
  ])
)