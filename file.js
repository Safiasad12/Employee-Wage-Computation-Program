console.log("Welcom to Employee Wage Computation Program...");

const wagePerHour = 20;  // Wage per hour in currency
const fullDayHours = 8;  // Full day work hours
const halfDayHours = 4;

let attendance = Math.floor(Math.random() * 2); // Generates 0 or 1

// if (attendance === 0) {
//     console.log("Employee is Absent");
// }
// if (attendance === 1) {
//     console.log("Employee is Present");
//     let employeeType = Math.floor(Math.random() * 2);
//     if (employeeType === 0) {
//         console.log("Part-Time Employee");
//         let dailyWage = wagePerHour * halfDayHours;
//         console.log("Employee's Daily Wage: " + dailyWage);
//     }
//     if (employeeType === 1) {
//         console.log("Full-Time Employee");
//         let dailyWage = wagePerHour * fullDayHours;
//         console.log("Employee's Daily Wage: " + dailyWage);
//     }
// }

let dailyWage;

switch (attendance) {
    case 0:
        console.log("Employee is Absent");
        break;
    case 1:
        console.log("Employee is Present");
        let employeeType = Math.floor(Math.random() * 2);
        switch (employeeType) {
            case 0:
                console.log("Part-Time Employee");
                dailyWage = wagePerHour * halfDayHours;
                console.log("Employee's Daily Wage: " + dailyWage);
                break;
            case 1:
                console.log("Full-Time Employee");
                dailyWage = wagePerHour * fullDayHours;
                console.log("Employee's Daily Wage: " + dailyWage);
                break;
        }
}















