import React from 'react'
import { createBrowserRouter } from 'react-router-dom'

import LandingPage from '../pages/LandingPage'

import CreatePasswordAdmin from '../auth/CreatePasswordAdmin'
import AdminLogin from '../auth/AdminLogin'

import TeacherLoginPage from '../auth/TeacherLoginPage'

import StudentLoginPage from '../auth/StudentLoginPage'
import CreatePasswordStudent from '../auth/CreatePasswordStudent'

import { AdminRoutes } from './AdminRoutes'
import { TeacherRoutes } from './TeacherRoutes'
import { StudentRoutes } from './StudentRoutes'
import { NotFound } from '../pages/NotFound'
import AdminSecretAccess from '../auth/AdminSecretAccess'

const AppRouter = createBrowserRouter([
  { path: '/', element: <LandingPage /> },

  { path: '/login-etudiant', element: <StudentLoginPage /> },
  { path: '/create-password', element: <CreatePasswordStudent /> },

  { path: '/login-enseignant', element: <TeacherLoginPage /> },

  {
    path: '/admin/admin-secret-access',
    element: <AdminSecretAccess/>,
  },

  {
    path: '/admin/create-password',
    element: <CreatePasswordAdmin />,
  },
  {
    path: '/admin/login',
    element: <AdminLogin />,
  },

  AdminRoutes,
  TeacherRoutes,
  StudentRoutes,

  { path: '*', element: <NotFound /> },
])

export default AppRouter
