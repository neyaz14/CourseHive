import { BsFillHouseAddFill } from 'react-icons/bs'
import { MdHomeWork, MdOutlineManageHistory } from 'react-icons/md'
import MenuItem from './MenuItem'
const TeacherMenu = () => {
  return (
    <>
      <MenuItem
        icon={BsFillHouseAddFill}
        label='Add Course'
        address='add-Course'
      />
      <MenuItem icon={MdHomeWork} label='My Courses' address='myCourses' />
     
    </>
  )
}

export default TeacherMenu
