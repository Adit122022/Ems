import React, { useEffect } from 'react'
import Login from './Components/Auth/Login'
import EmployeDashboard from './Components/Dashboard/EmployeDashboard'
import AdminDashboard from './Components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'

const App = () => {
  useEffect(() => {
    // setLocalStorage()
  getLocalStorage();
},)
  
  return (
   <>
   <Login/>
   {/* <EmployeDashboard/> */}
   {/* <AdminDashboard/> */}

   </>
  )
}

export default App