const Todo = require("../models/Tudo");

const todoController = {
  addTodo: async (req, res) => {
    try {
      const { todo } = req.body;
      const newTodo = new Todo({ todo });

      await newTodo.save();

      console.log("Successfully added todo!");
      res.redirect("/");
    } catch (err) {
      console.log(err);
      res.status(500).send("Internal Server Error");
    }
  },



  //delete the code
  deleteTodo: async (req, res) => {
    try {
      const { _id } = req.params;
      await Todo.deleteOne({ _id });

      console.log("Deleted Todo Successfully!");
      res.redirect("/");
    } catch (err) {
      console.log(err);
      res.status(500).send("Internal Server Error");
    }
  },

  //get the Tudo
  getAllTodos: async (req, res) => {
    try {
      const allTodo = await Todo.find();
      res.json(allTodo);
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
  
};

module.exports = todoController;
