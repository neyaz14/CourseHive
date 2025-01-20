import PropTypes from 'prop-types'
import {
  Dialog,
  Transition,
  TransitionChild,
  DialogPanel,
  DialogTitle,
} from '@headlessui/react'
import { Fragment } from 'react'

import UpdateCourseForm from '../Form/UpdateCourseForm'

const UpdateCourseModal = ({ setIsEditModalOpen, isOpen, EditModalOpen, course,refetch }) => {
  refetch();
  return (
    <div>
      <Dialog open={EditModalOpen} onClose={() => setIsEditModalOpen(false)} className="relative z-90">
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          <DialogPanel className="max-w-lg space-y-4 bg-opacity-98 rounded-2xl bg-green-800 p-12 text-white ">
            <DialogTitle className="font-bold">Assingment Upload </DialogTitle>

            <UpdateCourseForm course={course}></UpdateCourseForm>


          </DialogPanel>
        </div>
      </Dialog>
    </div>

  )
}

UpdateCourseModal.propTypes = {
  setIsEditModalOpen: PropTypes.func,
  EditModalOpen: PropTypes.bool,
}

export default UpdateCourseModal
