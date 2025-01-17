import { Helmet } from 'react-helmet-async'
import AddCourseForm from '../../../components/Form/AddCourseForm'
import Container from '../../../components/Shared/Container'

const AddCourse = () => {
  return (
    <Container>
      <Helmet>
        <title>Add Course | Dashboard</title>
      </Helmet>
 
      {/* Form */}
      <div>
        <h1 className='text-3xl font-bold text-gray-900'>Launch New Courses...</h1>
      </div>
      <AddCourseForm />
    </Container>
  )
}

export default AddCourse
