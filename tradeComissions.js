function tradeComissions(input) {
    let town = input[0];
    let salesAmount = Number(input[1]);
    let comission = 0;

    if (town === "Sofia") {
        if (salesAmount >= 0 && salesAmount <= 500) {
            comission = salesAmount * 0.05;
            console.log(comission.toFixed(2));
        } else if (salesAmount > 500 && salesAmount <= 1000) {
            comission = salesAmount * 0.07;
            console.log(comission.toFixed(2));
        } else if (salesAmount > 1000 && salesAmount <= 10000){
            comission = salesAmount * 0.08;
            console.log(comission.toFixed(2));
        } else if (salesAmount > 10000) {
            comission = salesAmount * 0.12;
            console.log(comission.toFixed(2));
        }
    } else if (town === "Varna") {
        if (salesAmount >= 0 && salesAmount <= 500) {
            comission = salesAmount * 0.045;
            console.log(comission.toFixed(2));
        } else if (salesAmount > 500 && salesAmount <= 1000) {
            comission = salesAmount * 0.075;
            console.log(comission.toFixed(2));
        } else if (salesAmount > 1000 && salesAmount <= 10000){
            comission = salesAmount * 0.1;
            console.log(comission.toFixed(2));
        } else if (salesAmount > 10000) {
            comission = salesAmount * 0.13;
            console.log(comission.toFixed(2));
        }
    } else if (town === "Plovdiv") {
        if (salesAmount >= 0 && salesAmount <= 500) {
            comission = salesAmount * 0.055;
            console.log(comission.toFixed(2));
        } else if (salesAmount > 500 && salesAmount <= 1000) {
            comission = salesAmount * 0.08;
            console.log(comission.toFixed(2));
        } else if (salesAmount > 1000 && salesAmount <= 10000){
            comission = salesAmount * 0.12;
            console.log(comission.toFixed(2));
        } else if (salesAmount > 10000) {
            comission = salesAmount * 0.145;
            console.log(comission.toFixed(2));
        } else {
            console.log("error");
        }
    } else {
        console.log("error");
    }
}