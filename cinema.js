function cinema(input) {
  let projectionType = input[0];
  let rows = Number(input[1]);
  let columns = Number(input[2]);
  let income = 0;

  if (projectionType === "Premiere") {
    income = rows * columns * 12.0;
  } else if (projectionType === "Normal") {
    income = rows * columns * 7.5;
  } else if (projectionType === "Discount") {
    income = rows * columns * 5.0;
  }
  console.log(`${income.toFixed(2)} leva`);
}
