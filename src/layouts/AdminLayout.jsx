import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Outlet } from 'react-router-dom'

const AdminLayout = () => {
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem('adminToken')
    sessionStorage.removeItem('allowCreatePassword')
    navigate('/')
  }
  
  return (
    <div>
      <h1 className="text-xl font-bold text-center">Admin Layout</h1>
      <Outlet />
      <button 
        onClick={handleLogout}
        className='bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600'>
        Déconnexion
      </button>
    </div>
  )
}

export default AdminLayout
