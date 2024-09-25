const {Client} = require('pg');
const seedDatabase = (client) => {
    client.query('DELETE FROM employee');
    client.query('DELETE FROM role');
    client.query('DELETE FROM department');
    
    let inputs = ['Accounting', 'IT', 'HR', 'Sales', 'Marketing' ];
    inputs.forEach((i) => {
        client.query('INSERT INTO department (name) VALUES ($1)', [i]);
    });
    
    inputs = [1, 2, 3, 4, 5];
    let roles = ['Manager', 'Clerk', 'Cashier', 'Associate'];
    inputs.forEach((i) => {
        roles.forEach((r) => {
            client.query('INSERT INTO role (title, salary, department_id) VALUES ($1, $2, $3)', [r, 5000, i]);
        });
    });

    let employee = [
        {
            firstname: "Mayena",
            lastname: "Wardak",
            role: 1
        },
        {
            firstname: "Mark",
            lastname: "Smith",
            role: 5,
            manager: 1
        },
        {
            firstname: "Sandy",
            lastname: "Gordon",
            role: 10
        },
        {
            firstname: "Sally",
            lastname: "Liz",
            role: 15
        }
    ]

    employee.forEach((e) => {
        client.query('INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ($1, $2, $3, $4)', [e.firstname, e.lastname, e.role, e.manager]);
    });

}

module.exports = seedDatabase;