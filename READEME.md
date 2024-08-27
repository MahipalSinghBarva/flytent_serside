# Todo Application

This is a simple Todo application built with Node.js, Express, and MongoDB, structured in a modular way that can be further expanded into microservices.

## Table of Contents
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Environment Variables](#environment-variables)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [Database Schema](#database-schema)
- [Further Improvements](#further-improvements)

## Project Structure


### **Explanation:**
- **`config/db.js`:** Handles the connection to MongoDB.
- **`controllers/todoController.js`:** Handles the business logic related to CRUD operations on Todos.
- **`models/Todo.js`:** Mongoose schema for defining the Todo model.
- **`routes/todoRoutes.js`:** Defines the API routes for the Todo entity.
- **`app.js`:** Initializes the express app and sets up middleware and routes.
- **`server.js`:** Starts the server and connects to the database.

## Prerequisites

- **Node.js:** v14.x or higher
- **MongoDB:** Make sure you have a MongoDB instance running locally or in the cloud (e.g., MongoDB Atlas).
- **npm:** Node package manager to install dependencies.

## Environment Variables

Create a `.env` file in the root directory with the following content:

```bash
PORT=8080
MONGODB_URL=mongodb://localhost:27017/your-database-name

API Endpoints
The following API endpoints are available:

Create a Todo

POST /api/todos
Request Body:
json
Copy code
{
  "title": "Sample Todo",
  "description": "This is a sample todo."
}
Get Todos with Pagination

GET /api/todos?page=1&limit=10
Query Parameters:
page (optional): Page number (default is 1)
limit (optional): Number of items per page (default is 10)
Get a Todo by ID

GET /api/todos/:id
Update a Todo

PATCH /api/todos/:id
Request Body:
json
Copy code
{
  "title": "Updated Todo",
  "description": "Updated description."
}
Delete a Todo

DELETE /api/todos/:id
