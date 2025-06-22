import React from 'react'
import { Outlet } from 'react-router-dom'
import NavbarStudentDashboard from '../components/Dashboard/Student/NavbarStudentDashboard'
import SiderbarStudentDashboard from '../components/Dashboard/Student/SiderbarStudentDashboard'
import UsercardStudentDashboard from '../components/Dashboard/Student/UsercardStudentDashboard'

const StudentLayout = () => {
  return (
    <div className='h-screen flex overflow-hidden'>
      <aside className='hidden md:block w-50 bg-neutral-50 p-4'>
        <SiderbarStudentDashboard/>
      </aside>


    <div className='flex flex-col flex-1 relative'>
      <div className='sticky top-0 z-50'>
        <NavbarStudentDashboard/>
      </div>

      <main className='flex-1 overflow-y-auto bg-white p-4'>
        <Outlet/>
      </main>
    </div>  

      <aside className='hideen lg-block w-36 bg-neutral-50 p-4'>
        <UsercardStudentDashboard/>
      </aside> 
    </div>
  )
}

export default StudentLayout
