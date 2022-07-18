function yardGreening(input) {
    let squareMetersGreening = input[0];
    let price = squareMetersGreening * 7.61;
    discount = price * 0.18;
    finalPrice = price - discount;
    console.log(`The final price is: ${finalPrice} lv.`);
    console.log(`The discount is: ${discount} lv.`)
}