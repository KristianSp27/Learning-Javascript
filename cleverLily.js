function cleverLily(input) {
    let age = Number(input[0]);
    let laundryPrice = Number(input[1]);
    let pricePerToy = Number(input[2]);
    let income = 0;

    for (let i = 1; i <= age; i++) {
        if (i % 2 != 0) {
            income += pricePerToy
        } else {
            income += (5 * i) - 1
        }
    }
 
    if (income >= laundryPrice) {
        console.log(`Yes! ${(income - laundryPrice).toFixed(2)}`)
    } else {
        console.log(`No! ${(laundryPrice - income).toFixed(2)}`)
    }
}

