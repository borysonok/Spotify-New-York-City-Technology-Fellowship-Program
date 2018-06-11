// Write a function that, given an amount of money and an array of coin denominations, computes the number of ways to make the amount of money with coins of the available denominations. 

// Example: for amount=4 (4¢) and denominations=[1,2,3] (1¢, 2¢ and 3¢), your program would output 4—the number of ways to make 4¢ with those denominations: 

// 1¢, 1¢, 1¢, 1¢
// 1¢, 1¢, 2¢
// 1¢, 3¢
// 2¢, 2¢


function changePossibilities(totalAmount, coinsArray) {
    let numberOfWays = 0;
    let allWaysArr = [];

    for (let i = 0; i < coinsArray.length; i++) {
        let tempWays = [];
        let tempSum = coinsArray[i];
        tempWays.push(coinsArray[i]);

        for (let j = 0; j < coinsArray.length; j++) {
            while (tempSum < totalAmount) {
                tempSum += coinsArray[j];
                tempWays.push(coinsArray[j]);
                if (tempSum === totalAmount) {
                    numberOfWays++;
                    allWaysArr.push(tempWays);
                    break;
                }
            }
        }
        tempWays = [];
        tempSum = coinsArray[i];
    }
    console.log("Ways: ", allWaysArr);

    return numberOfWays;
}


console.log(changePossibilities(4, [1, 2, 3]));
console.log(changePossibilities(5, [1, 2, 3]));
console.log(changePossibilities(6, [1, 2, 3]));