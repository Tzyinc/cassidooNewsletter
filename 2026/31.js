// https://buttondown.com/cassidoo/archive/u1f635-u1f4ab-time-you-enjoy-wasting-is-not/
// This week's question:
// Given an array of ice cream orders and a freezer stock map, return how many orders can be fulfilled before the first unavailable flavor.

// Example:

// > fulfilledOrdersBeforeFailure(
//     [["chocolate"],["chocolate"],["chocolate"]],
//     { chocolate: 2 })
// > 2

// > fulfilledOrdersBeforeFailure(
//     [["vanilla","vanilla"],["chocolate","mint"],["strawberry"],["strawberry","mint"]],
//     { vanilla: 2, chocolate: 1, mint: 1, strawberry: 5 })
// > 3

// > fulfilledOrdersBeforeFailure(
//     [["rocky road"],["vanilla"]],
//     { vanilla: 3 })
// > 0

const fulfilledOrdersBeforeFailure = (orders, stock) => {
    let count = 0;
    for (let order of orders) {
        for (let scoop of order) {
            if (stock[scoop] && stock[scoop] > 0) {
                stock[scoop] -= 1
            } else {
                return count
            }
        }
        count++;
    }
    return count
}
console.log(fulfilledOrdersBeforeFailure(
    [["chocolate"], ["chocolate"], ["chocolate"]],
    { chocolate: 2 }))

console.log(
    fulfilledOrdersBeforeFailure(
        [["vanilla", "vanilla"], ["chocolate", "mint"], ["strawberry"], ["strawberry", "mint"]],
        { vanilla: 2, chocolate: 1, mint: 1, strawberry: 5 })
)
console.log(
    fulfilledOrdersBeforeFailure(
        [["rocky road"], ["vanilla"]],
        { vanilla: 3 })
)
