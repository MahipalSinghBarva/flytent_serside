// controllers/todoController.js
const Todo = require('../models/Todo');

exports.createTodo = async (req, res) => {
    try {
        const { title, description } = req.body;
        const todo = new Todo({ title, description });
        await todo.save();
        res.status(201).json(todo);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

exports.getTodos = async (req, res) => {
    try {
        const { page = 1, limit = 10 } = req.query;
        const todos = await Todo.find()
            .skip((page - 1) * limit)
            .limit(Number(limit));
        const total = await Todo.countDocuments();
        res.json({ todos, total });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

exports.getTodoById = async (req, res) => {
    try {
        const todo = await Todo.findById(req.params.id);
        if (!todo) {
            return res.status(404).json({ message: 'Todo not found' });
        }
        res.json(todo);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

exports.updateTodo = async (req, res) => {
    try {
        const { title, description } = req.body;
        const todo = await Todo.findByIdAndUpdate(
            req.params.id,
            { title, description },
            { new: true }
        );
        if (!todo) {
            return res.status(404).json({ message: 'Todo not found' });
        }
        res.json(todo);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

exports.deleteTodo = async (req, res) => {
    try {
        const todo = await Todo.findByIdAndDelete(req.params.id);
        if (!todo) {
            return res.status(404).json({ message: 'Todo not found' });
        }
        res.status(200).json({ message: 'Todo deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting todo' });
    }
};
