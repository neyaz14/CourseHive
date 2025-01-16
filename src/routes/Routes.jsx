import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/Home/Home'
import ErrorPage from '../pages/ErrorPage'
import Login from '../pages/Login/Login'
import SignUp from '../pages/SignUp/SignUp'
import CourseDetails from '../pages/CourseDetails/CourseDetails'
import PrivateRoute from './PrivateRoute'
import DashboardLayout from '../layouts/DashboardLayout'
import AddCourse from '../pages/Dashboard/Teacher/AddCourse'
import ManageUsers from '../pages/Dashboard/Admin/ManageUsers'
import Profile from '../pages/Dashboard/Common/Profile'
import Statistics from '../pages/Dashboard/Common/Statistics'
import MainLayout from '../layouts/MainLayout'
import MyCourses from '../pages/Dashboard/Teacher/MyCourses'
import ManageOrders from '../pages/Dashboard/Teacher/ManageOrders'
import MyOrders from '../pages/Dashboard/Student/MyOrders'
import AllCourses from '../pages/AllCourses'
import TeachOnCourseHive from '../pages/TeachOnCourseHive'
import TeacherRequest from '../pages/Dashboard/Admin/TeacherRequest'
import AdminRoute from './AdminRoute'
import AllUsers from '../pages/Dashboard/Admin/AllUsers'
import TeacherRoute from './TeacherRoute'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      }, {
        path: '/courses',
        element: <AllCourses />,
      },
      {
        path: '/courses/:id',
        element: <CourseDetails />,
      },
      {
        path: '/teachOnCourseHive',
        element: <TeachOnCourseHive />,
      },
    ],
  },
  { path: '/login', element: <Login /> },
  { path: '/signup', element: <SignUp /> },
  {
    path: '/dashboard',
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [


      {
        index: true,
        element: (
          <PrivateRoute>
            <Statistics />
          </PrivateRoute>
        ),
      },
      {
        path: 'profile',
        element: (<PrivateRoute><Profile /></PrivateRoute>),
      },

      // Admin Route 
      {
        path: 'teacherRequest',
        element: (<AdminRoute><TeacherRequest /></AdminRoute>),
      },
      {
        path: 'allCourses',
        element: (<AdminRoute><AllCourses /></AdminRoute>),
      },
      {
        path: 'allUsers',
        element: (<AdminRoute><AllUsers /></AdminRoute>),
      },

      // for teacher
      {
        path: 'add-Course',
        element: (<TeacherRoute><AddCourse /></TeacherRoute>),
      },
      {
        path: 'myCourses',
        element: (<TeacherRoute><MyCourses /></TeacherRoute>),
      },
      // for student 
      ,
      {
        path: 'myEnrolledClass',
        element: (<PrivateRoute><MyCourses /></PrivateRoute>),
      },

    ],
  },
])
