import { Helmet } from 'react-helmet-async'
import AddCourseForm from '../../../components/Form/AddCourseForm'

const AddCourse = () => {
  return (
    <div>
      <Helmet>
        <title>Add Course | Dashboard</title>
      </Helmet>

      {/* Form */}
      <AddCourseForm />
    </div>
  )
}

export default AddCourse
