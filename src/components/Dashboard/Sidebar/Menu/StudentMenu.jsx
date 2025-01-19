import { BsFingerprint } from 'react-icons/bs'
import { GrUserAdmin } from 'react-icons/gr'
import MenuItem from './MenuItem'
import { useState } from 'react'
import BecomeTeacherModal from '../../../Modal/BecomeTeacherModal'
const StudentMenu = () => {
  const [isOpen, setIsOpen] = useState(false)

  const closeModal = () => {
    setIsOpen(false)
  }

  return (
    <>

      <MenuItem icon={BsFingerprint} label='My Enrolled Class' address='myEnrolledClass' />
      <MenuItem icon={BsFingerprint} label='Become A Teacher' address='/teachOnCourseHive' />

      
      
    </>
  )
}

export default StudentMenu
