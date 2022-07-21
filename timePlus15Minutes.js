function timePlus15Minutes(input) {
    let hours = Number(input[0]);
    let minutes = Number(input[1]);

    let totalmin = hours * 60 + minutes + 15;
    let hour = Math.floor(totalmin / 60) % 24;
    let min = totalmin % 60;

    if (min > 9) {
        console.log(`${hour}:${min}`)
    } else {
        console.log(`${hour}:0${min}`)
    }
}