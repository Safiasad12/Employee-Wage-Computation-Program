console.log("Welcom to Employee Wage Computation Program...");

const wagePerHour = 20;  // Wage per hour in currency
const fullDayHours = 8;  // Full day work hours
const halfDayHours = 4;
const totalWorkigDaysForAMonth = 20;

for (let day = 1; day <= totalWorkigDaysForAMonth; day++) {

    console.log(`Day ${day}`);

    let attendance = Math.floor(Math.random() * 2); // Generates 0 or 1

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

    console.log("-----------------------------------");

}
















