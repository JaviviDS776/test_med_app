import logo from './logo.svg';
import './App.css';
// Import necessary modules from React library
import React, { useEffect } from 'react';
// Import components for routing from react-router-dom library
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Import custom Navbar component
import Navbar from './Components/Navbar/Navbar';
import Landing_Page from './Components/Landing_Page/Landing_Page';
import Sign_Up from './Components/Sign_Up/Sign_Up';
import Login from './Components/Login/Login';
import InstantConsultation from './Components/InstantConsultationBooking/InstantConsultation';
import Notification from './Components/Notification/Notification';
import GiveReviews from './Components/ReviewForm/ReviewForm';
import ProfileForm from './Components/ProfileCard/ProfileCard';
import ReportsLayout from './Components/ReportsLayout/ReportsLayout';
function App() {
  return (
    <div className="App">
      {/* Set up BrowserRouter for routing */}
        <BrowserRouter>
          {/* Display the Navbar component */}
          <Navbar/>
          <Notification>
            {/* Set up the Routes for different pages */}
            <Routes>
                {/* Define individual Route components for different pages */}
                <Route path="/" element={<Landing_Page />}/>
                <Route path="/signup" element={<Sign_Up />}/>
                <Route path="/login" element={<Login />}/>
                <Route path="/instant-consultation" element={<InstantConsultation />} />
                <Route path="/reviews" element={<GiveReviews />}/>
                <Route path="/profile" element={<ProfileForm />}/>
                <Route path="/reports" element={<ReportsLayout />}/>

            </Routes>
          </Notification>
        </BrowserRouter>
    </div>
  );
}

export default App;
