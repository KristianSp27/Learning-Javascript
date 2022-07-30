function tennisRanklist(input) {
    let numberTournaments = Number(input[0]);
    let startingPoints = Number(input[1]);
    
    let pointsWon = 0;
    let tournamentsWon = 0;

    for (let i = 2; i < numberTournaments + 2; i++) {
        let tournamentPartReached = input[i];
        
        if (tournamentPartReached === "W") {
            pointsWon += 2000;
            tournamentsWon += 1;
        } else if (tournamentPartReached === "F") {
            pointsWon += 1200;
        } else {
            pointsWon += 720;
        }
        finalPoints = startingPoints + pointsWon;
    
    }
    console.log(`Final points: ${finalPoints}`);
    let averagePoints = pointsWon / numberTournaments;
    console.log(`Average points: ${Math.floor(averagePoints)}`);
    let percentageWon = (tournamentsWon / numberTournaments) * 100;
    console.log(`${percentageWon.toFixed(2)}%`);
}

tennisRanklist(["5",
"1400",
"F",
"SF",
"W",
"W",
"SF"])
