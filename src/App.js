import React from 'react'
import HomeNav from './components/Navbar/HomeNav'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from '../src/pages/LoginPage'
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
    <div>
      <BrowserRouter>
      <HomeNav/>
      <Routes>
           <Route path='/' element={<Navigate to="/HomePage" />}/>
           <Route path='/HomePage' element={<HomePage/>}/>
           <Route path='/LoginPage' element={<LoginPage/>}/>
           <Route path='/SignupPage' element={<SignupPage/>}/>
           <Route path='/ProfilePage' element={<ProfilePage/>}/>
           <Route path='/CoursePage' element={<CoursePage/>}/>
           <Route path='/CheckoutPage'element={<CheckoutPage/>}/>
           <Route path='/Coursedetail'element={<Coursedetail/>}/>

      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App