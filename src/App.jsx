import React from 'react'
import { RouterProvider } from 'react-router-dom'
import './App.css'
import AppRouter from './routes/AppRouter'


function App() {
 

  return (
    <div>
      <RouterProvider router= {AppRouter} />
    </div>
  )
}

export default App
