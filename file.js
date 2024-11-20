console.log("Welcom to Employee Wage Computation Program...");

const wagePerHour = 20;  // Wage per hour in currency
const fullDayHours = 8;  // Full day work hours
const halfDayHours = 4;
const totalWorkigDaysForAMonth = 20;

let dailyWage;
let totalHours = 0;
let monthlyHoursCompleted=false;
let maxWorkHrs = 50;

for (let day = 1; day <= totalWorkigDaysForAMonth; day++) {

    console.log(`Day ${day}`);

    let attendance = Math.floor(Math.random() * 2); // Generates 0 or 1

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
                    totalHours += halfDayHours;
                    break;
                case 1:
                    console.log("Full-Time Employee");
                    dailyWage = wagePerHour * fullDayHours;
                    console.log("Employee's Daily Wage: " + dailyWage);
                    totalHours += fullDayHours;
                    break;
            }
        default:
            if (totalHours >= maxWorkHrs) {
                monthlyHoursCompleted=true;
            }
    }

    console.log("-----------------------------------");

    if(monthlyHoursCompleted){
        console.log("cannot work as you excided monthly maximum hours");
        break;
    }


}

// console.log(totalHours);














