function oldBooks(input) {
  let bookSearched = input[0];
  let index = 1;

  while (index <= input.length) {
    let currentBook = input[index];
    if (currentBook === "No More Books") {
      console.log("The book you search is not here!");
      console.log(`You checked ${index - 1} books.`);
      break;
    }
    if (currentBook === bookSearched) {
      console.log(`You checked ${index - 1} books and found it.`);
      break;
    }
    index++;
  }
}
oldBooks([
  "The Spot",
  "Hunger Games",
  "Harry Potter",
  "Torronto",
  "Spotify",
  "No More Books",
]);
