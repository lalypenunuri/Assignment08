// CREATE AN ARRAY OF EMPLOYEES
let employees = [
    [12345678, 'Zak Ruvalcaba', 1234, 'zak@vectacorp.com', 'Executive'],
    [23456789, 'Jessica Smith', 2345, 'jessica@vectacorp.com', 'Marketing'],
    [34567890, 'Mark Martin', 3456, 'mark@vectacorp.com', 'Engineering'],
    [45678901, 'Fred Jones', 4567, 'fred@vectacorp.com', 'Sales'],
    [56789012, 'Sally Brown', 5678, 'sally@vectacorp.com', 'QA']
]

// CHECK TO SEE IF STORAGE OBJECT EXISTS WHEN THE PAGE LOADS
// IF DOES, RETURN STORAGE OBJECT INTO ARRAY INSTEAD OF POPULATED ARRAY
if (localStorage.getItem('employees')) {
    employees = JSON.parse(localStorage.getItem('employees'))
}

// GET DOM ELEMENTS
let form = document.getElementById('addForm')
let empTable = document.getElementById('empTable')
let empCount = document.getElementById('empCount')

// BUILD THE EMPLOYEES TABLE WHEN THE PAGE LOADS
buildGrid()

// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
  e.preventDefault()
    // GET THE VALUES FROM THE TEXT BOXES
let id = parseInt(document.getElementById('id').value)
    let name = document.getElementById('name').value
    let extension = parseInt(document.getElementById('extension').value)
    let email = document.getElementById('email').value
    let department = document.getElementById('department').value
    // ADD THE NEW EMPLOYEE TO A NEW ARRAY OBJECT
let newEmployee = [id, name, extension, email, department]
    // PUSH THE NEW ARRAY TO THE *EXISTING* EMPLOYEES ARRAY
employees.push(newEmployee)
    // BUILD THE GRID
  buildGrid()
    // RESET THE FORM
 form.reset()
    // SET FOCUS BACK TO THE ID TEXT BOX
document.getElementById('id').focus()
});

// DELETE EMPLOYEE
empTable.addEventListener('click', (e) => {
    // CONFIRM THE DELETE
if (confirm('Are you sure you want to delete this employee?')) {
       let rowIndex = e.target.parentNode.parentNode.rowIndex
        // REMOVE EMPLOYEE FROM ARRAY
 employees.splice(rowIndex - 1, 1)
        // BUILD THE GRID
 buildGrid()
}
});

// BUILD THE EMPLOYEES GRID
function buildGrid() {
    // REMOVE THE EXISTING SET OF ROWS BY REMOVING THE ENTIRE TBODY SECTION
empTable.removeChild(empTable.lastElementChild)
    // REBUILD THE TBODY FROM SCRATCH
let newTBody = document.createElement('tbody')
    // LOOP THROUGH THE ARRAY OF EMPLOYEES
    // REBUILDING THE ROW STRUCTURE
for (let employee of employees) {
        let row = document.createElement('tr')
        row.innerHTML = `
            <td>${employee[0]}</td>
            <td>${employee[1]}</td>
            <td>${employee[2]}</td>
            <td>${employee[3]}</td>
            <td>${employee[4]}</td>
            <td><button class="btn btn-danger btn-sm float-end">X</button></td>`
        newTBody.appendChild(row)
    }
    // BIND THE TBODY TO THE EMPLOYEE TABLE
empTable.appendChild(newTBody)
    // UPDATE EMPLOYEE COUNT
empCount.value = `(${employees.length})`
    // STORE THE ARRAY IN STORAGE
localStorage.setItem('employees', JSON.stringify(employees))
};