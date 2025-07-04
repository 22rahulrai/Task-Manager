# Task-Manager
Daily Life App

## Description

A modern Task Manager app built with Node.js, Express, and MongoDB. This application helps users manage their daily life by organizing and tracking tasks efficiently.

## Features

*   **Task Management:** Create, read, update, and delete tasks.
*   **MongoDB Integration:** Utilizes MongoDB for persistent data storage.
*   **Express.js Framework:** Built on the robust Express.js framework for handling routing and middleware.
*   **Environment Variables:** Uses `dotenv` to manage environment-specific configurations.

## Technologies Used

*   Node.js
*   Express.js
*   MongoDB
*   Mongoose
*   dotenv

## Installation

1.  **Clone the repository:**

    ```bash
    git clone <repository_url>
    cd Task-Manager
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Configure environment variables:**

    *   Create a `.env` file in the root directory.
    *   Add your MongoDB connection string and any other necessary environment variables.  For example:

        ```
        MONGODB_URI=mongodb://localhost:27017/task-manager
        ```

## Usage

1.  **Start the server:**

    ```bash
    npm start
    ```

2.  **Access the application:**

    Open your web browser or use a tool like Postman to interact with the API endpoints.  Refer to the API documentation (if available) or the source code for specific endpoints and request formats.

## License

MIT License
