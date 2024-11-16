import React from 'react'
import ImageSlider from '../components/ImageSlider/ImageSlider'
// import Courses from '../components/Courses/Courses'
import HomeCourses from '../components/HomeCourses/HomeCourse'
import Footer from '../components/Footer/Footer'

const HomePage = () => {
  return (
    <div>
        <ImageSlider/>
        {/* <Courses/> */}
        <HomeCourses/>
        <Footer/>
    </div>
  )
}

export default HomePage