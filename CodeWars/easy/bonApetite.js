// Complete the bonAppetit function below.
/**
 * Problem: Anna and Brian eat at a restaurant, they will share the bill, but if anna
 * does not eat something so she wont pay it
 *
 *  bill[3,6,7,8], anna does not pay bill[2] = 8, so Anna will pay (3 + 6 + 7) / 2 = 8
 *  Brian will pay for all, so he will pay 3+6+7+8
 *
 * k: [a,b] a is number of all items, b is the number of items ordered and the -based index
 *  of the item that Anna did not eat.
 * bill: an array of integers representing the cost of each item ordered
 * b: the amount of money that Anna contributed to the bill. The third line contains an integer,
 *      b, the amount of money that Brian charged Anna for her share of the bill.
 *
 * @param bill
 * @param k
 * @param b
 */
function bonAppetit(k, bill, b) {
    // calculate Anna's bill
    // substract brian's bill half to anna's b account, if it is 0 then return 'Bon Appetit' else return residual
    let brian_bill = 0;
    bill.forEach((e, i) => {
        i != k[1] && (brian_bill += e);
    })
    let refund = b - (brian_bill / 2);
    return refund == 0 ? 'Bon Appetit' : refund;
}

// correct: 5
console.log(bonAppetit([4, 1], [3, 10, 2, 9], 12));
console.log("---------------------");
// correct : "Bon Appetit"
console.log(bonAppetit([4, 1], [3, 10, 2, 9], 7));
