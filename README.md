# MERN Stack Project

## Project Overview

This project is a simple MERN (MongoDB, Express, React, Node.js) application that demonstrates how to set up a full-stack web application. The backend is built using Express and MongoDB, while the frontend is built using React.

## Technologies Used

- **MongoDB**: NoSQL database for storing data.
- **Express**: Web framework for Node.js to build APIs.
- **React**: Frontend library for building user interfaces.
- **Node.js**: JavaScript runtime for server-side development.
- **Axios**: Promise-based HTTP client for making requests from the frontend.

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or cloud instance)
- npm or yarn

### Installation

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd milestone-MERN
   ```

2. **Set up the backend:**

   - Navigate to the backend directory:

     ```bash
     cd backend
     ```

   - Install dependencies:

     ```bash
     npm install
     ```

   - Create a `.env` file in the `backend` directory and add your MongoDB URI:

     ```plaintext
     MONGODB_URI=<your_mongodb_uri>
     PORT=5000
     ```

   - Start the backend server:

     ```bash
     npm start
     ```

3. **Set up the frontend:**

   - Navigate to the frontend directory:

     ```bash
     cd ../frontend
     ```

   - Install dependencies:

     ```bash
     npm install
     ```

   - Create a `.env` file in the `frontend` directory and add your API URL:

     ```plaintext
     REACT_APP_API_URL=http://localhost:5000
     ```

   - Start the frontend development server:

     ```bash
     npm start
     ```

### Usage

- Open your browser and navigate to `http://localhost:3000` to view the application.
- The API is accessible at `http://localhost:5000`.

### Sample Route

- The backend has a sample route that returns a message:

  ```javascript
  app.get('/', (req, res) => {
      res.send('API is running...');
  });
  ```

### Project Structure
