# My Todo List App

This is a simple Todo List app built with Node.js and Express.


## Dependencies

- **Express:** ^4.18.2
  - A minimal and flexible Node.js web application framework.

- **Mongoose:** ^8.0.3
  - An Object Data Modeling (ODM) library for MongoDB and Node.js.

- **Nodemon:** ^3.0.2
  - A utility that automatically restarts the server on code changes during development.


  ## MVC Architecture

The app follows the MVC (Model-View-Controller) architecture, where:

- **Model (M):** Represents the data structure and business logic (e.g., Todo model).
- **View (V):** Displays information to the user and handles user input (handled by the Express routes).
- **Controller (C):** Manages the communication between the Model and View, handling user input and updating the Model and View accordingly (handled by the Express controllers).





## Installation

1. Install dependencies: `npm install`

## Usage

- Run the app: `node app.js`
- Open Postman and test the API endpoints.

## API Endpoints

- **POST /add/todo**: Add a new todo.
- **GET /delete/todo/:_id**: Delete a todo by ID.
- **GET /**: Get all todos.

## Port

The app is configured to run on port 3000 by default. You can access it at [http://localhost:3000/](http://localhost:3000/).




