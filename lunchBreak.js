function lunchBreak(input) {
    let tvSeries = input[0];
    let seriesDuration = Number(input[1]);
    let restDuration = Number(input[2]);
    let lunchDuration = restDuration * 0.125;
    let restTime = restDuration * 0.25;

    let timeLeft = restDuration - restTime - lunchDuration;

    if (timeLeft >= seriesDuration) {
        console.log(`You have enough time to watch ${tvSeries} and left with ${Math.ceil(timeLeft - seriesDuration)} minutes free time.`);
    } else {
        console.log(`You don't have enough time to watch ${tvSeries}, you need ${Math.ceil(seriesDuration - timeLeft)} more minutes.`);
    }

}