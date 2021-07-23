//Question 1

//User Information
let _age = prompt("Please enter age");
let _name = prompt("Please enter name");
let _gender = prompt("Please enter gender");

//Validate user function
function
validate(_age, _name, _gender) {
	//Verify age
	if (_age >= 18) {
		//display
		console.log("Hi " + _name + "(" + gender.substring(0,1) + "), You are above 18.");
	} 
	else if (_age < 18) {
		//display
		console.log("Hi" + _name + "(" + _gender.substring(0,1) + "), you are below 18.");
	}
};

//Question 2

//initialize
let _user = [name, surname, gender, age];
let _user = [];

//prompt user info
for (let i = 0; i < 5; i++) {
     console.log("Enter user details" + i)
     _user.push({
	name: prompt("Please enter name: "),
	surname: prompt("Please enter surname: "),
	gender: prompt("Please enter gender: "),
	age: prompt("Please enter age: ")
     });
}

//Output array
for (let i = 0; i < _user.length; i++){
	console.log(details.name + "\t|" + details.surname + "\t|" + details.gender + "\t|" + details.age)
}



//Question 3

//prompt user numbers
let _num1 = prompt("Please enter num1: ");
let _num2 = prompt("Please enter num2: ");
let _num3 = prompt("Please enter num3: ");

//calculate
let sum = (num1, num2, num3) => num1 + num2 + num3;
