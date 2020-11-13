//UC6
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const TOTAL_WORKING_DAYS = 20;
const MAX_HOURS_IN_A_MONTH = 160;
let totalEmpHrs = 0;
let totalWorkingDays = 0;
let empDailyWageArr = new Array();
let empDailyWageMap = new Map();


function getWorkingHours(checkForPresenceOrAbsence) {
    switch (checkForPresenceOrAbsence) {
        case IS_PART_TIME:
            return PART_TIME_HOURS;
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;
        default:
            return 0;
    }
}

function calcDailyWage(empHrs) {
    return empHrs * WAGE_PER_HOUR;
}

while (totalEmpHrs <= MAX_HOURS_IN_A_MONTH && totalWorkingDays < TOTAL_WORKING_DAYS) {
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    let empHrs = getWorkingHours(empCheck);
    totalEmpHrs += empHrs;
    empDailyWageArr.push(calcDailyWage(empHrs));
    empDailyWageMap.set(totalWorkingDays, calcDailyWage(empHrs));
}
let empWage = calcDailyWage(totalEmpHrs);
console.log("UC6 - Total Working Days : " + totalWorkingDays + ", Total Employee Hours : " + totalEmpHrs + ", Employee Wage : " + empWage);

//UC-7A To find total wage using for each and reduce methods 
let totalEmpWage = 0;
function sum(dailyWage) {
    totalEmpWage += dailyWage;
}
empDailyWageArr.forEach(sum);
console.log("UC7A using forEach - Total Employee Wage : " + totalEmpWage);

function totalWages(totalWage, dailyWage) {
    return totalWage + dailyWage;
}
console.log("UC7A using reduce - Total Employee wage: " + empDailyWageArr.reduce(totalWages, 0));

//UC7B - Show day along with daily wage using array map helper function
let dailyCntr = 0;
function mapDayWithWage(dailyWage) {
    dailyCntr++;
    return dailyCntr + " = " + dailyWage;
}
let mapDayWithWageArr = empDailyWageArr.map(mapDayWithWage);
console.log("UC7B - Daily Wage Map");
console.log(mapDayWithWageArr);

//UC7C - Show days when full time wage of 160 was earned
function fulltimeWage(dailyWage) {
    return dailyWage.includes("160");
}
let fullDayWageArr = mapDayWithWageArr.filter(fulltimeWage);
console.log("UC7C - Daily wage filter when full time wage earned");
console.log(fullDayWageArr);

//UC7D - Find first occurence when Full Time Wage was earned using fing function
function findFullTimeWage(dailyWage) {
    return dailyWage.includes("160");
}
console.log("UC7D - First time Full Time wage was earned on day : " +
    mapDayWithWageArr.find(findFullTimeWage));

//UC7E - Check if every element of full time wage is truley holding full time wage
function isAllFullTimeWage(dailyWage) {
    return dailyWage.includes("160");
}
console.log("UC7E - Check All Element have Full Time Wage : " +
    mapDayWithWageArr.every(isAllFullTimeWage));

//UC7F - Check if there is any part time wage
function isAnyPartTimeWage(dailyWage) {
    return dailyWage.includes("80");
}
console.log("UC 7F - Check if any part time wage: " + mapDayWithWageArr.some(isAnyPartTimeWage));


//UC7G - Find the number of days the employee worked
function totalDaysWorked(numOfDays, dailyWage) {
    if (dailyWage > 0) return numOfDays + 1;
    return numOfDays;
}
console.log("UC 7G - Number of days emp worked: " + empDailyWageArr.reduce(totalDaysWorked, 0));


