function schoolSupplies(input){
    let penPackages = Number(input[0]);
    let markerPackages = Number(input[1]);
    let litersCleaningDetergent = Number(input[2]);
    let discount = Number(input[3]);
   // let singlePenPackage = 5.80;
   // let singleMarkerPackage = 7.20;
   // let cleaningDetergent = 1.20;
    let penPrice = penPackages * 5.80;
    let markerPrice = markerPackages * 7.20;
    let detergentPrice = litersCleaningDetergent * 1.20;
    let totalWithoutDiscount = penPrice + markerPrice + detergentPrice;
    let finalPrice = totalWithoutDiscount - (totalWithoutDiscount * discount / 100);
    console.log(finalPrice);
}