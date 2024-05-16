// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function() {
  // These variables hold the data necessary to populate the array
  let employeesArray = [];
  let y = 0;
  let firstName = '';
  let lastName = '';
  let salary = 0;
  // This while loop populates the array according to user input
  while (y != 1){
    firstName = prompt("Enter first name.");
    if(firstName === null){
      return employeesArray;
    }
    lastName = prompt("Enter last name.");
    if(lastName === null){
      return employeesArray;
    }
    salary = prompt("Enter salary.");
    if(salary === null){
      return employeesArray;
    }
    else{
      salary = Number(salary);
    }
    employeesArray.push({firstName, lastName, salary});
  }
}

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // The variables hold the array coming from user input and other values necessary for calculations
  let e = [];
  e = employeesArray;
  let x = 0;
  let y = 0;
  // The for loop changes the values of the variables according to the data provided, afterwards, average is calculated and displayed on the console
  for (let i=0; i < e.length; i++){
    x += e[i].salary;
    y++;
  }
  x = x / y;
  console.log(`The average employee salary between our ${y} employee(s) is: ${x.toLocaleString("en-US",{style:"currency", currency:"USD"})}`); 
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // A combination of methods for random number generation is used in the creation of a variable
  let e = [];
  e = employeesArray;
  const rand = Math.floor(Math.random()*e.length);
  // The element of the array with the random variable as index is displayed on the console
  if (e[0] !== undefined ){
    console.log(`Congratulations to ${e[rand].firstName} ${e[rand].lastName}, our random drawing winner!`);
  }
} 

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
