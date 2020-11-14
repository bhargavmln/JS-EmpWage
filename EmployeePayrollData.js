class EmployeePayrollData {
    //constructor
    constructor(...params) {
        this.id = params[0];
        this.name = params[1];
        this.salary = params[2];
        this.gender = params[3];
        this.startDate = params[4];
    }

    //getter and setter
    get name() { return this._name }
    set name(name) {
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{3,}$');
        if (nameRegex.test(name))
            this._name = name;
        else throw 'Name is Incorrect!';
    }

    get id() { return this._id }
    set id(id) {
        let idRegex = RegExp('^[1-9]{1}[0-9]*$');
        if (idRegex.test(id)) this._id = id;
        else throw 'Id is Incorrect!';
    }

    get salary() { return this._salary }
    set salary(salary) {
        let salaryRegex = RegExp('^[1-9]{1}[0-9]*$');
        if (salaryRegex.test(salary)) this._salary = salary;
        else throw 'Salary is Incorrect!';
    }

    
    get gender() { return this._gender }
    set gender(gender) {
        let genderRegex = RegExp('^[MF]{1}$');
        if (genderRegex.test(gender)) this._gender = gender;
        else throw 'Gender is Incorrect!';
    }

    get startDate() { return this._startDate }
    set startDate(startDate) {
        if (new Date().getTime() - startDate.getTime()>=0) this._startDate = startDate;
        else throw 'Date is Incorrect!';
    }
    
    //method
    toString() {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const empDate = this.startDate === undefined ? "undefined" :
            this.startDate.toLocaleDateString("en-US", options);
        return "id=" + this.id + ", name=" + this.name + ", salary=" + this.salary
            + ", gender=" + this.gender + ", startDate=" + empDate;
    }
}

try {
    let employeePayrollData = new EmployeePayrollData(1, "Mark", 60000, "M", new Date("2019-12-12"));
    console.log(employeePayrollData.toString());
} catch (e) {
    console.error(e);
}
