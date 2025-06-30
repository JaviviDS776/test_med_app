# Medical Appointment Booking Platform

A React-based platform designed to streamline medical appointment bookings for StayHealthy Inc., offering features like doctor search, profile management, and consultation feedback, while integrating with a Node.js backend for efficient data handling and deployment on IBM Cloud for scalability.

---

## Table of Contents

- [About the Project](#about-the-project)
  - [Key Features](#key-features)
  - [Solution Architecture](#solution-architecture)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Installation](#installation)
- [Usage](#usage)
- [Development and Deployment](#development-and-deployment)

---

## About the Project

- Book, modify, and cancel medical appointments online.

### Key Features

- **Appointment Management**:
  - Book, modify, and cancel appointments.
  - Receive appointment reminders and notifications.  
- **Doctor Search and Filtering**:
  - Search for doctors by name, specialty, or location.  
  - View ratings and reviews for informed decision-making.  
- **Consultation Feedback**:
  - Rate and review doctors post-appointment.  
  - Aggregate feedback visible to all users.  
- **User Profile Management**:
  - Register and manage user profiles with medical details.  
  - Update personal information at any time.  

### Solution Architecture

- **Frontend**:
  - User-facing interface for booking and managing appointments.  
  - Built with React for dynamic user experiences.  

---

## Tech Stack

- **Frontend**: React, CSS, JSX, HTML

---

## Getting Started

### Installation

1. Install virtual environment:
   ```bash
   cd /test_med_app
   npm install
   cd /test_med_app/server
   npm install
   ```

---

## Usage

   ```bash
   cd /test_med_app/server
   node index
   cd /test_med_app
   npm start
   ```

---

## Development and Deployment

### Deployment

- IBM Cloud Container Registry
