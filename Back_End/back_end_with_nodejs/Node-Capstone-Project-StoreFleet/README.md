# Problem statement link

- https://classroom.codingninjas.com/app/classroom/me/25432/content/694566/offering/11358518?leftPanelTabValue=PROBLEM

## Capstone Project - StoreFleet for Node (Backend) Module.

**StoreFleet**

Problem Link:
https://classroom.codingninjas.com/app/classroom/me/25432/content/694566/offering/11358518

## StoreFleet - Instant Product Delivery Service

## Overview

StoreFleet is an instant product delivery service, providing fast and efficient delivery not just for groceries and food, but also for products like smartphones and other categories. The project involves implementing key features, fixing bugs, and enhancing the overall functionality to create a competitive platform similar to Blinkit, Zepto, and Swiggy.

## Features

# Welcome Email Feature

Automatically sends a welcome email with HTML content to users upon successful registration.
The email includes the company’s brand logo and a warm welcome message.

# Duplicate Key Error Handling

Ensures that each email address is unique during user registration.
Provides clear and user-friendly error messages when a duplicate email is detected.

# Password Hashing with Mongoose Middleware

Automatically hashes user passwords using bcrypt before saving them in the database.
Ensures enhanced security for user credentials.

# Forget Password and Reset Feature

Allows users to reset their passwords using a token-based approach.
The reset token is sent via email and is valid for a specified time limit.

# Securing Admin Routes

Fixes issues in the middleware to ensure that only users with 'admin' roles can access specific routes.
Enhances security by restricting access based on user roles.

# Update User Roles by Admin

Allows admin users to update the roles of other users.
Provides a specific route for this functionality.

# Product Filtering, Search, and Pagination

Implements search, filtration, and pagination functionalities to enhance user experience.
Users can search for products, filter them by category, price, and rating, and navigate through pages.

# Review Delete and Rating Update

Restricts users to delete only their reviews.
Updates product ratings accurately when a review is deleted.

# Order Placement

Enables users to place orders for products.
Ensures that the order placement process is smooth and efficient, with stock management.
Installation
Clone the repository:

## Environment Variables:

Set up your environment variables in a .env file. Include MongoDB URI, email credentials for Nodemailer, and other necessary configuration.

## Run the server:

node server.js

## Usage

# Sign Up: Register a new user to receive a welcome email.

# Admin Routes: Access and update user roles, manage products, and orders.

# Password Reset: Use the forgot password feature to reset your password.

# Product Management: Filter, search, and paginate through products.

# Order Products: Place orders for available products with stock management.

## Technologies Used

# Node.js: Server-side JavaScript runtime.

# Express.js: Web framework for Node.js.

# MongoDB: NoSQL database for storing user data, products, and orders.

# Mongoose: MongoDB object modeling tool for Node.js.

# Nodemailer: Node.js module for sending emails.

# bcrypt: Library to hash passwords for security.

# JWT (JSON Web Tokens): For authentication and securing routes.

# Conclusion

This project implements core features essential for an instant product delivery service, ensuring secure user registration, role management, product handling, and order placement. With enhanced security measures and user-friendly error handling, StoreFleet aims to be a competitive platform in the instant delivery market.
