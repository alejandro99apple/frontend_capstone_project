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
import Consultation from './Components/FindDoctorSearch/Consultation';
import Notification from './Components/Notification/Notification';
import ReviewForm from './Components/ReviewForm/ReviewForm';
import ProfileForm from './Components/ProfileCard/ProfileCard';


// Function component for the main App
function App() {

  // Render the main App component
  return (
    <div className="App">
        <BrowserRouter>
          <Navbar/>
          <Routes>

            <Route path="/" element={<Landing_Page/>}/>
            <Route path="/sign-up" element={<Sign_Up/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/instant-consultation" element={<InstantConsultation />} />
            <Route path="/consultation" element={<Consultation />} />
            <Route path="/find-doctor" element={<Consultation />} />
            <Route path="/reviews" element={<ReviewForm />} />
            <Route path="/profile" element={<ProfileForm />} />

          </Routes>
          <Notification />
        </BrowserRouter>
    </div>
  );
}

// Export the App component as the default export
export default App;
