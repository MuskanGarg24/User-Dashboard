# Dynamic User Profile Page
This project aims to create a dynamic user profile page with two main sections: Profile and Connections. The frontend is built using Next.js and styled with Tailwind CSS, while the backend is developed using Node.js and MongoDB.

## Table of Contents
- [Objective](#objective)
- [Technologies Used](#technologies-used)
- [Features](#features)
- [Frontend Development](#frontend-development)
  - Login and Signup Process
  - Profile Page
  - Connections Page
- [Backend Development](#backend-development)
- [Deployment](#deployment)
- [Usage](#usage)
- [Setup Instructions](#setup-instructions)
- [Deployment Instructions](#deployment-instructions)
- [Contributors](#contributors)

## Objective
The goal of this assignment is to create a web application that allows users to create and manage their dynamic user profiles. Users can log in, update their profile information, manage their connections, and view their friends.

## Technologies Used
- Frontend: Next.js, Tailwind CSS
- Backend: Node.js, MongoDB
- Deployment: Vercel (frontend), Netlify (backend)

## Features 
- User authentication (login and signup)
- Editable profile information
- Display of user connections with reordering upon connection removal

## Frontend Development

### Login and Signup Process
The application features a secure login and signup process. Users can sign up with basic user details or provide additional professional information such as experience, education, and skills. Passwords are securely stored using encryption.

### Profile Page
The Profile page displays user information, including the name, profile picture, and bio. Users can also view and edit their professional details using an "Edit" button that opens a input field for easy modifications.

### Connections Page
The Connections page presents a list of user connections or friends. Users can add and remove connections, and the list automatically reorders to display connected users at the top.

## Backend Development

### API Endpoints
The backend provides API endpoints for:
- User authentication (login and session management)
- Fetching and updating user profiles
- Managing user connections and professional details

### MongoDB Integration
MongoDB is used for data storage and retrieval. User profiles, connections, and professional details are stored and managed within the MongoDB database.


## Deployment 
The project is deployed using the following platforms:
- Frontend: [Vercel](https://vercel.com/)
- Backend: [Render](https://render.com/)
#### Project Deployed Link: [Live Site](https://oruphones-assignment-chi.vercel.app/) 

## Usage
Use the provided login and signup forms to create an account or log in.
Explore the Profile and Connections pages, update your profile information, manage connections, and observe the reordering of connections.
- **Signup Page:** `/register`
- **Login Page:** `/`
- **User Profile Page:** `/user/profile`
- **User Connections Page:** `/user/connections`

## Setup Instructions
Clone this repository
```bash
  git clone https://github.com/MuskanGarg24/oruphones-assignment
```
Navigate to the project directory
```bash
cd oruphones-assignment
```
Install frontend dependencies
```bash
cd client && npm install
```
Install backend dependencies
```bash
cd api && npm install
```
Configure environment variables for MongoDB, other settings in backend's .env file and localhost for running backend server URL (usually http://localhost:5000).

Start the frontend development server
```bash
npm run dev
```
Start the backend development server
```bash
nodemon app.js
```

## Deployment Instructions

### Vercel Deployment
- Create an account on vercel
- Import your GitHub repository
- Choose your branch (usually main) and directory (client)
- Deploy

### Render Deployment
- Create an account on render
- Choose new Web Service
- Import your GiHub repository
- Choose your branch (usually main) and directory (api)
- Add environment variables
- Deploy

## Contributors 
[Muskan Garg](https://github.com/MuskanGarg24)

