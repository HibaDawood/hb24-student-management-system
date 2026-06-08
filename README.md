# 🏫 CLI Student Management System
[![npm version](https://img.shields.io/npm/v/hb24-student-management-system.svg?style=flat-square)](https://www.npmjs.com/package/hb24-student-management-system)

A robust, console-based Student Management System built with TypeScript and Node.js. The application utilizes core Object-Oriented Programming (OOP) principles to manage student enrollments, fee structures, and academic statuses in real-time.

---
<p align="left"> <img align="right" alt="coding" width="350" src="https://aidco.com.pk/wp-content/uploads/2022/09/smart-attandance.gif" alt="hibadawood" /> </p>

## ✨ Features

* **Automated ID Generation:** Uses a `static` counter to allocate a unique, sequential ID (starting from 1000) to every new student automatically.
* **Course Enrollment:** Dynamically adds multiple courses to a specific student's profile via their unique ID.
* **Financial Management:** Tracks student balances, allowing interactive fee payments and balance checks.
* **Status Reporting:** Provides a comprehensive overview of a student's profile, including their ID, Name, Enrolled Courses, and outstanding Balance.
* **Interactive Switch Menu:** Features a seamless command-line interface driven by `inquirer` and colorized with `chalk`.

---

## 🛠️ Tech Stack

* **Language:** TypeScript / Node.js
* **Dependencies:** `inquirer` (Interactive CLI menus), `chalk` (Terminal text coloring)

---

### 🚀 How to Run & Use

Run this application directly in your terminal using `npx` (No installation required):

```bash
npx hb24-student-management-system
