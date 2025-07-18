import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { UserContextProvider } from './context/userContext.jsx'
import Home from './component/HomePage/Home.jsx'
import Footer from './component/Footer.jsx'
import JobMainPage from './component/Jobs/JobMainPage.jsx'
import AboutPage from './component/AboutUs/AboutPage.jsx'
import ContactUs from './component/ContactUs/ContactUs.jsx'
import Login from './component/Auth/Login.jsx'
import Register from './component/Auth/Register.jsx'
import JobDetail from './component/JobDetails/JobDetail.jsx'
import ProtectedRoute from './Protected.jsx'
import ApplyForm from './component/JobDetails/ApplyForm/ApplyForm.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/jobs" element={<JobMainPage />} />
          <Route path='apply-form'
              element={<ProtectedRoute children={<ApplyForm />} />
              } />
          <Route path='job-details/:id'
            element={
              <ProtectedRoute children={<JobDetail />} />
            } />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </UserContextProvider>
  </StrictMode>
)
