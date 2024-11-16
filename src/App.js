import React from 'react';
import HomeNav from './components/Navbar/HomeNav';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import ProfilePage from './pages/ProfilePage';
import HomePage from './pages/HomePage';
import CoursePage from './pages/CoursePage';
import CheckoutPage from './pages/CheckoutPage';
import Coursedetail from './pages/Coursedetail';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const App = () => {
  return (
    <div className="app-container">
      <BrowserRouter basename="/React_course">
        <HomeNav />
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/courses" element={<CoursePage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/coursedetail/:id" element={<Coursedetail />} />
          <Route path="*" element={<h1>404 - Page Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
