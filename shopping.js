function shopping(input) {
    let peterBudget = Number(input[0]);
    let n = Number(input[1]);
    let m = Number(input[2]);
    let p = Number(input[3]);
    let priceVideo = n * 250;
    let priceProcessor = (priceVideo * 0.35) * m;
    let priceRAM = (priceVideo * 0.10) * p;
    let finalPrice = priceVideo + priceProcessor + priceRAM;

if(n > m) {
    let discount = finalPrice * 0.15;
    finalPrice = finalPrice - discount;
}

if(finalPrice <= peterBudget) {
    console.log(`You have ${(peterBudget - finalPrice).toFixed(2)} leva left!`);
} else {
    console.log(`Not enough money! You need ${(finalPrice - peterBudget).toFixed(2)} leva more!`);
}

}