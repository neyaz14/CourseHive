import { Helmet } from 'react-helmet-async'
import Courses from '../../components/Home/Courses'

const Home = () => {
  return (
    <div>
      <Helmet>
        <title> CourseNet | Buy Your Desired Course</title>
      </Helmet>
      <Courses />
    </div>
  )
}

export default Home
