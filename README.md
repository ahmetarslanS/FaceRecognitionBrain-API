# Face Recognition Brain - Backend

This is the backend of the **Face Recognition Brain** application, which provides user registration, login, profile management, and face recognition features. The backend interacts with the **Clarifai API** to perform face detection on user-uploaded images. Built with **Node.js**, **Express**, and **PostgreSQL**, this backend supports the entire functionality of the **Face Recognition Brain** web application.

## Demo

You can test the API endpoints by using a tool like **Postman** or **cURL** with the following available routes.


## Tech Stack
### Frontend
- **React.js**: JavaScript library for building user interfaces.
- **React-Redux**: State management library to manage the application's state.
- **CSS**: For styling the user interface.
### Backend
- **Node.js**: JavaScript runtime environment used for server-side scripting.
- **Express**: Web framework for building the API.
- **PostgreSQL**: Relational database used for storing user data and image entries.
- **Clarifai API**: For face detection functionality.
- **Knex.js**: SQL query builder for interacting with the PostgreSQL database.
- **bcrypt-nodejs**: Library for password hashing.
- **CORS**: Middleware for enabling cross-origin requests.

## Features

- **User Authentication**: Allows users to register, sign in, and view their profiles.
- **Face Detection**: Uses the Clarifai API to detect faces in images.
- **User Entries Tracking**: Tracks the number of image submissions for each user.
- **PostgreSQL Database**: Stores user information, login credentials, and image entries.
- **Secure Password Storage**: Passwords are hashed using bcrypt for security.

## Installation

### Prerequisites

- **Node.js** and **npm** should be installed on your system.
- **PostgreSQL** database should be set up and running.

### Steps to Run the Backend

1. Clone the repository:

   ```bash
   git clone https://github.com/ahmetarslanS/FaceRecognitionBrain-API
   cd facerecognitionbrain-api

2. Install the required dependencies:
   ```bash
    npm install

3. Set up your environment variables: 
    * Create a .env file in the root directory and add the following:
    ```env
    DATABASE_URL=your_postgresql_database_url
    API_CLARIFAI=your_clarifai_api_key (which is free)

4. Start the server
   ```bash
    npm start

The API will be available at http://localhost:3000.

Alternatively, for development purposes, use ```nodemon to automatically restart the server on file changes:
   ```bash
    npm run start:dev
