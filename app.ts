#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

class Student {
  static counter = 1000;
  id: number;
  name: string;
  courses: string[];
  balance: number;

  constructor(name: string) {
    this.id = Student.counter++;
    this.name = name;
    this.courses = [];
    this.balance = 1000;
  }

  enroll_course(course: string) {
    this.courses.push(course); // Fixed typo: course should not be in quotes
  }

  view_balance() {
    console.log(`Balance for ${this.name}: ${this.balance}`);
  }

  pay_fees(amount: number) {
    this.balance -= amount;
    console.log(`$${amount} Fees paid successfully for ${this.name}`);
  }

  show_status() {
    console.log(`ID: ${this.id}`);
    console.log(`Name: ${this.name}`);
    console.log(`Courses: ${this.courses}`);
    console.log(`Balance: ${this.balance}`);
  }
}

class StudentManager {
  students: Student[];

  constructor() {
    this.students = [];
  }

  add_student(name: string) {
    let student = new Student(name);
    this.students.push(student);
    console.log(`Student: ${name} added successfully. ID: ${student.id}`);
  }

  enroll_student(student_id: number, course: string) {
    let student = this.find_student(student_id);
    if (student) {
      student.enroll_course(course);
      console.log(`${student.name} enrolled in ${course} successfully`);
    } else {
      console.log(`Student not found. Please enter a correct student ID.`);
    }
  }

  view_student_balance(student_id: number) {
    let student = this.find_student(student_id);
    if (student) {
      student.view_balance();
    } else {
      console.log(`Student not found. Please enter a correct student ID.`);
    }
  }

  pay_student_fees(student_id: number, amount: number) {
    let student = this.find_student(student_id);
    if (student) {
      student.pay_fees(amount);
    } else {
      console.log(`Student not found. Please enter a correct student ID.`);
    }
  }

  show_student_status(student_id: number) {
    let student = this.find_student(student_id);
    if (student) {
      student.show_status();
    } else {
      console.log(`Student not found. Please enter a correct student ID.`);
    }
  }

  find_student(student_id: number) {
    return this.students.find((std) => std.id === student_id);
  }
}

async function main() {
  console.log(
    chalk.bold.bgGreenBright(
      `Welcome to 'Hiba M.Dawood' Student-management-system`
    )
  );
  console.log(chalk.blueBright("-".repeat(58)));

  let student_manager = new StudentManager();

  while (true) {
    let choice = await inquirer.prompt([
      {
        name: "choice",
        type: "list",
        message:"Select an option",
        choices: [
          "Add student",
          "Enroll student",
          "View student balance",
          "Pay fees",
          "Show status",
          "Exit",
        ],
      },
    ]);

    switch (choice.choice) {
      case "Add student":
        let name_input = await inquirer.prompt([
          {
            name: "name",
            type: "input",
            message: chalk.bold.italic.bgMagenta("Enter a student name"),
          },
        ]);
        student_manager.add_student(name_input.name);
        break;

      case "Enroll student":
        let course_input = await inquirer.prompt([
          {
            name: "student_id",
            type: "number",
            message: chalk.bold.italic.bgMagenta("Enter a student ID"),
          },
          {
            name: "course",
            type: "input",
            message: chalk.bold.italic.bgYellowBright("Enter a course name"),
          },
        ]);
        student_manager.enroll_student(
          course_input.student_id,
          course_input.course
        );
        break;

      case "View student balance":
        let balance_input = await inquirer.prompt([
          {
            name: "student_id",
            type: "number",
            message: chalk.bold.italic.bgYellowBright("Enter a student ID"),
          },
        ]);
        student_manager.view_student_balance(balance_input.student_id);
        break;

      case "Pay fees":
        let fees_input = await inquirer.prompt([
          {
            name: "student_id",
            type: "number",
            message: chalk.bold.italic.bgRedBright("Enter a student ID"),
          },
          {
            name: "amount",
            type: "number",
            message: chalk.bold.italic.bgRedBright(
              "Enter the amount to pay"
            ),
          },
        ]);
        student_manager.pay_student_fees(
          fees_input.student_id,
          fees_input.amount
        );
        break;

      case "Show status":
        let status_input = await inquirer.prompt([
          {
            name: "student_id",
            type: "number",
            message: "Enter a student ID",
          },
        ]);
        student_manager.show_student_status(status_input.student_id);
        break;

      case "Exit":
        console.log("Exiting...");
        process.exit();
    }
  }
}

main();
