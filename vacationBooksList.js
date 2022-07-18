function vacationBooksList(input){
    let currentBookPages = Number(input[0]);
    let hourlyPages = Number(input[1]);
    let numberDays = Number(input[2]);
    let totalReadingHours = currentBookPages / hourlyPages;
    let totalDailyHours = totalReadingHours / numberDays;
    console.log(totalDailyHours);
}