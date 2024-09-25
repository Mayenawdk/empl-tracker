# Employee Tracker

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Demo](#demo)
- [Questions](#questions)
- [License](#license)

## Description

As a business owner, managing your employees efficiently is crucial for success. This command-line application simplifies the process by allowing you to interact with your employee database seamlessly. Built with Node.js, Inquirer, and PostgreSQL, this tool lets you view, add, and update employees, roles, and departments with ease. It's a simple, no-fuss solution to keeping your company organized and on track.

## Installation

### Prerequisites

Make sure you have the following installed on your machine:
- Node.js
- PostgreSQL

### Steps

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/EMPL-TRACKER.git
   ```
2. **Navigate to the project directory:**
   ```bash
   cd EMPL-TRACKER
   ```
3. **Install the dependencies:**
   ```bash
   npm install
   ```
4. **Set up the PostgreSQL database:**
   - Connect to your PostgreSQL shell:
     ```bash
     psql -U your_postgres_user -d mayena
     ```
   - Run the SQL schema and seed files:
     ```sql
     \i /Users/mayena/projects/EMPL-TRACKER/db/schema.sql
     \i /Users/mayena/projects/EMPL-TRACKER/db/department.sql
     \i /Users/mayena/projects/EMPL-TRACKER/db/role.sql
     \i /Users/mayena/projects/EMPL-TRACKER/db/employee.sql
     ```

## Usage

To get started, simply run the application:

```bash
node index.js
```

You'll be presented with a series of options to view, add, and update departments, roles, and employees. Just follow the prompts, and the app will do the heavy lifting for you.

### Features

- View all departments, roles, and employees in your company.
- Add new departments, roles, and employees to your database.
- Update existing employee roles to reflect promotions or changes.

### Walkthrough Video

Check out this [walkthrough video](#) to see the app in action and get a better understanding of how it works.


## Questions

If you have any questions or run into any issues, feel free to reach out:

- GitHub: [mayenawardak](https://github.com/mayenawardak)
- Email: [mayenawardak@example.com](mailto:mayenawardak@example.com)

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.