function godzillaVsKong(input) {
let movieBudget = Number(input[0]);
let extrasNumber = Number(input[1]);
let clothingPerExtra = Number(input[2]);

let totalClothingPrice = clothingPerExtra * extrasNumber;
let decorPrice = movieBudget * 0.10;

if (extrasNumber > 150) {
    let discount = totalClothingPrice * 0.10;
    totalClothingPrice = totalClothingPrice - discount; 
}

let finalPrice = totalClothingPrice + decorPrice;
if (finalPrice > movieBudget) {
console.log("Not enough money!");
console.log(`Wingard needs ${(finalPrice - movieBudget).toFixed(2)} leva more.`);
} else { 
    console.log("Action!");
    console.log(`Wingard starts filming with ${(movieBudget - finalPrice).toFixed(2)} leva left.`);

}
}