import React from 'react'
import { useNavigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Logout.css'

function LogOut(props) {

    const logout = useNavigate()
    const onLogOut = () => {
        sessionStorage.removeItem("login-data")
        console.log("in log out")
        props.setIsLoggedIn(false)
    }
    const abortFunc = () => {
        logout("/topNews")
    }

  return (
    <div className='logout'>
        <h3>Are you sure. you wanna log out</h3>
        <button className='btn btn-danger da' onClick={onLogOut}>Yes</button>
        <button className='btn btn-success su' onClick={abortFunc}>No</button>
    </div>
  )
}

export default LogOut