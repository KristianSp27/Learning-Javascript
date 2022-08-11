function newHouse(input) {
  let flower = input[0];
  let quantity = Number(input[1]);
  let budget = Number(input[2]);
  let flowerPrice = 0;

  switch (flower) {
    case "Roses":
      if (quantity > 80) {
        flowerPrice = quantity * 5 * 0.9;
      } else {
        flowerPrice = quantity * 5;
      }
      break;
    case "Dahlias":
      if (quantity > 90) {
        flowerPrice = quantity * 3.8 * 0.85;
      } else {
        flowerPrice = quantity * 3.8;
      }
      break;
    case "Tulips":
      if (quantity > 80) {
        flowerPrice = quantity * 2.8 * 0.9;
      } else {
        flowerPrice = quantity * 2.8;
      }
      break;
    case "Narcissus":
      if (quantity < 120) {
        flowerPrice = quantity * 3 * 1.15;
      } else {
        flowerPrice = quantity * 3;
      }
      break;
    case "Gladiolus":
      if (quantity < 80) {
        flowerPrice = quantity * 2.5 * 1.2;
      } else {
        flowerPrice = quantity * 2.5;
      }
      break;
  }
  if (budget >= flowerPrice) {
    console.log(
      `Hey, you have a great garden with ${quantity} ${flower} and ${(
        budget - flowerPrice
      ).toFixed(2)} leva left.`
    );
  } else {
    console.log(
      `Not enough money, you need ${(flowerPrice - budget).toFixed(
        2
      )} leva more.`
    );
  }
}
