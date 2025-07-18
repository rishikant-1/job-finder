import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './component/Home/Home'
import Job_listing from './component/Job_listing/Job_listing.jsx';
import LandingLayout from './component/LayOut/LandingLayout';
import Landing_page from './component/LandingPage/Landing_page.jsx'
import AppLayout from './component/LayOut/AppLayout';
import AboutPage from './component/AboutPage/AboutPage.jsx';
import ContactUs from './component/ContactUs/ContactUs.jsx';
import Login from './Auth/Login.jsx';
import Register from './Auth/Register.jsx';
import Protected from './Protected.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* public routes */}
        <Route element={<LandingLayout />}>
          <Route path="/" element={<Landing_page />}>
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
          </Route>
        </Route>

        {/* app layout with secure route */}
        <Route element={<Protected><AppLayout /></Protected>}>
          <Route path='/home' element={<Home />} />
          <Route path="/job-post" element={<Job_listing />} />
          <Route path="/job-listing" element={<Job_listing />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactUs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
