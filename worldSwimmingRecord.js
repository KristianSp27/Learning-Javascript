function worldSwimmingRecord(input) {
    let recordSeconds = Number(input[0]);
    let distanceMeters = Number(input[1]);
    let timeOneMeter = Number(input[2]);

    let totalTime = distanceMeters * timeOneMeter + Math.floor(distanceMeters / 15) * 12.5;

    if (recordSeconds <= totalTime) {
        console.log(`No, he failed! He was ${(totalTime - recordSeconds).toFixed(2)} seconds slower.`);

    } else {
        console.log(`Yes, he succeeded! The new world record is ${(totalTime).toFixed(2)} seconds.`);
    }
}
