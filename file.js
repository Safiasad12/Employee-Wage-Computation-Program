console.log("Welcom to Employee Wage Computation Program...");

const wagePerHour = 20;  // Wage per hour in currency
const fullDayHours = 8;  // Full day work hours

let attendance = Math.floor(Math.random() * 2); // Generates 0 or 1

if (attendance === 0) {
    console.log("Employee is Absent");
} else {
    console.log("Employee is Present");
    let dailyWage = wagePerHour * fullDayHours;
    console.log("Employee's Daily Wage: " + dailyWage);
}

