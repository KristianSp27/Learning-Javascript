function sumOfTwoNumbers(input) {
  let num1 = Number(input[0]);
  let num2 = Number(input[1]);
  let magicNum = Number(input[2]);

  let isFound = false;
  let counter = 0;

  for (let i = num1; i <= num2; i++) {
    for (let a = num1; a <= num2; a++) {
      let result = i + a;
      counter++;
      if (result === magicNum) {
        console.log(`Combination N:${counter} (${i} + ${a} = ${magicNum})`);
        isFound = true;
        break;
      }
    }
    if (isFound) {
      break;
    }
  }
  if (!isFound) {
    console.log(`${counter} combinations - neither equals ${magicNum}`);
  }
}
