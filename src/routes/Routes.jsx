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

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },{
        path: '/allcourse',
        element: <AllCourses />,
      },
      {
        path: '/course/:id',
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
        path: 'add-Course',
        element: (
          <PrivateRoute>
            <AddCourse />
          </PrivateRoute>
        ),
      },
      // {
      //   path: 'my-Courses',
      //   element: (
      //     <PrivateRoute>
      //       <MyCourses />
      //     </PrivateRoute>
      //   ),
      // },
      // {
      //   path: 'manage-users',
      //   element: (
      //     <PrivateRoute>
      //       <ManageUsers />
      //     </PrivateRoute>
      //   ),
      // },
      // {
      //   path: 'profile',
      //   element: (
      //     <PrivateRoute>
      //       <Profile />
      //     </PrivateRoute>
      //   ),
      // },
      // {
      //   path: 'my-orders',
      //   element: (
      //     <PrivateRoute>
      //       <MyOrders />
      //     </PrivateRoute>
      //   ),
      // },
      // {
      //   path: 'manage-orders',
      //   element: <ManageOrders />,
      // },
    ],
  },
])
