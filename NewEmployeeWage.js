//UC1
{
    const IS_ABSENT = 0;
    let checkForPresence = Math.floor(Math.random() * 10) % 2;
    if (checkForPresence == IS_ABSENT) {
        console.log("Employee is Absent!");
    } else {
        console.log("Employee is Present!");
    }
}

//UC2 Refactored -> UC3
{
    const IS_PART_TIME = 1;
    const IS_FULL_TIME = 2;
    const PART_TIME_HOURS = 4;
    const FULL_TIME_HOURS = 8;
    const WAGE_PER_HOUR = 20;

    function getWorkingHours(checkForPresenceOrAbsence){
    switch(checkForPresenceOrAbsence){
        case IS_PART_TIME : 
           return PART_TIME_HOURS;
        case IS_FULL_TIME : 
           return FULL_TIME_HOURS
        default : 
           return 0;
       }
    }
       let checkForPresenceOrAbsence =  Math.floor(Math.random()*10) % 3 ;
       let empHrs = getWorkingHours(checkForPresenceOrAbsence);
       let empWage = empHrs * WAGE_PER_HOUR;
       console.log("Hours Worked by Employee: "+empHrs+" Employee Wage : "+empWage);
    }