function readText(input) {
  let count = 0;
  let size = input.length;

  while (count <= size) {
    let currentWord = input[count];
    if (currentWord === "Stop") {
      break;
    }
    count++;
    console.log(currentWord);
  }
}
readText([
  "Nakov",
  "SoftUni",
  "Sofia",
  "Bulgaria",
  "SomeText",
  "Stop",
  "AfterStop",
  "Europe",
  "HelloWorld",
]);
