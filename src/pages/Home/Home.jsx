import { Helmet } from 'react-helmet-async'
import Courses from '../../components/Home/Courses'
import Banner from '../../components/Home/Banner/Banner'
import PopularCourses from '../../components/Home/PopularCourses/PopularCourses'
import Feedback from '../../components/Home/Feedback/Feedback'
import Statistics from '../../components/Home/Statistics'
import ApplyToBeTeacher from '../../components/Home/ApplyToBeTeacher'

const Home = () => {
  return (
    <div className='font-Nunito'>
      <Helmet>
        <title> CourseNet | Buy Your Desired Course</title>
      </Helmet>
      <Banner></Banner>
      <PopularCourses></PopularCourses>
      <Feedback></Feedback>
      <Statistics></Statistics>
      <ApplyToBeTeacher></ApplyToBeTeacher> 
      {/* Extra two section  */}

      <Courses />
    </div>
  )
}

export default Home
