import React from 'react'
import { createBrowserRouter } from 'react-router-dom'

import LandingPage from '../pages/LandingPage'
import StudentLoginPage from '../auth/StudentLoginPage'
import TeacherLoginPage from '../auth/TeacherLoginPage'

import { AdminRoutes } from './AdminRoutes'
import { TeacherRoutes } from './TeacherRoutes'
import { StudentRoutes } from './StudentRoutes'
import { NotFound } from '../pages/NotFound'

const AppRouter = createBrowserRouter([
  { path: '/', element: <LandingPage /> },
  { path: '/login-etudiant', element: <StudentLoginPage /> },
  { path: '/login-enseignant', element: <TeacherLoginPage /> },

  AdminRoutes,
  TeacherRoutes,
  StudentRoutes,

  { path: '*', element: <NotFound /> },
])

export default AppRouter
