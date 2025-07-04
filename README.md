# Task Manager API

A simple Task Manager REST API built with Node.js, Express, and MongoDB (Mongoose). This project is designed to be deployed on Vercel as a serverless function.

## Features

-   Create, read, update, and delete tasks
-   MongoDB database integration
-   Express.js RESTful API
-   Error handling middleware
-   Async/await support

## Project Structure

```
app.js                # Main entry point
controllers/          # Route handler logic
  n1task.js           
  task.js             
db/
  connect.js          # MongoDB connection logic
middleware/
  async.js            # Async error wrapper
  error-handler.js    # Error handler middleware
  not-found.js        # 404 handler
models/
  tasks.js            # Mongoose Task schema
public/               # Static frontend files
routes/
  router.js           # API routes
vercel.json           # Vercel deployment config
.env                  # Environment variables (not committed)
```

## Getting Started

### Prerequisites

-   Node.js (14.x or higher recommended)
-   MongoDB database (local or Atlas)

### Installation

1.  Clone the repository:

    ```sh
    git clone https://github.com/22rahulrai/Task-Manager.git
    cd Task-Manager
    ```

2.  Install dependencies:

    ```sh
    npm install
    ```

3.  Create a `.env` file in the root directory and add your MongoDB URI:

    ```env
    mongo_uri=your_mongodb_connection_string
    ```

### Running Locally

```sh
npm start
```

The server will start on `http://localhost:3000`.

### API Endpoints

-   `GET    /api/v1/tasks`        - Get all tasks
-   `POST   /api/v1/tasks`        - Create a new task
-   `GET    /api/v1/tasks/:id`    - Get a single task
-   `PATCH  /api/v1/tasks/:id`    - Update a task
-   `DELETE /api/v1/tasks/:id`    - Delete a task

### Deployment (Vercel)

1.  Push your code to GitHub.
2.  Import your repository into Vercel.
3.  In Vercel dashboard, add your `mongo_uri` as an Environment Variable.
4.  Deploy!

## Notes

-   Do **not** commit your `.env` file. It is already in `.gitignore`.
-   For Vercel, ensure you export your Express app (not use `app.listen`).

## License

MIT
