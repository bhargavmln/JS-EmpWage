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
let empDailyHrsMap = new Map();

function calcDailyWage(empHrs) {
    return empHrs * WAGE_PER_HOUR;
}

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

//UC10 Objects
{
    let empDailyHrsandWageArr = new Array();
    while (totalEmpHrs <= MAX_HOURS_IN_A_MONTH && totalWorkingDays < TOTAL_WORKING_DAYS) {
        totalWorkingDays++;
        let empCheck = Math.floor(Math.random() * 10) % 3;
        let empHrs = getWorkingHours(empCheck);
        totalEmpHrs += empHrs;
        empDailyHrsandWageArr.push(
            {
                dayNum: totalWorkingDays,
                dailyHours: empHrs,
                dailyWage: calcDailyWage(empHrs),
                toString() {
                    return '\nDay' + this.dayNum + ' => Working Hours is ' + this.dailyHours +
                        ' And Wage earned = ' + this.dailyWage
                },
            });
    }
    console.log(`UC10 Showing Daily Hours Worked and Wage Earned: ${empDailyHrsandWageArr}`);
}