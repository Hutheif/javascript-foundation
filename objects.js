 //define an object with properties and values
 
 const students1 = {
    firstName: "John",
    lastName: "Doe",        
    age: 20,
    course: "Computer Science",
    balance: 5000,
    attendance: 90,
    Progress: "Good",
    learn: function(){
        return this.firstName + " I am learning JavaScript";
    },

 };
 const students2 = {
    firstName: "hutheifa",
    lastName: "ibrahim",
    learn: function(){
        return this.firstName + " I am learning JavaScript";
    }
    age: 28,
    course: "software engineering",
    balance: 50,
    attendance: 70,
    Progress: "average",

 };

 // Accessing values dot natation
 console.log(students1.firstName);
 console.log(students2.firstName);
 //get the first name of the first student2 instructor
 // get the age of student2 spouse

 const selectoption = 'firstname';
 console.log(students1[selectoption]); // Accessing using bracket 
 
 console.log(students2.instructor.firstName);
 
 console.log(students2.spouse.age);

//get the third hobby of the first student2 spouse
console.log(students1.spouse.hobbies[2]);

students2.children = [
    {
        name: "Ali",
        lastName: "Ibrahim",
        age: 5
    },
    {
        name: "Sara",
        lastName: "Jackson",
        age: 3
    }
];

//get the name of the first name of student2 second born

console.log(students2.children[1].name);
