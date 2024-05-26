Sure, here's a comprehensive and professional README file for your Node.js application:

---

# Node.js Form Management Application

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Configuration](#configuration)
  - [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
  - [Create a Form](#create-a-form)
  - [Fill the Form Data](#fill-the-form-data)
  - [Get All Filled Data for a Form](#get-all-filled-data-for-a-form)
- [Database Schema](#database-schema)
- [Contributing](#contributing)
- [License](#license)

## Introduction

This Node.js application provides a simple and efficient way to manage forms. Users can create forms, submit data to these forms, and retrieve all submitted data based on the form title. This application is built using Express.js and Sequelize ORM, and it connects to a MySQL database.

## Features

- Create forms with a unique title.
- Submit data to forms with validation.
- Retrieve all submissions for a specific form.

## Technologies Used

- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [Sequelize](https://sequelize.org/)
- [MySQL](https://www.mysql.com/)
- [UUID](https://www.npmjs.com/package/uuid)
- [Joi](https://www.npmjs.com/package/joi)
- [dotenv](https://www.npmjs.com/package/dotenv)

## Getting Started

### Prerequisites

- Node.js (v12.x or later)
- MySQL (v5.7 or later)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Singhal97dhruv/Bigoh-nodejs-assignment
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

### Configuration

1. **Create a `.env` file** in the root directory of the project and add your configuration details:
   ```plaintext
   DB_HOST=localhost
   DB_NAME=your_database_name
   DB_USER=your_database_user
   DB_PASSWORD=your_database_password
   DB_DIALECT=mysql
   PORT=3000
   ```

2. **Set up your MySQL database** with the name you provided in the `.env` file.

### Running the Application

1. **Start the server**:
   ```bash
   node app.js
   ```

2. The server will start on the port specified in the `.env` file (default is 3000). You can access the API at `http://localhost:3000`.

## API Endpoints

### Create a Form

- **URL**: `/api/form`
- **Method**: `POST`
- **Body**: 
  ```json
  {
    "title": "string"
  }
  ```
- **Description**: This endpoint creates a new form with a unique title.

### Fill the Form Data

- **URL**: `/api/filldata`
- **Method**: `POST`
- **Body**:
  ```json
  {
    "id": "uuid",
    "name": "string",
    "email": "string",
    "title": "string"
  }
  ```
- **Description**: This endpoint allows you to fill in data for an existing form. The data is validated before being saved.

### Get All Filled Data for a Form

- **URL**: `/api/filldata`
- **Method**: `GET`
- **Query Params**: `title=string`
- **Description**: This endpoint retrieves all submitted data for a form with the specified title.

## Database Schema

The application uses the following schema for the form data:

### Form Table

| Field     | Type   | Description                          |
|-----------|--------|--------------------------------------|
| id        | UUID   | Unique identifier for the form entry |
| title     | STRING | Title of the form                    |
| name      | STRING | Name of the user submitting the form |
| email     | STRING | Email of the user                    |

## Contributing

We welcome contributions to enhance the functionalities of this application. To contribute, follow these steps:

1. Fork the repository.
2. Create a new feature branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Create a pull request
