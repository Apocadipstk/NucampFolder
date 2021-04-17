class Student {
    constructor(name, email, community) { 
        this.name = name;
        this.email = email;
        this.community = community;
    }
}



class Bootcamp {
    constructor(name , level, students = []) {
        this.name = name;
        this.level = level;
        this.students = students;
    }
    registerStudent(studentToRegister) {
       
        if(this.students.filter(stu => stu.email === studentToRegister.email).length === 0) {
            this.students.push(studentToRegister);
            console.log('Registering ${studentToRegister.email} to the bootcamp ${this.name}'); 
        
        }else {
            console.log('Student ${studentToRegister.name} is already regisstered to ${this.name}');
            
        }
        return this.students;
        
    }
}

const bootcamp1 = new Bootcamp('React', 3);

const Aaron = new Student('Aaron', 'aaron@gmail.com', 'MiddleEarth');
const Luke = new Student('Luke', 'luke-skywalker@yahoo.com', 'Exegol');

bootcamp1.registerStudent(aaron);

bootcamp1.registerStudent(luke);