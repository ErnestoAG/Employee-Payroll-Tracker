// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function() {
  // TODO: Get user input to create and return an array of employee objects
  let employeesArray = [];
  let x =0;
  let y =0;
  while (y != 1){
    employeesArray[x] = {fname: '', lname: '', salary: 0};
    employeesArray[x].fname = prompt("Enter first name.");
    if(employeesArray[x].fname === null){
      employeesArray.pop();
      y == 1;
      return;
    }
    employeesArray[x].lname = prompt("Enter last name.");
    if(employeesArray[x].lname === null){
      employeesArray.pop();
      y == 1;
      return;
    }
    employeesArray[x].salary = Number(prompt("Enter salary."));
    if(employeesArray[x].salary === null){
      employeesArray.pop();
      y == 1;
      return;
    }
    x++;
  }
}

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary
  let x = 0;
  let y = 0;
  if (employeesArray[0] !== undefined){
    for (let i=0; i < employeesArray.length; i++){
      x + employeesArray[i].salary;
      y++;
    }
  }
  if (y != 0){
    x = x / y;
    console.log(`The average employee salary between our ${y} employee(s) is: $${x}`);
  } 
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
  const rand = Math.floor(Math.random()*employeesArray.length());
  if (employeesArray[0] !== null & (employeesArray[rand].fname !== '')){
    console.log(`Congratulations to ${employeesArray[rand].fname} ${employeesArray[rand].lname}, our random drawing winner!`);
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
  for (let i = 0; i < employeesArray.length(); i++) {
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
