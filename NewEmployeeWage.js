//UC1
{
    const IS_ABSENT = 0 ;
    let checkForPresence = Math.floor(Math.random()*10) % 2 ;
    if(checkForPresence == IS_ABSENT ) {
        console.log("Employee is Absent!");
    }else{
        console.log("Employee is Present!");
    }
}