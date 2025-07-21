import React, { useState } from 'react'
import { Navigate, replace } from 'react-router-dom'
import Cookies from "js-cookie";

function Protected({children}) {
  
 const isLoggedIn= !!(Cookies.get("accessToken")) || true
 console.log(isLoggedIn);
 
  
  return isLoggedIn ? children : <Navigate to='/login' replace />
}

export default Protected