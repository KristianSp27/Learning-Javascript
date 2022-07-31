function sumOfNumbers(input) {
  let startingNum = Number(input[0]);
  let total = 0;
  let index = 1;

  while (total < startingNum) {
    let currentNum = Number(input[index]);
    total += currentNum;
    index++;
  }
  console.log(total);
}
sumOfNumbers(["100", "10", "20", "30", "40"]);
