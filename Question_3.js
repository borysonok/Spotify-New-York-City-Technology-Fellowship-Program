// Write a function that, given an amount of money and an array of coin denominations, computes the number of ways to make the amount of money with coins of the available denominations.

// Example: for amount=4 (4¢) and denominations=[1,2,3] (1¢, 2¢ and 3¢), your program would output 4—the number of ways to make 4¢ with those denominations:

// 1¢, 1¢, 1¢, 1¢
// 1¢, 1¢, 2¢
// 1¢, 3¢
// 2¢, 2¢

// ========================================================================================== //

// This is a dynamic programming problem but could also be solved recursively:

function changePossibilities(totalAmount, coinsArray) {
    if (totalAmount === 0) return 1;
    if (totalAmount < 0) return 0;
    if (coinsArray.length <= 0 && totalAmount >= 1) return 0;

    return (
        changePossibilities(totalAmount, coinsArray.slice(0, -1)) +
        changePossibilities(totalAmount - coinsArray[coinsArray.length - 1], coinsArray)
    );
}

console.log(changePossibilities(4, [1, 2, 3])); // 4
console.log(changePossibilities(5, [1, 2, 3])); // 5
console.log(changePossibilities(6, [1, 2, 3])); // 7


// ========================================================================================== //

// I have also found the solusion that utilizes Dynamic Programming way:

function changePossibilities(totalAmount, coinsArray) {
    let waysForTotalAmount = [];
    for (let i = 0; i <= totalAmount; i++) {
        waysForTotalAmount[i] = 0;
    }
    // there is 1 way to renturn 0 cents
    waysForTotalAmount[0] = 1;

    for (let j = 0; j < coinsArray.length; j++) {
        let coin = coinsArray[j];
        for (let higherAmount = coin; higherAmount <= totalAmount; higherAmount++) {
            let higherAmountRemainder = higherAmount - coin;
            waysForTotalAmount[higherAmount] += waysForTotalAmount[higherAmountRemainder];
        }
    }

    return waysForTotalAmount[totalAmount];
}



console.log(changePossibilities(4, [1, 2, 3])); // 4
console.log(changePossibilities(5, [1, 2, 3])); // 5
console.log(changePossibilities(6, [1, 2, 3])); // 7

// ========================================================================================== //