# TypeScript Series 🚀

A structured TypeScript learning and revision repository covering the concepts required for **Frontend / React / MERN development** and internship preparation.

The goal of this repository is to understand TypeScript fundamentals through practical examples rather than only learning syntax.

## 📚 Topics Covered

### 1. Basic Data Types

* String
* Number
* Boolean
* Primitive data types
* Type inference

### 2. Arrays & Tuples

* Typed arrays
* Array methods
* Tuples
* Fixed type and order

### 3. Special Types

* `any`
* `unknown`
* `void`
* `null`
* `undefined`

### 4. Enums

* Numeric enums
* Enum values
* Using enums with variables

### 5. Functions

* Parameter types
* Return types
* Arrow functions
* Function typing

### 6. Interfaces & Type Aliases

* Interfaces
* Type aliases
* Optional properties
* Union types (`|`)
* Intersection types (`&`)
* Extending types/interfaces

### 7. Generics

* Generic functions
* Generic type parameters
* Multiple generic parameters
* Reusable type-safe functions

### 8. Classes & OOP

* Classes
* Constructors
* Objects
* `public`
* `private`
* `protected`
* Class methods

## 🧠 Example

```ts
type Student = {
    name: string;
    age: number;
    isAdmin: boolean | string;
    email?: string;
};

const student: Student = {
    name: "Arun",
    age: 20,
    isAdmin: true
};
```

### Generics

```ts
function Identity<T>(value: T): T {
    return value;
}

Identity<string>("Arun");
Identity<number>(100);
```

### Intersection Types

```ts
type Emp = Student & {
    empId: number;
};

const employee: Emp = {
    name: "Arun",
    age: 20,
    isAdmin: true,
    empId: 123
};
```

## 🎯 Learning Objective

This series is focused on building a strong TypeScript foundation for:

* React.js
* Node.js
* Express.js
* MERN Stack
* Frontend Development
* Full-Stack Development
* Technical Interviews

## 🚧 Upcoming Topics

* Literal Types
* Function Types
* Type Guards
* Type Narrowing
* `keyof`
* `typeof`
* Utility Types
* `Partial`
* `Pick`
* `Omit`
* `Record`
* Advanced Generics
* `Promise<T>`
* API Response Typing
* React + TypeScript
* TypeScript with Node.js

## 🛠️ Running the Project

Compile TypeScript:

```bash
tsc
```

Run the compiled JavaScript:

```bash
node dist/index.js
```

## 📁 Basic Structure

```text
Typescript_Series/
├── src/
│   └── index.ts
├── dist/
│   └── index.js
├── tsconfig.json
└── README.md
```

## 👨‍💻 Author

**Arun Kumar Ghorse**

B.Tech AI & Data Science Student
Frontend Developer Intern | React.js | JavaScript | TypeScript | C++

---

⭐ This repository is part of my continuous learning and revision journey in TypeScript and modern web development.
