console.log("Welcome to Employee Wage Computation Program...");

const wagePerHour = 20;  // Wage per hour in currency
const fullDayHours = 8;  // Full day work hours
const halfDayHours = 4;  // Half day work hours
const totalWorkingDaysForAMonth = 20; // Fixed typo
const maxWorkHrs = 50; // Maximum allowable hours in a month

let totalHours = 0;

for (let day = 1; day <= totalWorkingDaysForAMonth; day++) {
    console.log(`Day ${day}`);

    let attendance = Math.floor(Math.random() * 2); // Generates 0 or 1 (Absent or Present)

    if (attendance === 0) {
        console.log("Employee is Absent");
    } else {
        console.log("Employee is Present");
        let employeeType = Math.floor(Math.random() * 2); // Determines Part-Time or Full-Time
        let dailyWage = 0;

        if (employeeType === 0) {
            console.log("Part-Time Employee");
            dailyWage = wagePerHour * halfDayHours;
            totalHours += halfDayHours;
        } else {
            console.log("Full-Time Employee");
            dailyWage = wagePerHour * fullDayHours;
            totalHours += fullDayHours;
        }

        console.log("Employee's Daily Wage: " + dailyWage);
    }

    console.log("Total Hours So Far: " + totalHours);

    if (totalHours >= maxWorkHrs) {
        console.log("Cannot work as you exceeded monthly maximum hours.");
        break;
    }

    console.log("-----------------------------------");
}

console.log(`Total Working Hours: ${Math.min(totalHours, maxWorkHrs)}`);
console.log(`Total Monthly Wage: ${wagePerHour * Math.min(totalHours, maxWorkHrs)}`);
