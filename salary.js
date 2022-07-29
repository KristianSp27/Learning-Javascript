function salary(input) {
    let num = Number(input[0]);
    let salary = Number(input[1]);

    for (let i = 2; i < num + 2; i++) {
        let tabName = input[i];
        if (tabName === "Facebook") {
            salary -= 150;
        } else if (tabName === "Instagram") {
            salary -= 100;
        } else if (tabName === "Reddit") {
            salary -= 50;
        }
    }

    if (salary <= 0) {
        console.log("You have lost your salary.");
    } else {
        console.log(salary);
    }
}