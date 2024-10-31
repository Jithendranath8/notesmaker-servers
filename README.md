# NotesMaker

## Overview

NotesMaker is a note management application with user authentication, note organization, and workspace creation features. This application uses Node.js, Express, Prisma, and a PostgreSQL database to provide a structured environment for creating and managing notes, folders, and workspaces.

---

## Table of Contents

- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Setup](#setup)
- [Environment Variables](#environment-variables)
- [API Endpoints](#api-endpoints)
  - [Authentication](#authentication)
  - [User](#user)
  - [Workspace](#workspace)
  - [Folder](#folder)
  - [Note](#note)
- [License](#license)

---

## Project Structure

```
.
├── node_modules
├── prisma
│   └── schema.prisma                # Prisma schema file
├── src
│   ├── config
│   │   └── db.js                    # Database connection setup
│   ├── controllers                  # Route controllers for each entity
│   │   ├── authController.js
│   │   ├── folderController.js
│   │   ├── noteController.js
│   │   ├── userController.js
│   │   └── workspaceController.js
│   ├── middlewares
│   │   └── authMiddleware.js        # JWT authentication middleware
│   ├── models
│   │   └── prismaClient.js          # Prisma client instance
│   ├── routes                       # API route handlers
│   │   ├── authRoutes.js
│   │   ├── folderRoutes.js
│   │   ├── noteRoutes.js
│   │   ├── userRoutes.js
│   │   └── workspaceRoutes.js
│   ├── services                     # Business logic for each entity
│   │   ├── authService.js
│   │   ├── folderService.js
│   │   ├── noteService.js
│   │   ├── userService.js
│   │   └── workspaceService.js
│   └── app.js                       # Entry point for the app
└── package.json
```

---

## Prerequisites

- Node.js v14 or higher
- PostgreSQL database
- Prisma ORM

---

## Setup

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd NotesMaker
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up the database:

   ```bash
   npx prisma migrate dev --name init
   ```

4. Run the app:

   ```bash
   npm start
   ```

---

## Environment Variables

Create a `.env` file in the root directory and add the following variables:

```plaintext
DATABASE_URL=your_database_url
JWT_SECRET=your_jwt_secret
```

---

## API Endpoints

### Authentication

#### Register a User

- **URL**: `/api/auth/register`
- **Method**: `POST`
- **Request Body**:
  ```json
  {
    "username": "string",
    "email": "string",
    "password": "string"
  }
  ```
- **Response**:
  - **Success** (201):
    ```json
    {
      "user_id": "number",
      "username": "string",
      "email": "string"
    }
    ```
  - **Failure** (400):
    ```json
    { "error": "Error message" }
    ```

#### Login

- **URL**: `/api/auth/login`
- **Method**: `POST`
- **Request Body**:
  ```json
  {
    "email": "string",
    "password": "string"
  }
  ```
- **Response**:
  - **Success** (200):
    ```json
    { "token": "string" }
    ```
  - **Failure** (401):
    ```json
    { "error": "Invalid credentials" }
    ```

### User

#### Get User Profile

- **URL**: `/api/users/:id`
- **Method**: `GET`
- **Headers**: `{ "Authorization": "Bearer <token>" }`
- **Response**:
  - **Success** (200):
    ```json
    {
      "user_id": "number",
      "username": "string",
      "email": "string"
    }
    ```
  - **Failure** (404):
    ```json
    { "error": "User not found" }
    ```

#### Update User Profile

- **URL**: `/api/users/:id`
- **Method**: `PUT`
- **Headers**: `{ "Authorization": "Bearer <token>" }`
- **Request Body**:
  ```json
  {
    "username": "string",
    "email": "string"
  }
  ```
- **Response**:
  - **Success** (200):
    ```json
    {
      "user_id": "number",
      "username": "string",
      "email": "string"
    }
    ```
  - **Failure** (400 or 404):
    ```json
    { "error": "Error message" }
    ```

### Workspace

#### Create Workspace

- **URL**: `/api/workspaces`
- **Method**: `POST`
- **Headers**: `{ "Authorization": "Bearer <token>" }`
- **Request Body**:
  ```json
  {
    "title": "string",
    "user_id": "number"
  }
  ```
- **Response**:
  - **Success** (201):
    ```json
    {
      "workspace_id": "number",
      "title": "string",
      "user_id": "number"
    }
    ```
  - **Failure** (400):
    ```json
    { "error": "Error message" }
    ```

### Folder

#### Create Folder

- **URL**: `/api/folders`
- **Method**: `POST`
- **Headers**: `{ "Authorization": "Bearer <token>" }`
- **Request Body**:
  ```json
  {
    "name": "string",
    "user_id": "number"
  }
  ```
- **Response**:
  - **Success** (201):
    ```json
    {
      "folder_id": "number",
      "name": "string",
      "user_id": "number"
    }
    ```
  - **Failure** (400):
    ```json
    { "error": "Error message" }
    ```

#### Get Folder Details

- **URL**: `/api/folders/:id`
- **Method**: `GET`
- **Headers**: `{ "Authorization": "Bearer <token>" }`
- **Response**:
  - **Success** (200):
    ```json
    {
      "folder_id": "number",
      "name": "string"
    }
    ```
  - **Failure** (404):
    ```json
    { "error": "Folder not found" }
    ```

#### Delete Folder

- **URL**: `/api/folders/:id`
- **Method**: `DELETE`
- **Headers**: `{ "Authorization": "Bearer <token>" }`
- **Response**:
  - **Success** (204):
    No content.
  - **Failure** (404):
    ```json
    { "error": "Folder not found" }
    ```

### Note

#### Create Note

- **URL**: `/api/notes`
- **Method**: `POST`
- **Headers**: `{ "Authorization": "Bearer <token>" }`
- **Request Body**:
  ```json
  {
    "title": "string",
    "content": "string",
    "workspace_id": "number"
  }
  ```
- **Response**:
  - **Success** (201):
    ```json
    {
      "note_id": "number",
      "title": "string",
      "content": "string"
    }
    ```
  - **Failure** (400):
    ```json
    { "error": "Error message" }
    ```

#### Get Note Details

- **URL**: `/api/notes/:id`
- **Method**: `GET`
- **Headers**: `{ "Authorization": "Bearer <token>" }`
- **Response**:
  - **Success** (200):
    ```json
    {
      "note_id": "number",
      "title": "string",
      "content": "string"
    }
    ```
  - **Failure** (404):
    ```json
    { "error": "Note not found" }
    ```

---

## License

This project is licensed under the MIT License.

---
