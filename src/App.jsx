import React, { useContext, useEffect, useState } from 'react'
import Login from './Components/Auth/Login'
import EmployeDashboard from './Components/Dashboard/EmployeDashboard'
import AdminDashboard from './Components/Dashboard/AdminDashboard'
import { AuthContext } from './Context/AuthProvider'

const App = () => {
  const [user, setUser] = useState(null)
  const [LoggedInUserData, setLoggedInUserData] = useState(null)
  const authData =useContext(AuthContext)
  console.log(authData)

  const handleLogin =(email,password) => {
if(email =='admin@me.com'  && password =='123'){
setUser('admin')
localStorage.setItem('loggedInUser',JSON.stringify({role: 'admin'}))
// console.log(user)
  }else if((authData) ){
    const employee = authData.employees.find((e) => email == e.email && password == e.password)
 if(employee){
  setUser('employee' )
 setLoggedInUserData(employee)
    localStorage.setItem('loggedInUser',JSON.stringify({role: 'employee'}))
    // console.log(user)
  }
  }
  else{
    alert('Invalid Credentials! ')
  }
  }
  

  
  return (
   <>
{!user ?    <Login handleLogin ={handleLogin}/> : null}
{user == 'admin' ?   <AdminDashboard/>  : (user == 'employee' ? <EmployeDashboard data ={LoggedInUserData}/>  : null ) }

  
   

   </>
  )
}


export default App