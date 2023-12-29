const express = require("express");
const todoController = require("../controllers/todoController");

const router = express.Router();

// routes
router.post("/add/todo", todoController.addTodo);
router.get("/delete/todo/:_id", todoController.deleteTodo);
router.get("/", todoController.getAllTodos);

module.exports = router;

