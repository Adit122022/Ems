import React, { useContext, useEffect, useState } from 'react'
import Login from './Components/Auth/Login'
import EmployeDashboard from './Components/Dashboard/EmployeDashboard'
import AdminDashboard from './Components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'
import { AuthContext } from './Context/AuthProvider'

const App = () => {
  const [user, setUser] = useState(null)
  const authData =useContext(AuthContext)
  // console.log(authData.employees)

  const handleLogin =(email,password) => {
if(email =='admin@me.com'  && password =='123'){
setUser('admin')
console.log(user)
  }else if(email == 'usern@me.com' && password == '123'){
    setUser('employee')
    console.log(user)
  }
  else{
    alert('Invalid Credentials! ')
  }
  }
  


//   useEffect(() => {
//     // setLocalStorage()
//   getLocalStorage();
// },)
  
  return (
   <>
{!user ?    <Login handleLogin ={handleLogin}/> : ''}
{user == 'admin' ?   <AdminDashboard/>  : '' }
{user == 'employee' ?   <EmployeDashboard/>  : '' }
  
   

   </>
  )
}

export default App