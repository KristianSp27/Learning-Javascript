function sequence2k1(input) {
  let num = Number(input[0]);
  let startingNum = 1;

  while (startingNum <= num) {
    console.log(startingNum);
    startingNum = startingNum * 2 + 1;
  }
}
