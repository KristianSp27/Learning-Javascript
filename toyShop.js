function toyShop(input) {
let tripPrice = Number(input[0]);
let puzzlesNumber = Number(input[1]);
let talkingDollsNumber = Number(input[2]);
let teddyBearsNumber = Number(input[3]);
let minionsNumber = Number(input[4]);
let trucksNumber = Number(input[5]);

let puzzlesPrice = puzzlesNumber * 2.60;
let talkingDollsPrice = talkingDollsNumber * 3;
let teddyBearsPrice = teddyBearsNumber * 4.10;
let minionsPrice = minionsNumber * 8.20;
let trucksPrice = trucksNumber * 2;

let totalToysPrice = puzzlesPrice + talkingDollsPrice + teddyBearsPrice + minionsPrice + trucksPrice;
let totalToysNumber = puzzlesNumber + talkingDollsNumber + teddyBearsNumber + minionsNumber + trucksNumber;

if (totalToysNumber >= 50) {
    let discount = 0.25 * totalToysPrice;
    totalToysPrice = totalToysPrice - discount;
}

let rent = 0.10 * totalToysPrice;
totalToysPrice = totalToysPrice - rent;

if (totalToysPrice >= tripPrice) {
    console.log(`Yes! ${(totalToysPrice - tripPrice).toFixed(2)} lv left.`);
} else {
    console.log(`Not enough money! ${(tripPrice - totalToysPrice).toFixed(2)} lv needed.`);
}
}
