import { FaUserCog } from 'react-icons/fa'
import MenuItem from './MenuItem'

const AdminMenu = () => {
  return (
    <>

      <MenuItem icon={FaUserCog} label='All Courses' address='allCoursesAdmin' />
      <MenuItem icon={FaUserCog} label='Teacher Request' address='teacherRequest' />
      <MenuItem icon={FaUserCog} label='All Users' address='allUsers' />
    </>
  )
}

export default AdminMenu
