//UC5
{
    const IS_PART_TIME = 1;
    const IS_FULL_TIME = 2;
    const PART_TIME_HOURS = 4;
    const FULL_TIME_HOURS = 8;
    const WAGE_PER_HOUR = 20;
    const TOTAL_WORKING_DAYS = 20;
    const MAX_HOURS_IN_A_MONTH = 160;

    function getWorkingHours(checkForPresenceOrAbsence){
    switch(checkForPresenceOrAbsence){
        case IS_PART_TIME : 
           return PART_TIME_HOURS;
        case IS_FULL_TIME : 
           return FULL_TIME_HOURS;
        default : 
           return 0;
       }
    }
       let totalEmpHrs = 0;
       let totalWorkingDays = 0;
       while(totalEmpHrs <= MAX_HOURS_IN_A_MONTH && totalWorkingDays < TOTAL_WORKING_DAYS){
        totalWorkingDays++;
        let empCheck = Math.floor(Math.random()*10)%3;
        totalEmpHrs += getWorkingHours(empCheck);
       }
       let empWage = totalEmpHrs * WAGE_PER_HOUR;
       console.log("Total Working Days : "+ totalWorkingDays + ", Hours Worked by Employee: "+ totalEmpHrs +", Employee Wage : "+empWage);
}