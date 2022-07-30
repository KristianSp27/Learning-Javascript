function trekkingMania(input) {
    let groupsNumber = Number(input[0]);
    let musala = 0;
    let montBlanc = 0;
    let kilimanjaro = 0;
    let k2 = 0;
    let everest = 0;
    let totalClimbers = 0;
 
    for (let i = 1; i <= groupsNumber; i++) {
        let group = Number(input[i]);
        totalClimbers += group;
        if (group > 40) {
            everest += group;
        } else if (group > 25) {
            k2 += group;
        } else if (group > 12) {
            kilimanjaro += group;
        } else if (group > 5) {
            montBlanc += group;
        } else if (group > 0) {
            musala += group;
        }
    }
 
    console.log(`${(100.0 * musala / totalClimbers).toFixed(2)}%`);
    console.log(`${(100.0 * montBlanc / totalClimbers).toFixed(2)}%`);
    console.log(`${(100.0 * kilimanjaro / totalClimbers).toFixed(2)}%`);
    console.log(`${(100.0 * k2 / totalClimbers).toFixed(2)}%`);
    console.log(`${(100.0 * everest / totalClimbers).toFixed(2)}%`);
}