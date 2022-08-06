function graduation(input) {
  let index = 0;
  let name = input[index];
  index++;
  let negativeGradecount = 0;
  let sum = 0;
  let i = 1;
  let isExcluded = false;

  while (i <= 12) {
    let currentGrade = Number(input[index]);
    index++;
    if (currentGrade < 4.0) {
      negativeGradecount++;
      if (negativeGradecount == 2) {
        isExcluded = true;
        break;
      }
      continue;
    }
    sum += currentGrade;
    i++;
  }
  let averageGrade = sum / 12;
  if (isExcluded) {
    console.log(`${name} has been excluded at ${i} grade`);
  } else {
    console.log(`${name} graduated. Average grade: ${averageGrade.toFixed(2)}`);
  }
}
