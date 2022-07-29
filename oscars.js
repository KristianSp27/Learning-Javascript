function oscars(input) {
    let actorName = input[0];
    let academyPoints = Number(input[1]);
    let numberjudgess = Number(input[2]);

    let totalPoints = academyPoints;

    for (let i = 3; i < input.length; i += 2) {
        let judgeName = input[i];
        let judgePoints = Number(input[i + 1]);

        let totalJudgePoints = judgeName.length * judgePoints / 2;
        totalPoints += totalJudgePoints;  

        if (totalPoints > 1250.5) {
            console.log(`Congratulations, ${actorName} got a nominee for leading role with ${totalPoints.toFixed(1)}!`);
            return;
    }
}  
let pointsNeeded = 1250.5 - totalPoints;
console.log(`Sorry, ${actorName} you need ${pointsNeeded.toFixed(1)} more!`);
}
