# Face Recognition Brain - Backend

This is the backend of the **Face Recognition Brain** application, which provides user registration, login, profile management, and face recognition features. The backend interacts with the **Clarifai API** to perform face detection on user-uploaded images. Built with **Node.js**, **Express**, and **PostgreSQL**, this backend supports the entire functionality of the **Face Recognition Brain** web application.

## Demo

You can view the live demo [here](https://smart-brain-frontend-29200474981c.herokuapp.com/), or you can test the API endpoints by using a tool like **Postman** or **cURL** with the following available routes.


## Tech Stack
### Frontend
- **React.js**: JavaScript library for building user interfaces.
- **React Hooks**: For managing component state and lifecycle methods.
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

- Alternatively, for development purposes, use `nodemon` to automatically restart the server on file changes:
    ```bash
    npm run start:dev

- The API will be available at http://localhost:3000.

## API Endpoints

### `POST /signin`

* **Description:** Sign in with email and password to get user information.
* **Request Body:** 

    ```json
    {
        "email": "user@example.com",
        "password": "your_password"
    }

* **Response:** 
    ```json
    {
        "id": 1,
        "name": "John Doe",
        "email": "user@example.com",
        "entries": 0,
        "joined": "2023-10-10T12:00:00.000Z"
    }

### `POST /register`

* **Description:** Register a new user with email, name, and password.
* **Request Body:**

    ```json
    {
        "email": "user@example.com",
        "name": "John Doe",
        "password": "your_password"
    }

* **Response:** 
    ```json
    {
        "id": 1,
        "name": "John Doe",
        "email": "user@example.com",
        "entries": 0,
        "joined": "2023-10-10T12:00:00.000Z"
    }

### `GET /profile/:id`

* **Description:** Retrieve a user's profile by ID.
* **Request Parameters:** `id` (User ID)

* **Response:** 
    ```json
    {
        "id": 1,
        "name": "John Doe",
        "email": "user@example.com",
        "entries": 0,
        "joined": "2023-10-10T12:00:00.000Z"
    }

### `PUT /image`

* **Description:** Increment the user's entries count when they submit an image.
* **Request Body:**
    ```json
    {
        "id": 1
    }

* **Response:** 
    ```json
    {
        "entries": 1
    }

### `POST /imageurl`

* **Description:** Detect faces in an image using the Clarifai API.
* **Request Body:**
    ```json
    {
        "input": "image_url"
    }

* **Response:** A JSON object with the detected face data.

## Database Schema

The database contains two main tables:

* **login:** Stores email and hashed password.
* **users:** Stores user details (name, email, entries, join date).

## Deployment

To deploy this backend:

        1. Set up environment variables (DATABASE_URL and API_CLARIFAI).
        2. Push the code to your cloud server (e.g., Heroku, AWS).
        3. Ensure PostgreSQL is properly configured and accessible.

## Contributing

Feel free to fork the repository and submit pull requests for improvements, bug fixes, or new features.

## License

This project is licensed under the MIT License.
