import React, { useContext, useEffect, useState } from 'react'
import Login from './Components/Auth/Login'
import EmployeDashboard from './Components/Dashboard/EmployeDashboard'
import AdminDashboard from './Components/Dashboard/AdminDashboard'
import { AuthContext } from './Context/AuthProvider'

const App = () => {
  const [user, setUser] = useState(null)
  const authData =useContext(AuthContext)
  console.log(authData)

  const handleLogin =(email,password) => {
if(email =='admin@me.com'  && password =='123'){
setUser({role:'admin'})
localStorage.setItem('loggedInUser',JSON.stringify({role: 'employee'}))
console.log(user)
  }else if((authData) && ( authData.employees.find((e) => email == e.email && password == e.password)) ){
    
    setUser({role:'employee' })
    localStorage.setItem('loggedInUser',JSON.stringify({role: 'employee'}))
    console.log(user)
  }
  else{
    alert('Invalid Credentials! ')
  }
  }
  

  
  return (
   <>
{!user ?    <Login handleLogin ={handleLogin}/> : ''}
{user == 'admin' ?   <AdminDashboard/>  : '' }
{user == 'employee' ?   <EmployeDashboard/>  : '' }
  
   

   </>
  )
}

export default App