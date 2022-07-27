function evenPowersOf2(input) {
    let number = Number(input[0]);
    for (let i = 0; i <= number; i+=2) {
        let res = Math.pow(2, i);
        console.log(res);
    }
}